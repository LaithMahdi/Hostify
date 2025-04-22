import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = new Hono();

import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'



// Schéma de validation Zod
const filterSchema = z.object({
  region: z.string().optional(),
  rating: z.coerce.number().min(0).max(5).optional(),
  hasParking: z.coerce.boolean().optional(),
  isPetFriendly: z.coerce.boolean().optional(),
  ownerId: z.string().optional()
})

// Compter toutes les GuestHouses
app.get('GuestHouse/count', async (c) => {
  const count = await prisma.guestHouse.count()
  return c.json({ count })
})

// Compter avec filtres
app.get('GuestHouse/count/filtered', 
  zValidator('query', filterSchema),
  async (c) => {
    const filters = c.req.valid('query')
    
    const count = await prisma.guestHouse.count({
      where: {
        region: filters.region,
        rating: filters.rating ? { gte: filters.rating } : undefined,
        hasParking: filters.hasParking,
        isPetFriendly: filters.isPetFriendly,
        ownerId: filters.ownerId
      }
    })

    return c.json({ 
      count,
      filters 
    })
  }
)
const querySchema = z.object({
    minRooms: z.coerce.number().min(0).optional(),
    region: z.string().optional(),
    onlyActive: z.coerce.boolean().optional()
  })
  
  // Compter les chambres par GuestHouse
  app.get(
    '/stats/rooms-per-guesthouse',
    zValidator('query', querySchema),
    async (c) => {
      const { minRooms, region, onlyActive } = c.req.valid('query')
  
      const results = await prisma.guestHouse.findMany({
        where: {
          region,
          rooms: {
            some: {
              isActive: onlyActive ? true : undefined
            }
          }
        },
        include: {
          _count: {
            select: { rooms: true }
          }
        },
        orderBy: {
          rooms: {
            _count: 'desc'
          }
        }
      })
  
      // Filtrage supplémentaire
      const filtered = results.filter(gh => 
        minRooms ? gh._count.rooms >= minRooms : true
      )
  
      return c.json({
        data: filtered.map(gh => ({
          guestHouseId: gh.id,
          name: gh.name,
          region: gh.region,
          totalRooms: gh._count.rooms
        })),
        meta: {
          totalGuestHouses: filtered.length,
          totalRooms: filtered.reduce((sum, gh) => sum + gh._count.rooms, 0)
        }
      })
    }
  )

// Middleware pour gérer les erreurs Prisma
app.onError((err, c) => {
  console.error(err);
  return c.json({ error: 'Internal Server Error' }, 500);
});

// Endpoint pour compter toutes les chambres
app.get('/rooms/count', async (c) => {
  const count = await prisma.room.count();
  return c.json({ count });
});

// Endpoint pour compter avec filtres (type, status, etc.)
app.get('/rooms/count/filtered', async (c) => {
  const { type, status, capacity, hasBalcony, isActive } = c.req.query();

  const filters = {
    ...(type && { type: type as any }), 
    ...(status && { status: status as any }), 
    ...(capacity && { capacity: parseInt(capacity) }),
    ...(hasBalcony && { hasBalcony: hasBalcony === 'true' }),
    ...(isActive && { isActive: isActive === 'true' }),
  };

  const count = await prisma.room.count({ where: filters });
  return c.json({ count, filters });
});

// Schéma de validation
const reservationFilterSchema = z.object({
    roomId: z.coerce.number().optional(),
    clientId: z.string().optional(),
    status: z.string().optional(),
    dateFrom: z.coerce.date().optional(),
    dateTo: z.coerce.date().optional(),
    minPrice: z.coerce.number().optional(),
    maxPrice: z.coerce.number().optional()
  })
  
  // Compter toutes les réservations
  app.get('/reservations/count', async (c) => {
    const count = await prisma.reservation.count()
    return c.json({ count })
  })
  
  // Compter avec filtres avancés
  app.get('/reservations/count/filtered',
    zValidator('query', reservationFilterSchema),
    async (c) => {
      const filters = c.req.valid('query')
      
      const whereClause = {
        roomId: filters.roomId,
        clientId: filters.clientId,
        status: filters.status as any,
        AND: [
          filters.dateFrom ? { checkIn: { gte: filters.dateFrom } } : {},
          filters.dateTo ? { checkOut: { lte: filters.dateTo } } : {},
          filters.minPrice ? { totalPrice: { gte: filters.minPrice } } : {},
          filters.maxPrice ? { totalPrice: { lte: filters.maxPrice } } : {}
        ].filter(condition => Object.keys(condition).length > 0)
      }
  
      const count = await prisma.reservation.count({
        where: whereClause
      })
  
      return c.json({ 
        count,
        filters: {
          ...filters,
          dateFrom: filters.dateFrom?.toISOString(),
          dateTo: filters.dateTo?.toISOString()
        }
      })
    }
  )
  
  // Statistiques avancées
  app.get('/reservations/stats', async (c) => {
    const [total, pending, confirmed, cancelled] = await Promise.all([
      prisma.reservation.count(),
      prisma.reservation.count({ where: { status: 'PENDING' } }),
      prisma.reservation.count({ where: { status: 'CONFIRMED' } }),
      prisma.reservation.count({ where: { status: 'CANCELLED' } })
    ])
  
    const revenue = await prisma.reservation.aggregate({
      _sum: { totalPrice: true },
      where: { status: 'CONFIRMED' }
    })
  
    return c.json({
      stats: {
        total,
        byStatus: { pending, confirmed, cancelled },
        totalRevenue: revenue._sum.totalPrice || 0
      }
    })
  })
  // Statistiques globales des équipements
app.get('/equipments/stats', async (c) => {
  // Compter tous les équipements
  const totalEquipments = await prisma.equipment.count();
  
  // Compter les équipements actifs/inactifs
  const [active, inactive] = await Promise.all([
    prisma.equipment.count({ where: { isActive: true } }),
    prisma.equipment.count({ where: { isActive: false } })
  ]);

  // Top 5 des équipements les plus utilisés
  const mostUsed = await prisma.equipment.findMany({
    include: {
      _count: {
        select: { rooms: true }
      }
    },
    orderBy: {
      rooms: {
        _count: 'desc'
      }
    },
    take: 5
  });

  return c.json({
    stats: {
      totalEquipments,
      byStatus: { active, inactive },
      mostUsed: mostUsed.map(e => ({
        id: e.id,
        name: e.name,
        totalRooms: e._count.rooms
      }))
    }
  });
});
// Schéma de validation
const guestHouseEquipmentSchema = z.object({
  guestHouseId: z.coerce.number().optional(),
  region: z.string().optional(),
  minEquipments: z.coerce.number().min(0).optional()
});

// Nombre d'équipements par GuestHouse
app.get(
  '/stats/equipments-per-guesthouse',
  zValidator('query', guestHouseEquipmentSchema),
  async (c) => {
    const { guestHouseId, region, minEquipments } = c.req.valid('query');

    // Obtenir toutes les chambres avec leurs équipements
    const guestHouses = await prisma.guestHouse.findMany({
      where: {
        id: guestHouseId,
        region
      },
      include: {
        rooms: {
          include: {
            _count: {
              select: { equipment: true }
            }
          },
          where: {
            isActive: true
          }
        }
      }
    });

    // Calculer le total d'équipements par GuestHouse
    const results = guestHouses.map(gh => {
      const totalEquipments = gh.rooms.reduce(
        (sum, room) => sum + room._count.equipment, 
        0
      );
      
      return {
        guestHouseId: gh.id,
        name: gh.name,
        region: gh.region,
        totalRooms: gh.rooms.length,
        totalEquipments
      };
    });

    // Filtrer par nombre minimum d'équipements si spécifié
    const filtered = minEquipments 
      ? results.filter(gh => gh.totalEquipments >= minEquipments)
      : results;

    return c.json({
      data: filtered.sort((a, b) => b.totalEquipments - a.totalEquipments),
      meta: {
        totalGuestHouses: filtered.length,
        totalEquipments: filtered.reduce((sum, gh) => sum + gh.totalEquipments, 0)
      }
    });
  }
);
export default app;
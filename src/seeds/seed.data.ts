import { db } from "@/lib/prisma";
import { ContactType, RoomStatus, RoomType } from "@prisma/client";
import { seedUsers } from "./seed.user";

export const seedData = async () => {
  try {
    const usersWithIds = await seedUsers();

    // Check if Guest Houses already exist
    const guestHouseCount = await db.guestHouse.count();
    if (guestHouseCount > 0) {
      console.log("⚠️ Guest House data already exists. Skipping insert.");
    } else {
      // Real Guest House Data
      const guestHouses = [
        {
          name: "Dar El Medina",
          address: "Rue Sidi Ben Arous, Tunis",
          region: "Tunis",
          description:
            "A charming boutique guesthouse in the heart of Tunis Medina.",
          rating: 4.8,
          hasParking: true,
          isPetFriendly: false,
          ownerId: usersWithIds[1].id,
        },
        {
          name: "Villa Didon",
          address: "Carthage, Tunis",
          region: "Tunis",
          description:
            "A luxurious guesthouse with stunning views of the Mediterranean.",
          rating: 4.7,
          hasParking: true,
          isPetFriendly: true,
          ownerId: usersWithIds[1].id,
        },
        {
          name: "Maison Dedine",
          address: "Sidi Bou Said, Tunis",
          region: "Tunis",
          description:
            "An elegant guesthouse with an artistic touch and sea views.",
          rating: 4.9,
          hasParking: false,
          isPetFriendly: true,
          ownerId: usersWithIds[3].id,
        },
        {
          name: "Dar Ben Gacem",
          address: "Medina of Tunis, Tunis",
          region: "Tunis",
          description:
            "A beautifully restored 17th-century house offering authentic stays.",
          rating: 4.6,
          hasParking: false,
          isPetFriendly: false,
          ownerId: usersWithIds[3].id,
        },
        {
          name: "La Chambre Bleue",
          address: "Medina of Tunis, Tunis",
          region: "Tunis",
          description:
            "A historic house with unique architecture and cultural charm.",
          rating: 4.7,
          hasParking: false,
          isPetFriendly: true,
          ownerId: usersWithIds[3].id,
        },
        {
          name: "Dar Said",
          address: "Sidi Bou Said, Tunis",
          region: "Tunis",
          description:
            "A refined guesthouse in the heart of Sidi Bou Said with stunning views.",
          rating: 4.8,
          hasParking: true,
          isPetFriendly: false,
          ownerId: usersWithIds[9].id,
        },
        {
          name: "Dar Antonia",
          address: "Sousse Medina, Sousse",
          region: "Sousse",
          description:
            "A stylish guesthouse blending history and modern comfort.",
          rating: 4.9,
          hasParking: true,
          isPetFriendly: true,
          ownerId: usersWithIds[9].id,
        },
        {
          name: "Dar Sabri",
          address: "Nabeul, Nabeul",
          region: "Nabeul",
          description:
            "A contemporary guesthouse with a traditional Tunisian touch.",
          rating: 4.7,
          hasParking: false,
          isPetFriendly: false,
          ownerId: usersWithIds[9].id,
        },
        {
          name: "Dar Kenza",
          address: "Medina of Tunis, Tunis",
          region: "Tunis",
          description:
            "An authentic and cozy guesthouse in the heart of the Medina.",
          rating: 4.6,
          hasParking: false,
          isPetFriendly: true,
          ownerId: usersWithIds[11].id,
        },
        {
          name: "Dar Bibine",
          address: "Djerba, Medenine",
          region: "Djerba",
          description:
            "A charming white-washed guesthouse offering tranquility and comfort.",
          rating: 4.8,
          hasParking: true,
          isPetFriendly: false,
          ownerId: usersWithIds[11].id,
        },
        {
          name: "Dar El Marsa",
          address: "La Marsa, Tunis",
          region: "Tunis",
          description:
            "A seaside guesthouse with a relaxing atmosphere and modern amenities.",
          rating: 4.5,
          hasParking: true,
          isPetFriendly: true,
          ownerId: usersWithIds[11].id,
        },
        {
          name: "Dar El Hana",
          address: "Hammamet, Nabeul",
          region: "Nabeul",
          description:
            "A peaceful retreat surrounded by lush gardens and close to the beach.",
          rating: 4.7,
          hasParking: true,

          isPetFriendly: false,
          ownerId: usersWithIds[13].id,
        },
        {
          name: "Dar El Andalous",
          address: "Mahdia, Mahdia",
          region: "Mahdia",
          description:
            "A traditional guesthouse with Andalusian-inspired architecture.",
          rating: 4.6,
          hasParking: false,
          isPetFriendly: true,
          ownerId: usersWithIds[13].id,
        },
        {
          name: "Dar El Ghazal",
          address: "Tabarka, Jendouba",
          region: "Tabarka",
          description:
            "A cozy guesthouse nestled in the mountains with breathtaking views.",
          rating: 4.8,
          hasParking: true,
          isPetFriendly: true,
          ownerId: usersWithIds[15].id,
        },
        {
          name: "Dar El Bahri",
          address: "Monastir, Monastir",
          region: "Monastir",
          description:
            "A beachfront guesthouse offering stunning sea views and a serene ambiance.",
          rating: 4.7,
          hasParking: true,
          isPetFriendly: false,
          ownerId: usersWithIds[15].id,
        },
        {
          name: "Dar El Fell",
          address: "Kairouan, Kairouan",
          region: "Kairouan",
          description:
            "A historic guesthouse in the heart of Kairouan, close to the Great Mosque.",
          rating: 4.6,
          hasParking: false,
          isPetFriendly: false,
          ownerId: usersWithIds[15].id,
        },
        {
          name: "Dar El Rih",
          address: "Tozeur, Tozeur",
          region: "Tozeur",
          description:
            "A desert oasis guesthouse with traditional architecture and palm groves.",
          rating: 4.9,
          hasParking: true,
          isPetFriendly: true,
          ownerId: usersWithIds[17].id,
        },
        {
          name: "Dar El Safi",
          address: "Zaghouan, Zaghouan",
          region: "Zaghouan",
          description:
            "A tranquil guesthouse surrounded by olive groves and natural springs.",
          rating: 4.7,
          hasParking: true,
          isPetFriendly: false,
          ownerId: usersWithIds[17].id,
        },
        {
          name: "Dar El Nour",
          address: "Bizerte, Bizerte",
          region: "Bizerte",
          description:
            "A charming guesthouse with a mix of Tunisian and Mediterranean styles.",
          rating: 4.6,
          hasParking: false,
          isPetFriendly: true,
          ownerId: usersWithIds[17].id,
        },
        {
          name: "Dar El Yasmine",
          address: "Sfax, Sfax",
          region: "Sfax",
          description:
            "A modern guesthouse with a traditional courtyard and jasmine-filled gardens.",
          rating: 4.8,
          hasParking: true,
          isPetFriendly: false,
          ownerId: usersWithIds[19].id,
        },
        {
          name: "Dar El Sahel",
          address: "Gabes, Gabes",
          region: "Gabes",
          description:
            "A coastal guesthouse with easy access to the beach and local markets.",
          rating: 4.5,
          hasParking: true,
          isPetFriendly: true,
          ownerId: usersWithIds[19].id,
        },
        {
          name: "Dar El Atlas",
          address: "Tataouine, Tataouine",
          region: "Tataouine",
          description:
            "A unique guesthouse inspired by Berber architecture and desert landscapes.",
          rating: 4.7,
          hasParking: false,
          isPetFriendly: false,
          ownerId: usersWithIds[19].id,
        },
        {
          name: "Dar El Khayam",
          address: "Gafsa, Gafsa",
          region: "Gafsa",
          description:
            "A rustic guesthouse offering a glimpse into traditional desert life.",
          rating: 4.6,
          hasParking: true,
          isPetFriendly: true,
          ownerId: usersWithIds[21].id,
        },
        {
          name: "Dar El Misk",
          address: "Kasserine, Kasserine",
          region: "Kasserine",
          description:
            "A serene guesthouse surrounded by mountains and natural beauty.",
          rating: 4.5,
          hasParking: false,
          isPetFriendly: false,
          ownerId: usersWithIds[21].id,
        },
        {
          name: "Dar El Warda",
          address: "Beja, Beja",
          region: "Beja",
          description:
            "A floral-themed guesthouse with a peaceful garden and cozy rooms.",
          rating: 4.7,
          hasParking: true,
          isPetFriendly: true,
          ownerId: usersWithIds[21].id,
        },
        {
          name: "Dar El Sahab",
          address: "Siliana, Siliana",
          region: "Siliana",
          description:
            "A countryside guesthouse offering fresh air and scenic views.",
          rating: 4.6,
          hasParking: true,
          isPetFriendly: false,
          ownerId: usersWithIds[23].id,
        },
        {
          name: "Dar El Baraka",
          address: "Kef, Kef",
          region: "Kef",
          description:
            "A historic guesthouse with panoramic views of the Kef mountains.",
          rating: 4.8,
          hasParking: false,
          isPetFriendly: true,
          ownerId: usersWithIds[23].id,
        },
        {
          name: "Dar El Amal",
          address: "Medenine, Medenine",
          region: "Medenine",
          description:
            "A traditional guesthouse with a focus on cultural experiences.",
          rating: 4.7,
          hasParking: true,
          isPetFriendly: false,
          ownerId: usersWithIds[23].id,
        },
        {
          name: "Dar El Hayet",
          address: "Kebili, Kebili",
          region: "Kebili",
          description:
            "A desert guesthouse offering a unique stay in the Sahara.",
          rating: 4.9,
          hasParking: true,
          isPetFriendly: true,
          ownerId: usersWithIds[25].id,
        },
        {
          name: "Dar El Samra",
          address: "Douz, Kebili",
          region: "Douz",
          description:
            "A guesthouse known for its warm hospitality and proximity to the dunes.",
          rating: 4.8,
          hasParking: false,
          isPetFriendly: false,
          ownerId: usersWithIds[25].id,
        },
        {
          name: "Dar El Noujoum",
          address: "Touzeur, Tozeur",
          region: "Tozeur",
          description:
            "A star-themed guesthouse with a rooftop terrace for stargazing.",
          rating: 4.7,
          hasParking: true,
          isPetFriendly: true,
          ownerId: usersWithIds[25].id,
        },
        {
          name: "Dar El Safir",
          address: "Sidi Bouzid, Sidi Bouzid",
          region: "Sidi Bouzid",
          description:
            "A cozy guesthouse offering a peaceful retreat in the countryside.",
          rating: 4.6,
          hasParking: false,
          isPetFriendly: false,
          ownerId: usersWithIds[27].id,
        },
        {
          name: "Dar El Manara",
          address: "Mahres, Sfax",
          region: "Sfax",
          description:
            "A lighthouse-themed guesthouse with stunning coastal views.",
          rating: 4.8,
          hasParking: true,
          isPetFriendly: true,
          ownerId: usersWithIds[27].id,
        },
        {
          name: "Dar El Qamar",
          address: "Menzel Bourguiba, Bizerte",
          region: "Bizerte",
          description:
            "A moon-themed guesthouse with a romantic and serene ambiance.",
          rating: 4.7,
          hasParking: false,
          isPetFriendly: false,
          ownerId: usersWithIds[15].id,
        },
        {
          name: "Dar El Shams",
          address: "Ras Jebel, Bizerte",
          region: "Bizerte",
          description:
            "A sun-themed guesthouse with bright, airy rooms and a sunny courtyard.",
          rating: 4.6,
          hasParking: true,
          isPetFriendly: true,
          ownerId: usersWithIds[15].id,
        },
        {
          name: "Dar El Layali",
          address: "Korba, Nabeul",
          region: "Nabeul",
          description:
            "A night-themed guesthouse with a tranquil and relaxing atmosphere.",
          rating: 4.7,
          hasParking: false,
          isPetFriendly: false,
          ownerId: usersWithIds[15].id,
        },
        {
          name: "Dar El Sabah",
          address: "El Haouaria, Nabeul",
          region: "Nabeul",
          description:
            "A morning-themed guesthouse with sunrise views over the Mediterranean.",
          rating: 4.8,
          hasParking: true,
          isPetFriendly: true,
          ownerId: usersWithIds[15].id,
        },
      ];

      await db.guestHouse.createMany({ data: guestHouses });
      console.log("✅ 37 Guest Houses seeded successfully.");
    }

    // Fetch guest houses
    const guestHouses = await db.guestHouse.findMany({ select: { id: true } });

    // Check if Rooms already exist
    const roomCount = await db.room.count();
    if (roomCount > 0) {
      console.log("⚠️ Room data already exists. Skipping insert.");
    } else {
      // Realistic Room Data
      const roomsData = [
        {
          roomNumber: 101,
          type: RoomType.SINGLE,
          pricePerNight: 85.0,
          status: RoomStatus.AVAILABLE,
          capacity: 1,
          hasBalcony: true,
          description: "A compact single room with ocean view.",
          guestHouseId: guestHouses[0].id,
          ownerId: usersWithIds[1].id,
        },
        {
          roomNumber: 102,
          type: RoomType.DOUBLE,
          pricePerNight: 120.0,
          status: RoomStatus.AVAILABLE,
          capacity: 2,
          hasBalcony: false,
          description: "Spacious double room with modern decor.",
          guestHouseId: guestHouses[1].id,
          ownerId: usersWithIds[1].id,
        },
        {
          roomNumber: 103,
          type: RoomType.SUITE,
          pricePerNight: 250.0,
          status: RoomStatus.BOOKED,
          capacity: 4,
          hasBalcony: true,
          description: "Luxury suite with private balcony.",
          guestHouseId: guestHouses[2].id,
          ownerId: usersWithIds[3].id,
        },
        {
          roomNumber: 104,
          type: RoomType.FAMILY,
          pricePerNight: 180.0,
          status: RoomStatus.AVAILABLE,
          capacity: 4,
          hasBalcony: false,
          description: "Family-friendly room with multiple beds.",
          guestHouseId: guestHouses[3].id,
          ownerId: usersWithIds[3].id,
        },
        {
          roomNumber: 105,
          type: RoomType.SINGLE,
          pricePerNight: 70.0,
          status: RoomStatus.AVAILABLE,
          capacity: 1,
          hasBalcony: true,
          description: "A small single room with scenic view.",
          guestHouseId: guestHouses[4].id,
          ownerId: usersWithIds[5].id,
        },
        {
          roomNumber: 106,
          type: RoomType.DOUBLE,
          pricePerNight: 130.0,
          status: RoomStatus.AVAILABLE,
          capacity: 2,
          hasBalcony: true,
          description: "Double room with modern amenities.",
          guestHouseId: guestHouses[5].id,
          ownerId: usersWithIds[5].id,
        },
        {
          roomNumber: 107,
          type: RoomType.SUITE,
          pricePerNight: 220.0,
          status: RoomStatus.BOOKED,
          capacity: 4,
          hasBalcony: true,
          description: "Premium suite with top-notch facilities.",
          guestHouseId: guestHouses[6].id,
          ownerId: usersWithIds[5].id,
        },
        {
          roomNumber: 108,
          type: RoomType.FAMILY,
          pricePerNight: 160.0,
          status: RoomStatus.AVAILABLE,
          capacity: 4,
          hasBalcony: false,
          description: "Spacious family room with cozy design.",
          guestHouseId: guestHouses[7].id,
          ownerId: usersWithIds[5].id,
        },
        {
          roomNumber: 109,
          type: RoomType.SINGLE,
          pricePerNight: 95.0,
          status: RoomStatus.AVAILABLE,
          capacity: 1,
          hasBalcony: false,
          description: "Comfortable single room with fast WiFi.",
          guestHouseId: guestHouses[8].id,
          ownerId: usersWithIds[5].id,
        },
        {
          roomNumber: 110,
          type: RoomType.DOUBLE,
          pricePerNight: 140.0,
          status: RoomStatus.AVAILABLE,
          capacity: 2,
          hasBalcony: true,
          description: "Modern double room with city view.",
          guestHouseId: guestHouses[9].id,
          ownerId: usersWithIds[7].id,
        },
        {
          roomNumber: 201,
          type: RoomType.SINGLE,
          pricePerNight: 90.0,
          status: RoomStatus.AVAILABLE,
          capacity: 1,
          hasBalcony: false,
          description: "Cozy single room with a comfortable workspace.",
          guestHouseId: guestHouses[10].id,
          ownerId: usersWithIds[7].id,
        },
        {
          roomNumber: 202,
          type: RoomType.DOUBLE,
          pricePerNight: 150.0,
          status: RoomStatus.AVAILABLE,
          capacity: 2,
          hasBalcony: true,
          description: "Elegant double room with a private terrace.",
          guestHouseId: guestHouses[11].id,
          ownerId: usersWithIds[7].id,
        },
        {
          roomNumber: 203,
          type: RoomType.SUITE,
          pricePerNight: 300.0,
          status: RoomStatus.BOOKED,
          capacity: 4,
          hasBalcony: true,
          description: "Exclusive suite with a jacuzzi and sea view.",
          guestHouseId: guestHouses[12].id,
          ownerId: usersWithIds[7].id,
        },
        {
          roomNumber: 204,
          type: RoomType.FAMILY,
          pricePerNight: 200.0,
          status: RoomStatus.AVAILABLE,
          capacity: 4,
          hasBalcony: false,
          description: "Family room with bunk beds and a play area.",
          guestHouseId: guestHouses[13].id,
          ownerId: usersWithIds[9].id,
        },
        {
          roomNumber: 205,
          type: RoomType.SINGLE,
          pricePerNight: 80.0,
          status: RoomStatus.AVAILABLE,
          capacity: 1,
          hasBalcony: true,
          description: "Single room with a balcony overlooking the garden.",
          guestHouseId: guestHouses[14].id,
          ownerId: usersWithIds[11].id,
        },
        {
          roomNumber: 206,
          type: RoomType.DOUBLE,
          pricePerNight: 160.0,
          status: RoomStatus.AVAILABLE,
          capacity: 2,
          hasBalcony: false,
          description: "Double room with a cozy fireplace.",
          guestHouseId: guestHouses[15].id,
          ownerId: usersWithIds[11].id,
        },
        {
          roomNumber: 207,
          type: RoomType.SUITE,
          pricePerNight: 280.0,
          status: RoomStatus.BOOKED,
          capacity: 4,
          hasBalcony: true,
          description: "Luxury suite with a private pool and sun deck.",
          guestHouseId: guestHouses[16].id,
          ownerId: usersWithIds[15].id,
        },
        {
          roomNumber: 208,
          type: RoomType.FAMILY,
          pricePerNight: 190.0,
          status: RoomStatus.AVAILABLE,
          capacity: 4,
          hasBalcony: false,
          description: "Family room with a kitchenette and dining area.",
          guestHouseId: guestHouses[17].id,
          ownerId: usersWithIds[15].id,
        },
        {
          roomNumber: 209,
          type: RoomType.SINGLE,
          pricePerNight: 100.0,
          status: RoomStatus.AVAILABLE,
          capacity: 1,
          hasBalcony: false,
          description: "Single room with a minimalist design and city view.",
          guestHouseId: guestHouses[18].id,
          ownerId: usersWithIds[17].id,
        },
        {
          roomNumber: 210,
          type: RoomType.DOUBLE,
          pricePerNight: 170.0,
          status: RoomStatus.AVAILABLE,
          capacity: 2,
          hasBalcony: true,
          description: "Double room with a private balcony and mountain view.",
          guestHouseId: guestHouses[19].id,
          ownerId: usersWithIds[17].id,
        },
        {
          roomNumber: 301,
          type: RoomType.SINGLE,
          pricePerNight: 75.0,
          status: RoomStatus.AVAILABLE,
          capacity: 1,
          hasBalcony: false,
          description: "Affordable single room with all basic amenities.",
          guestHouseId: guestHouses[20].id,
          ownerId: usersWithIds[21].id,
        },
        {
          roomNumber: 302,
          type: RoomType.DOUBLE,
          pricePerNight: 140.0,
          status: RoomStatus.AVAILABLE,
          capacity: 2,
          hasBalcony: true,
          description: "Double room with a balcony and garden view.",
          guestHouseId: guestHouses[21].id,
          ownerId: usersWithIds[21].id,
        },
        {
          roomNumber: 303,
          type: RoomType.SUITE,
          pricePerNight: 260.0,
          status: RoomStatus.BOOKED,
          capacity: 4,
          hasBalcony: true,
          description: "Suite with a private lounge and panoramic views.",
          guestHouseId: guestHouses[22].id,
          ownerId: usersWithIds[21].id,
        },
        {
          roomNumber: 304,
          type: RoomType.FAMILY,
          pricePerNight: 210.0,
          status: RoomStatus.AVAILABLE,
          capacity: 4,
          hasBalcony: false,
          description: "Family room with a spacious layout and modern decor.",
          guestHouseId: guestHouses[23].id,
          ownerId: usersWithIds[23].id,
        },
        {
          roomNumber: 305,
          type: RoomType.SINGLE,
          pricePerNight: 85.0,
          status: RoomStatus.AVAILABLE,
          capacity: 1,
          hasBalcony: true,
          description: "Single room with a balcony and sea breeze.",
          guestHouseId: guestHouses[24].id,
          ownerId: usersWithIds[23].id,
        },
        {
          roomNumber: 306,
          type: RoomType.DOUBLE,
          pricePerNight: 150.0,
          status: RoomStatus.AVAILABLE,
          capacity: 2,
          hasBalcony: false,
          description: "Double room with a cozy reading nook.",
          guestHouseId: guestHouses[25].id,
          ownerId: usersWithIds[23].id,
        },
        {
          roomNumber: 307,
          type: RoomType.SUITE,
          pricePerNight: 270.0,
          status: RoomStatus.BOOKED,
          capacity: 4,
          hasBalcony: true,
          description: "Suite with a private terrace and outdoor seating.",
          guestHouseId: guestHouses[26].id,
          ownerId: usersWithIds[25].id,
        },
        {
          roomNumber: 308,
          type: RoomType.FAMILY,
          pricePerNight: 220.0,
          status: RoomStatus.AVAILABLE,
          capacity: 4,
          hasBalcony: false,
          description: "Family room with a kids' play corner and TV.",
          guestHouseId: guestHouses[27].id,
          ownerId: usersWithIds[25].id,
        },
        {
          roomNumber: 309,
          type: RoomType.SINGLE,
          pricePerNight: 95.0,
          status: RoomStatus.AVAILABLE,
          capacity: 1,
          hasBalcony: false,
          description: "Single room with a modern design and fast WiFi.",
          guestHouseId: guestHouses[28].id,
          ownerId: usersWithIds[27].id,
        },
        {
          roomNumber: 310,
          type: RoomType.DOUBLE,
          pricePerNight: 180.0,
          status: RoomStatus.AVAILABLE,
          capacity: 2,
          hasBalcony: true,
          description: "Double room with a private balcony and sunset views.",
          guestHouseId: guestHouses[29].id,
          ownerId: usersWithIds[27].id,
        },
      ];

      await db.room.createMany({ data: roomsData });
      console.log("✅ 30 Rooms seeded successfully.");
    }

    // Check if Contacts already exist
    const contactCount = await db.contact.count();
    if (contactCount > 0) {
      console.log("⚠️ Contact data already exists. Skipping insert.");
    } else {
      // Realistic Contact Data
      const contactsData = [
        {
          type: ContactType.PHONE,
          value: "+216 71 123 456",
          guestHouseId: guestHouses[0].id,
        },
        {
          type: ContactType.EMAIL,
          value: "info@darelmedina.com",
          guestHouseId: guestHouses[0].id,
        },
        {
          type: ContactType.WEBSITE,
          value: "www.darelmedina.com",
          guestHouseId: guestHouses[0].id,
        },
        {
          type: ContactType.FACEBOOK,
          value: "fb.com/darelmedina",
          guestHouseId: guestHouses[0].id,
        },
        {
          type: ContactType.INSTAGRAM,
          value: "@darelmedina",
          guestHouseId: guestHouses[0].id,
        },
        {
          type: ContactType.PHONE,
          value: "+216 71 234 567",
          guestHouseId: guestHouses[1].id,
        },
        {
          type: ContactType.EMAIL,
          value: "contact@villadidon.com",
          guestHouseId: guestHouses[1].id,
        },
        {
          type: ContactType.WEBSITE,
          value: "www.villadidon.com",
          guestHouseId: guestHouses[1].id,
        },
        {
          type: ContactType.FACEBOOK,
          value: "fb.com/villadidon",
          guestHouseId: guestHouses[1].id,
        },
        {
          type: ContactType.INSTAGRAM,
          value: "@villadidon",
          guestHouseId: guestHouses[1].id,
        },
        {
          type: ContactType.PHONE,
          value: "+216 71 345 678",
          guestHouseId: guestHouses[2].id,
        },
        {
          type: ContactType.EMAIL,
          value: "info@maisondedine.com",
          guestHouseId: guestHouses[2].id,
        },
        {
          type: ContactType.WEBSITE,
          value: "www.maisondedine.com",
          guestHouseId: guestHouses[2].id,
        },
        {
          type: ContactType.FACEBOOK,
          value: "fb.com/maisondedine",
          guestHouseId: guestHouses[2].id,
        },
        {
          type: ContactType.INSTAGRAM,
          value: "@maisondedine",
          guestHouseId: guestHouses[2].id,
        },
        {
          type: ContactType.PHONE,
          value: "+216 71 456 789",
          guestHouseId: guestHouses[3].id,
        },
        {
          type: ContactType.EMAIL,
          value: "contact@darbengacem.com",
          guestHouseId: guestHouses[3].id,
        },
        {
          type: ContactType.WEBSITE,
          value: "www.darbengacem.com",
          guestHouseId: guestHouses[3].id,
        },
        {
          type: ContactType.FACEBOOK,
          value: "fb.com/darbengacem",
          guestHouseId: guestHouses[3].id,
        },
        {
          type: ContactType.INSTAGRAM,
          value: "@darbengacem",
          guestHouseId: guestHouses[3].id,
        },
        {
          type: ContactType.PHONE,
          value: "+216 71 567 890",
          guestHouseId: guestHouses[4].id,
        },
        {
          type: ContactType.EMAIL,
          value: "info@lachambrebleue.com",
          guestHouseId: guestHouses[4].id,
        },
        {
          type: ContactType.WEBSITE,
          value: "www.lachambrebleue.com",
          guestHouseId: guestHouses[4].id,
        },
        {
          type: ContactType.FACEBOOK,
          value: "fb.com/lachambrebleue",
          guestHouseId: guestHouses[4].id,
        },
        {
          type: ContactType.INSTAGRAM,
          value: "@lachambrebleue",
          guestHouseId: guestHouses[4].id,
        },
        {
          type: ContactType.PHONE,
          value: "+216 71 678 901",
          guestHouseId: guestHouses[5].id,
        },
        {
          type: ContactType.EMAIL,
          value: "contact@darsaid.com",
          guestHouseId: guestHouses[5].id,
        },
        {
          type: ContactType.WEBSITE,
          value: "www.darsaid.com",
          guestHouseId: guestHouses[5].id,
        },
        {
          type: ContactType.FACEBOOK,
          value: "fb.com/darsaid",
          guestHouseId: guestHouses[5].id,
        },
        {
          type: ContactType.INSTAGRAM,
          value: "@darsaid",
          guestHouseId: guestHouses[5].id,
        },
        {
          type: ContactType.PHONE,
          value: "+216 71 789 012",
          guestHouseId: guestHouses[6].id,
        },
        {
          type: ContactType.EMAIL,
          value: "info@darantonia.com",
          guestHouseId: guestHouses[6].id,
        },
        {
          type: ContactType.WEBSITE,
          value: "www.darantonia.com",
          guestHouseId: guestHouses[6].id,
        },
        {
          type: ContactType.FACEBOOK,
          value: "fb.com/darantonia",
          guestHouseId: guestHouses[6].id,
        },
        {
          type: ContactType.INSTAGRAM,
          value: "@darantonia",
          guestHouseId: guestHouses[6].id,
        },
        {
          type: ContactType.PHONE,
          value: "+216 71 890 123",
          guestHouseId: guestHouses[7].id,
        },
        {
          type: ContactType.EMAIL,
          value: "contact@darsabri.com",
          guestHouseId: guestHouses[7].id,
        },
        {
          type: ContactType.WEBSITE,
          value: "www.darsabri.com",
          guestHouseId: guestHouses[7].id,
        },
        {
          type: ContactType.FACEBOOK,
          value: "fb.com/darsabri",
          guestHouseId: guestHouses[7].id,
        },
        {
          type: ContactType.INSTAGRAM,
          value: "@darsabri",
          guestHouseId: guestHouses[7].id,
        },
        {
          type: ContactType.PHONE,
          value: "+216 71 901 234",
          guestHouseId: guestHouses[8].id,
        },
        {
          type: ContactType.EMAIL,
          value: "info@darkenza.com",
          guestHouseId: guestHouses[8].id,
        },
        {
          type: ContactType.WEBSITE,
          value: "www.darkenza.com",
          guestHouseId: guestHouses[8].id,
        },
        {
          type: ContactType.FACEBOOK,
          value: "fb.com/darkenza",
          guestHouseId: guestHouses[8].id,
        },
        {
          type: ContactType.INSTAGRAM,
          value: "@darkenza",
          guestHouseId: guestHouses[8].id,
        },
        {
          type: ContactType.PHONE,
          value: "+216 71 012 345",
          guestHouseId: guestHouses[9].id,
        },
        {
          type: ContactType.EMAIL,
          value: "contact@darbibine.com",
          guestHouseId: guestHouses[9].id,
        },
        {
          type: ContactType.WEBSITE,
          value: "www.darbibine.com",
          guestHouseId: guestHouses[9].id,
        },
        {
          type: ContactType.FACEBOOK,
          value: "fb.com/darbibine",
          guestHouseId: guestHouses[9].id,
        },
        {
          type: ContactType.INSTAGRAM,
          value: "@darbibine",
          guestHouseId: guestHouses[9].id,
        },
      ];

      await db.contact.createMany({ data: contactsData });
      console.log("✅ 50 Contacts seeded successfully.");
    }
  } catch (error) {
    console.error("❌ Error in seeding:", error);
  }
};

export default seedData;

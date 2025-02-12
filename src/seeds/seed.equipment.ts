import { db } from "@/lib/prisma";

export const seedEquipments = async () => {
  try {
    // Check if data already exists
    const existingCount = await db.equipment.count();

    if (existingCount > 0) {
      console.log("⚠️ Equipment data already exists. Skipping insert.");
      return; // Exit function if data exists
    }

    // Equipment data to insert
    const equipmentData = [
      {
        name: "WiFi",
        icon: "https://www.svgrepo.com/show/303471/wifi-logo.svg",
        isActive: true,
      },
      {
        name: "TV",
        icon: "https://www.svgrepo.com/show/275663/monitor-tv.svg",
        isActive: true,
      },
      {
        name: "Minibar",
        icon: "https://www.svgrepo.com/show/249217/minibar.svg",
        isActive: true,
      },
      {
        name: "Air Conditioning",
        icon: "https://spaces-cdn.clipsafari.com/6ub90ct8evl13dz4ucjglejhv3l0",
        isActive: true,
      },
      {
        name: "Safe",
        icon: "https://spaces-cdn.clipsafari.com/cigpqkg1ac6eklmd09q692ien3v3",
        isActive: true,
      },
      {
        name: "Hair Dryer",
        icon: "https://spaces-cdn.clipsafari.com/vins7lgbjhozjh2vifchhwulna7j",
        isActive: true,
      },
      {
        name: "Telephone",
        icon: "https://spaces-cdn.clipsafari.com/q0bmvks60szteaao1r5vmtlt2onz",
        isActive: true,
      },
      {
        name: "Iron",
        icon: "https://spaces-cdn.clipsafari.com/mpw7ljxumynkbum4ceoddwp1404k",
        isActive: true,
      },
      {
        name: "Towels",
        icon: "https://www.svgrepo.com/show/43776/towels.svg",
        isActive: true,
      },
      {
        name: "Coffee Machine",
        icon: "https://spaces-cdn.clipsafari.com/6fkiyh3yrlz5dhv05es5k91uhhfq",
        isActive: true,
      },
      {
        name: "Room Heater",
        icon: "https://cdn-icons-png.flaticon.com/512/1744/1744277.png",
        isActive: true,
      },
      {
        name: "Shower",
        icon: "https://www.svgrepo.com/show/398296/shower.svg",
        isActive: true,
      },
      {
        name: "Bathtub",
        icon: "https://www.svgrepo.com/show/530556/tub.svg",
        isActive: true,
      },
    ];

    // Insert data
    await db.equipment.createMany({ data: equipmentData });

    console.log("✅ Database seeded with hotel equipment data.");
  } catch (error) {
    console.error("❌ Error in seeding:", error);
  }
};

export default seedEquipments;

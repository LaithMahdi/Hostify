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
        description: "High-speed internet access",
        isActive: true,
      },
      {
        name: "TV",
        icon: "https://www.svgrepo.com/show/275663/monitor-tv.svg",
        description: "Flat-screen TV with cable channels",
        isActive: true,
      },
      {
        name: "Minibar",
        icon: "https://www.svgrepo.com/show/249217/minibar.svg",
        description: "Stocked with snacks and drinks",
        isActive: true,
      },
      {
        name: "Air Conditioning",
        icon: "https://spaces-cdn.clipsafari.com/6ub90ct8evl13dz4ucjglejhv3l0",
        description: "Individual climate control",
        isActive: true,
      },
      {
        name: "Safe",
        icon: "https://spaces-cdn.clipsafari.com/cigpqkg1ac6eklmd09q692ien3v3",
        description: "Laptop-compatible safe",
        isActive: true,
      },
      {
        name: "Hair Dryer",
        icon: "https://spaces-cdn.clipsafari.com/vins7lgbjhozjh2vifchhwulna7j",
        description: "Professional hair dryer",
        isActive: true,
      },
      {
        name: "Telephone",
        icon: "https://spaces-cdn.clipsafari.com/q0bmvks60szteaao1r5vmtlt2onz",
        description: "Direct dial telephone",
        isActive: true,
      },
      {
        name: "Iron",
        icon: "https://spaces-cdn.clipsafari.com/mpw7ljxumynkbum4ceoddwp1404k",
        description: "Iron and ironing board",
        isActive: true,
      },
      {
        name: "Towels",
        icon: "https://www.svgrepo.com/show/43776/towels.svg",
        description: "Fresh towels provided daily",
        isActive: true,
      },
      {
        name: "Coffee Machine",
        icon: "https://spaces-cdn.clipsafari.com/6fkiyh3yrlz5dhv05es5k91uhhfq",
        description: "Coffee and tea maker",
        isActive: true,
      },
      {
        name: "Room Heater",
        icon: "https://cdn-icons-png.flaticon.com/512/1744/1744277.png",
        description: "Room heating system",
        isActive: true,
      },
      {
        name: "Shower",
        icon: "https://www.svgrepo.com/show/398296/shower.svg",
        description: "Rainfall showerhead",
        isActive: true,
      },
      {
        name: "Bathtub",
        icon: "https://www.svgrepo.com/show/530556/tub.svg",
        description: "Deep soaking bathtub",
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

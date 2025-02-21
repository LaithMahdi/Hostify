import { db } from "@/lib/prisma";
import { ContactType, RoomStatus, RoomType } from "@prisma/client";

export const seedData = async () => {
  try {
    // Check if Guest Houses already exist
    const guestHouseCount = await db.guestHouse.count();
    if (guestHouseCount > 0) {
      console.log("⚠️ Guest House data already exists. Skipping insert.");
    } else {
      // Real Guest House Data
      const guestHousesData = [
        {
          name: "Ocean View Lodge",
          address: "123 Seaside Ave, Miami, FL",
          region: "Florida",
          description: "A relaxing beachside retreat with ocean views.",
          rating: 4.8,
          hasParking: true,
          isPetFriendly: true,
        },
        {
          name: "Mountain Escape Inn",
          address: "987 Summit Rd, Denver, CO",
          region: "Colorado",
          description: "A cozy stay in the heart of the Rockies.",
          rating: 4.5,
          hasParking: true,
          isPetFriendly: false,
        },
        {
          name: "Urban Retreat",
          address: "456 Downtown St, New York, NY",
          region: "New York",
          description: "Luxury rooms in the center of the city.",
          rating: 4.7,
          hasParking: false,
          isPetFriendly: true,
        },
        {
          name: "Sunny Hills Lodge",
          address: "852 Rolling Hills, Austin, TX",
          region: "Texas",
          description: "A scenic getaway in the Texas countryside.",
          rating: 4.6,
          hasParking: true,
          isPetFriendly: true,
        },
        {
          name: "Lakeview Cabins",
          address: "741 Maple Lake Rd, Minneapolis, MN",
          region: "Minnesota",
          description: "Beautiful lakefront cabins with great fishing spots.",
          rating: 4.3,
          hasParking: true,
          isPetFriendly: false,
        },
        {
          name: "Desert Oasis Resort",
          address: "369 Sand Dune Dr, Phoenix, AZ",
          region: "Arizona",
          description: "A luxurious desert retreat with modern amenities.",
          rating: 4.9,
          hasParking: true,
          isPetFriendly: true,
        },
        {
          name: "Riverside Haven",
          address: "258 Riverwalk Blvd, Nashville, TN",
          region: "Tennessee",
          description: "A peaceful riverside lodge with stunning views.",
          rating: 4.4,
          hasParking: true,
          isPetFriendly: false,
        },
        {
          name: "Cozy Woodland Inn",
          address: "134 Forest Ln, Portland, OR",
          region: "Oregon",
          description: "An eco-friendly stay in the middle of nature.",
          rating: 4.6,
          hasParking: true,
          isPetFriendly: true,
        },
        {
          name: "Seaside Breeze Resort",
          address: "777 Ocean Dr, San Diego, CA",
          region: "California",
          description: "A relaxing stay with direct beach access.",
          rating: 4.9,
          hasParking: true,
          isPetFriendly: false,
        },
        {
          name: "Snowy Peaks Lodge",
          address: "159 Alpine Rd, Aspen, CO",
          region: "Colorado",
          description:
            "A winter retreat for ski lovers and mountain explorers.",
          rating: 4.7,
          hasParking: true,
          isPetFriendly: true,
        },
      ];

      await db.guestHouse.createMany({ data: guestHousesData });
      console.log("✅ 10 Guest Houses seeded successfully.");
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
        },
      ];

      await db.room.createMany({ data: roomsData });
      console.log("✅ 10 Rooms seeded successfully.");
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
          value: "+1 305-555-1234",
          guestHouseId: guestHouses[0].id,
        },
        {
          type: ContactType.EMAIL,
          value: "info@mountainesape.com",
          guestHouseId: guestHouses[1].id,
        },
        {
          type: ContactType.WEBSITE,
          value: "www.urbanretreatny.com",
          guestHouseId: guestHouses[2].id,
        },
        {
          type: ContactType.FACEBOOK,
          value: "fb.com/sunnyhillslodge",
          guestHouseId: guestHouses[3].id,
        },
        {
          type: ContactType.PHONE,
          value: "+1 612-555-9876",
          guestHouseId: guestHouses[4].id,
        },
        {
          type: ContactType.EMAIL,
          value: "contact@desertoasis.com",
          guestHouseId: guestHouses[5].id,
        },
        {
          type: ContactType.WEBSITE,
          value: "www.riversidehaven.com",
          guestHouseId: guestHouses[6].id,
        },
        {
          type: ContactType.INSTAGRAM,
          value: "@cozywoodlandinn",
          guestHouseId: guestHouses[7].id,
        },
        {
          type: ContactType.PHONE,
          value: "+1 858-555-4321",
          guestHouseId: guestHouses[8].id,
        },
        {
          type: ContactType.EMAIL,
          value: "info@snowypeakslodge.com",
          guestHouseId: guestHouses[9].id,
        },
      ];

      await db.contact.createMany({ data: contactsData });
      console.log("✅ 10 Contacts seeded successfully.");
    }
  } catch (error) {
    console.error("❌ Error in seeding:", error);
  }
};

export default seedData;

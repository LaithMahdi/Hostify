# Hostify Project

Welcome to **Hostify**! This web application is built using modern technologies to streamline property and guest house management.

---

## 🚀 Prerequisites

Before setting up the project, ensure you have the following installed:

- [Bun](https://bun.sh/) (v1.0 or higher)
- [Prisma](https://www.prisma.io/) (installed globally via `bun add -g prisma`)
- [Git](https://git-scm.com/) (for version control)
- [PostgreSQL](https://www.postgresql.org/) (database)
- [Docker](https://www.docker.com/) _(optional, for containerized setup)_
- [Postman](https://www.postman.com/) _(optional, for API testing)_

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/LaithMahdi/Hostify.git
cd Hostify
```

### 2️⃣ Install Dependencies

```bash
bun install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file in the root directory and configure it using `.env.example` as a template:

```env
DATABASE_URL="your-database-connection-string"
```

Replace placeholders with actual values.

### 4️⃣ Set Up the Database

```bash
bun run generate  # Generate Prisma client
bun run db        # Apply schema to the database
```

### 5️⃣ Start the Development Server

```bash
bun run dev
```

This runs the server in watch mode. ✅ When the API starts for the **first time**, it will **automatically seed initial data** into the database.

---

## 🌱 Initial Seeding (Runs Automatically on First Start)

When the API runs for the first time, it will seed the following default data:

- `seedUsers()`  
  ➤ Creates 3 users:

  - **Admin**
  - **Owner**
  - **Guest**

- `seedEquipments()`  
  ➤ Adds predefined equipment types for guest houses.

- `seedData()`  
  ➤ Seeds a sample **guest house**, **room**, and **contact info**.

You do **not need** to run any manual script — this process is handled automatically inside the `init()` function of the server setup:

```ts
const init = async () => {
  await seedUsers();
  await seedEquipments();
  await seedData();
  console.log("✅ Seeding completed.");
};
```

---

## 🐳 Docker Setup (Optional)

You can run Hostify in a fully containerized environment using Docker and Docker Compose.

### 🔹 Build and Start Services

```bash
docker-compose up -d
```

This starts:

- Hostify app server (port `3000`)
- PostgreSQL DB (port `5432`)
- Prisma Studio (port `8881`)

### 🔹 Access Services

| Service       | URL                             |
| ------------- | ------------------------------- |
| Hostify App   | http://localhost:3000           |
| Prisma Studio | http://localhost:8881           |
| PostgreSQL DB | Host: `localhost`, Port: `5432` |

### 🔹 Stop Containers

```bash
docker-compose down
```

---

## 📌 API Documentation

👉 [http://localhost:3005/api-docs](http://localhost:3005/api-docs)

### 📍 API Endpoints Overview

➡️ Visit the OpenAPI docs for a complete list, or explore common routes like:

## 🔐 Auth Endpoints

- `POST    /api/v1/auth/register` - Register a new user
- `POST    /api/v1/auth/login` - Log in a user
- `GET     /api/v1/auth/me` - Get authenticated user info

## 🧰 Equipment Endpoints

- `POST    /api/v1/equipment/create` - Create new equipment
- `GET     /api/v1/equipment/all` - Get all equipment (paginated)
- `GET     /api/v1/equipment/:id` - Get equipment by ID
- `PUT     /api/v1/equipment/update/:id` - Update equipment by ID
- `DELETE  /api/v1/equipment/delete/:id` - Delete equipment by ID
- `PATCH   /api/v1/equipment/patch/:id` - Partially update equipment

## 🏡 Guest House Endpoints

- `POST    /api/v1/guest-house/create` - Create a new guest house
- `GET     /api/v1/guest-house/all` - Get all guest houses (paginated)
- `GET     /api/v1/guest-house/:id` - Get guest house by ID
- `PUT     /api/v1/guest-house/update/:id` - Update guest house by ID
- `DELETE  /api/v1/guest-house/delete/:id` - Delete guest house by ID
- `PATCH   /api/v1/guest-house/patch/:id` - Partially update guest house

## 🛏 Room Endpoints

- `POST    /api/v1/room/create` - Create a new room
- `GET     /api/v1/room/all` - Get all rooms (paginated)
- `GET     /api/v1/room/:id` - Get room by ID
- `GET     /api/v1/room/my/` - Get rooms associated with the user
- `PUT     /api/v1/room/update/:id` - Update room by ID
- `DELETE  /api/v1/room/delete/:id` - Delete room by ID
- `PATCH   /api/v1/room/patch/:id` - Partially update room

## 👤 Client Endpoints

- `POST    /api/v1/client/create` - Create a new client
- `GET     /api/v1/client/added-by` - Get clients added by current user
- `GET     /api/v1/client/all` - Get all clients
- `GET     /api/v1/client/:id` - Get client by ID
- `PUT     /api/v1/client/update/:id` - Update client by ID
- `PATCH   /api/v1/client/patch/:id` - Partially update client by ID
- `DELETE  /api/v1/client/delete/:id` - Delete client by ID

## 📅 Reservation Endpoints

- `POST    /api/v1/reservation/create` - Create a new reservation
- `PUT     /api/v1/reservation/update/:id` - Update reservation by ID
- `PATCH   /api/v1/reservation/patch/:id` - Partially update reservation by ID
- `DELETE  /api/v1/reservation/delete/:id` - Delete reservation by ID
- `GET     /api/v1/reservation/all` - Get all reservations
- `GET     /api/v1/reservation/owner` - Get reservations associated with the owner
- `GET     /api/v1/reservation/client` - Get reservations associated with the client

---

## 🛠️ API Testing with Postman

### 🔹 Import the Collection

1. Open Postman.
2. Click **Import**, then select `Hostify.postman_collection.json`.

### 🔹 Setup Environment

1. Create a new environment (e.g., **Hostify Local**).
2. Add:
   - `base_url`: `http://localhost:3000`
   - `access_token`: _(left blank — fills in after login)_

---

## 🔧 Useful Scripts

| Command            | Description                                     |
| ------------------ | ----------------------------------------------- |
| `bun run dev`      | Start the development server                    |
| `bun run generate` | Generate the Prisma client                      |
| `bun run db`       | Push the Prisma schema to the database          |
| `bun run studio`   | Open Prisma Studio (DB management) at port 8881 |
| `bun run reset`    | ⚠️ Reset the database (deletes all data)        |

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature/bugfix branch
3. Commit clearly
4. Push & submit a pull request

---

## 📜 License

MIT License — see `LICENSE` for full details.

---

## ❓ Questions?

- Open an issue on GitHub
- Reach out directly to the maintainer

---

### 🚀 Happy Coding & Enjoy Hostify! 🎉

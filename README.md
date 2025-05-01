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

```bash
DATABASE_URL="your-database-connection-string"
```

Replace placeholders with actual values.

### 4️⃣ Set Up the Database

Run the following commands:

```bash
bun run generate  # Generate Prisma client
bun run db        # Apply schema to the database
```

### 5️⃣ Start the Development Server

```bash
bun run dev
```

This runs the server in watch mode, restarting automatically on code changes.

---

## 🐳 Docker Setup (Optional)

You can run Hostify in a fully containerized environment using Docker and Docker Compose.

### 🔹 Build and Start Services

```bash
docker-compose up -d
```

This starts:

- The Hostify app server (exposed on port `3000`)
- The PostgreSQL database (on port `5432`)
- Prisma Studio (on port `8881`)

> ⚠️ Make sure port `3000` is not already in use.

### 🔹 Access Running Services

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

API documentation is available at:  
👉 [http://localhost:3005/api-docs](http://localhost:3005/api-docs)

### 📍 API Endpoints Overview

| Method | Endpoint                  | Description                      |
| ------ | ------------------------- | -------------------------------- |
| POST   | `/auth/register`          | Register a new user              |
| POST   | `/auth/login`             | Log in a user                    |
| GET    | `/auth/me`                | Get authenticated user info      |
| POST   | `/equipment/create`       | Create new equipment             |
| GET    | `/equipment/all`          | Get all equipment (paginated)    |
| GET    | `/equipment/:id`          | Get equipment by ID              |
| PUT    | `/equipment/update/:id`   | Update equipment by ID           |
| DELETE | `/equipment/delete/:id`   | Delete equipment by ID           |
| PATCH  | `/equipment/patch/:id`    | Partially update equipment       |
| POST   | `/guest-house/create`     | Create a new guest house         |
| GET    | `/guest-house/all`        | Get all guest houses (paginated) |
| GET    | `/guest-house/:id`        | Get guest house by ID            |
| PUT    | `/guest-house/update/:id` | Update guest house by ID         |
| DELETE | `/guest-house/delete/:id` | Delete guest house by ID         |
| PATCH  | `/guest-house/patch/:id`  | Partially update guest house     |
| POST   | `/room/create`            | Create a new room                |
| GET    | `/room/all`               | Get all rooms (paginated)        |
| GET    | `/room/:id`               | Get room by ID                   |
| GET    | `/room/my/`               | Get rooms associated with user   |
| PUT    | `/room/update/:id`        | Update room by ID                |
| DELETE | `/room/delete/:id`        | Delete room by ID                |
| PATCH  | `/room/patch/:id`         | Partially update room by ID      |

---

## 🛠️ API Testing with Postman

### 🔹 Import the Postman Collection

1. Open Postman.
2. Click on **Import**.
3. Select the `Hostify.postman_collection.json` file from the root directory.

### 🔹 Configure Postman Environment Variables

1. Create a new environment (e.g., **Hostify Local**).
2. Add the following variables:
   - `base_url` → `http://localhost:3000`
   - `access_token` → _(Leave blank, it will populate after login.)_

### 🔹 Running Requests

1. Start with the authentication requests to log in and obtain a token.
2. Use the token for secured endpoints.

---

## 🔧 Useful Scripts

| Command            | Description                                     |
| ------------------ | ----------------------------------------------- |
| `bun run dev`      | Start the development server                    |
| `bun run generate` | Generate the Prisma client                      |
| `bun run db`       | Push the Prisma schema to the database          |
| `bun run studio`   | Open Prisma Studio (DB management) at port 8881 |
| `bun run reset`    | Reset the database (⚠️ Deletes all data!)       |

### 📌 Access Prisma Studio

```bash
bun run studio
```

Navigate to [http://localhost:8881](http://localhost:8881) in your browser.

### ⚠️ Reset the Database

```bash
bun run reset
```

🚨 **Warning**: This will erase all data and reapply the schema.

---

## 🤝 Contributing

We welcome contributions! Follow these steps:

1. **Fork** the repository.
2. **Create** a new branch for your feature or bugfix.
3. **Commit** your changes with clear messages.
4. **Push** to your forked repository.
5. **Submit** a pull request.

---

## 📜 License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---

## ❓ Questions or Issues?

If you have any questions or run into issues:

- Open an issue on **GitHub**
- Reach out to me directly

---

### 🚀 Happy Coding & Enjoy Hostify! 🎉

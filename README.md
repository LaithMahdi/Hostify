````
Got it! Since you're using **Bun** as your runtime and package manager, I'll update the `README.md` file to reflect that. Here's the updated version tailored for Bun:

---

# Hostify Project

Welcome to the **Hostify** project! This is a web application built with modern technologies. Follow the steps below to set up and run the project on your local machine.

---

## Prerequisites

Before you begin, ensure you have the following installed:

- [Bun](https://bun.sh/) (v1.0 or higher)
- [Prisma](https://www.prisma.io/) (installed globally via `bun add -g prisma`)
- [Git](https://git-scm.com/) (for version control)
- A database (e.g., PostgreSQL, MySQL, or SQLite)

---

## Setup Instructions

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/hostify.git
cd hostify
````

### 2. Install Dependencies

Install all the required dependencies using Bun:

```bash
bun install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory of the project and add the necessary environment variables. You can use the `.env.example` file as a template:

```bash
DATABASE_URL="your-database-connection-string"
```

Replace the placeholders with your actual database connection string and secret keys.

### 4. Set Up the Database

Run the following commands to set up and migrate your database:

```bash
bun run generate
bun run db
```

This will generate the Prisma client and push the schema to your database.

---

## Running the Project

### Start the Development Server

To start the development server, run:

```bash
bun run dev
```

This will start the server using `tsx watch` and automatically restart it whenever you make changes to the code.

---

## Useful Scripts

Here are some useful scripts you can run for development and database management:

- **`bun run dev`**: Start the development server.
- **`bun run generate`**: Generate the Prisma client.
- **`bun run db`**: Push the Prisma schema to the database.
- **`bun run studio`**: Open Prisma Studio on port `8881` to manage your database.
- **`bun run reset`**: Reset the database (use with caution).

---

## Accessing Prisma Studio

To interact with your database visually, run:

```bash
bun run studio
```

Then, open your browser and navigate to `http://localhost:8881`.

---

## Resetting the Database

If you need to reset the database, run:

```bash
bun run reset
```

**Warning**: This will delete all data in the database and reapply the schema.

---

## Contributing

If you'd like to contribute to the project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Questions or Issues?

If you have any questions or run into issues, feel free to open an issue on GitHub or reach out to me directly.

---

### Key Changes for Bun:

1. Replaced `npm` or `yarn` commands with `bun` commands.
2. Updated the installation and script execution steps to use Bun.
3. Ensured compatibility with Bun's runtime and package management.

This `README.md` is now optimized for Bun and provides clear instructions for your friend (or any contributor) to set up and run the project. Let me know if you need further adjustments! 🚀

```

```

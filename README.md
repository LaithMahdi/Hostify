# Hostify Project

Welcome to the **Hostify** project! This is a web application built with modern technologies. Follow the steps below to set up and run the project on your local machine.

---

## Prerequisites

Before you begin, ensure you have the following installed:

- [Bun](https://bun.sh/) (v1.0 or higher)
- [Prisma](https://www.prisma.io/) (installed globally via `bun add -g prisma`)
- [Git](https://git-scm.com/) (for version control)
- [PostgreSQL]() (database)
- [Postman](https://www.postman.com/) (optional, for API testing)

---

## Setup Instructions

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/LaithMahdi/Hostify.git
cd Hostify
```

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

## Testing the API with Postman

A Postman collection is provided in the root of the project to help you test the API endpoints. Here's how to use it:

1. **Install Postman**: If you don't have Postman installed, download and install it from [here](https://www.postman.com/downloads/).

2. **Import the Collection**:

   - Open Postman.
   - Click on the **Import** button.
   - Select the `Hostify.postman_collection.json` file located in the root of the project.

3. **Set Up Environment Variables in Postman**:

   - Create a new environment in Postman (e.g., `Hostify Local`).
   - Add the following variables:
     - `base_url`: Set this to `http://localhost:3000` (or your server's URL).
     - `access_token`: Leave this blank; it will be populated after you log in.

4. **Run the Requests**:
   - Use the imported collection to test the API endpoints.
   - Start with the **Auth** requests to log in and obtain an access token.

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

### Key Additions:

1. **Postman Collection Section**: Added a dedicated section explaining how to use the Postman collection for API testing.
2. **Steps for Importing and Using the Collection**: Provided clear instructions for importing the collection and setting up environment variables in Postman.
3. **Encouraged Testing**: Highlighted the importance of testing the API using the provided collection.

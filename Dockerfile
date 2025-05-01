# Use Node.js LTS as base image
FROM node:20-slim AS base

# Install required packages including unzip
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/* && \
    apt-get update --fix-missing && \
    apt-get install -y curl openssl unzip && \
    curl -fsSL https://bun.sh/install | bash

# Set working directory
WORKDIR /app

# Add Bun to PATH
ENV PATH="/root/.bun/bin:$PATH"

# Copy package files
COPY bun.lockb ./
COPY package.json ./

# Install dependencies using Bun
RUN bun install --frozen-lockfile

# Copy the rest of the code
COPY . .

# Generate Prisma client
RUN bun run generate

# Development stage
FROM base AS development
ENV NODE_ENV=development
CMD ["bun", "run", "dev"]

# Production stage
FROM base AS production
ENV NODE_ENV=production
CMD ["bun", "run", "start"]

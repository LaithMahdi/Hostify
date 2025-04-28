# Use Node.js LTS as base image
FROM node:20-slim AS base

# Install dependencies for Prisma and other packages
RUN apt-get update && apt-get install -y openssl

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy the rest of the code
COPY . .

# Generate Prisma client
RUN npm run generate

# Development stage
FROM base AS development
ENV NODE_ENV=development
CMD ["npm", "run", "dev"]

# Production stage
FROM base AS production
ENV NODE_ENV=production
# Build the application if needed (add your build step here)
# RUN npm run build
CMD ["tsx", "src/index.ts"]
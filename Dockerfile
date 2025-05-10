# FROM node:22.15.0-alpine AS builder
# WORKDIR /app
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/package.json ./
# COPY --from=builder /app/package-lock.json ./
# RUN npm ci --omit=dev
# ENV NODE_ENV=production
# EXPOSE 3000
# CMD ["npm", "start"]

# FROM node:22.15.0-alpine AS builder
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci
# COPY . .
# RUN npm run build

# Stage 1: Builder image
# FROM node:22.15.0-alpine AS builder
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci
# COPY . .
# RUN npm run build

# # Stage 2: Runner image
# FROM node:22.15.0-alpine AS runner
# WORKDIR /app
# # Copy only the necessary files from the builder stage
# COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/package-lock.json ./
# # Install only production dependencies
# RUN npm ci --omit=dev
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public
# # Set environment variable for the Node.js environment
# ENV NODE_ENV=production
# # Expose the port your application runs on (Next.js default is 3000)
# EXPOSE 3000
# # Define the command to start your application (production server)
# CMD ["npm", "start"]

# -------- Base Stage --------
FROM node:22.15.0-alpine AS base
WORKDIR /app
COPY package*.json ./

# -------- Development Stage --------
FROM base AS dev
RUN npm install
COPY . .
# Set development environment
ENV NODE_ENV=development
CMD ["npm", "run", "dev"]

# -------- Builder Stage --------
FROM base AS builder
RUN npm ci
COPY . .
RUN npm run build

# -------- Production Runner Stage --------
FROM node:22.15.0-alpine AS runner
WORKDIR /app

# Copy production dependencies and built app from builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]

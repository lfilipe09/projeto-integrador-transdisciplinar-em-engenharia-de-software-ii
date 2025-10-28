# Simple production Dockerfile
FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy source
COPY . .

ENV PORT=3000
EXPOSE 3000

CMD ["node", "src/server.js"]

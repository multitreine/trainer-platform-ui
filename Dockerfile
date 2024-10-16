
FROM node:20-alpine AS base

WORKDIR /app


COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

EXPOSE 3000

ENV NODE_ENV=production

CMD ["npm", "start"]

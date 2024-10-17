FROM node:20-alpine AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install ci
COPY . .

ARG COCKPIT_URL_ARG
ENV COCKPIT_URL=${COCKPIT_URL_ARG}

ARG COCKPIT_API_KEY_LP_ARG
ENV COCKPIT_API_KEY_LP=${COCKPIT_API_KEY_LP_ARG}

ENV NODE_ENV=production

RUN npm run build

FROM node:20-alpine AS deploy

COPY --from=build /usr/src/app/package*.json ./
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/.next ./.next

EXPOSE 3000

CMD ["npm", "start"]



FROM node:16.17.0-alpine3.15 AS generate
LABEL maintainer="ezTeam <ezteam@couperin.org>"

WORKDIR /homepage

COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
RUN npm run build

FROM nginx:1.23.1-alpine AS production
COPY --from=generate /homepage/dist /usr/share/nginx/html
FROM node:26.12.1-alpine3.24 AS generate
LABEL maintainer="ezTeam <ezteam@couperin.org>"

EXPOSE 80

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci 
COPY . .
RUN npm run build

FROM nginx:1.31.8-alpine3.24 AS production
COPY --from=generate /usr/src/app/dist /usr/share/nginx/html
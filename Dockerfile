FROM node:16.17.0-alpine3.15 AS generate
LABEL maintainer="ezTeam <ezteam@couperin.org>"

EXPOSE 80

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
RUN npm ci 
COPY . /usr/src/app
RUN npm run build

FROM nginx:1.23.1-alpine AS production
COPY --from=generate /usr/src/app/dist /usr/share/nginx/html
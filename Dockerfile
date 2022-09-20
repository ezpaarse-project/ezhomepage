FROM node:16.17.0-alpine3.15 AS generate
LABEL maintainer="ezTeam <ezteam@couperin.org>"

ENV NODE_ENV production

WORKDIR /homepage

COPY package*.json /homepage/
RUN npm ci --only=production
COPY . /homepage

FROM nginx:1.23.1-alpine
COPY --from=generate /homepage /usr/share/nginx/html
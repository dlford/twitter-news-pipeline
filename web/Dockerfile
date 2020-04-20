FROM node:12-alpine AS builder_gatsby
RUN apk add --no-cache --virtual .gyp python make g++
WORKDIR /app
ENV NODE_ENV=production
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder_gatsby --chown=nginx:nginx /app/public /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
RUN chown -R nginx:nginx /var/cache/nginx

ENV NODE_ENV=production
USER nginx
EXPOSE 3000

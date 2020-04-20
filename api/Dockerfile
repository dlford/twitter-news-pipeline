FROM node:12-alpine as builder

RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install --only=production && npm run build

FROM node:12-alpine

RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers autoconf automake make nasm python git tzdata && \
  npm install --quiet node-gyp -g

RUN ln -s /usr/share/zoneinfo/America/Phoenix /etc/localtime
RUN echo "America/Phoenix" > /etc/timezone

RUN addgroup -g 101 -S apollo
RUN adduser -D --home /home/apollo -u 101 -S apollo -G apollo

RUN mkdir -p /home/apollo/app/node_modules
RUN mkdir -p /home/apollo/app/dist
WORKDIR /home/apollo/app
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

ENV NODE_ENV=production

RUN mkdir -p /home/apollo/app/node_modules/.cache
RUN chown -R apollo. /home/apollo/app/node_modules/.cache
USER apollo
EXPOSE 3000
CMD [ "npm", "start" ]


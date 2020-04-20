FROM node:12-alpine as builder

RUN ln -s /usr/share/zoneinfo/America/Phoenix /etc/localtime
RUN echo "America/Phoenix" > /etc/timezone

RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install --only=production && npm run build

FROM node:12-alpine
ARG BRANCH=""
ARG COMMIT=""
LABEL git_commit=${COMMIT}
LABEL git_branch=${BRANCH}

RUN addgroup -g 101 -S parser
RUN adduser -D --home /home/parser -u 101 -S parser -G parser

RUN mkdir -p /home/parser/app/node_modules
RUN mkdir -p /home/parser/app/dist
WORKDIR /home/parser/app
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

ENV NODE_ENV=production

USER parser
EXPOSE 2525
CMD [ "npm", "start" ]

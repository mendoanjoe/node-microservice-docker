FROM node:12.13-alpine

WORKDIR /usr/src/service/user

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "src/server.js"]
FROM node:alpine

RUN mkdir -p /usr/src/app/api

WORKDIR /usr/src/app/api

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 8081
CMD [ "npm", "run", "dev" ]
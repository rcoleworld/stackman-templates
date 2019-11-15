FROM node:latest
RUN npm install -g nodemon 
RUN mkdir -p /usr/src/app/api

WORKDIR /usr/src/app/api

COPY package.json /usr/src/app/api

RUN npm install

COPY . .
EXPOSE 8081
CMD [ "npm", "run", "dev" ]
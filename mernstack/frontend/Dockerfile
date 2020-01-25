FROM node:alpine

RUN mkdir -p /usr/src/app/frontend

WORKDIR /usr/src/app/frontend

ENV PATH /usr/src/app/frontend/.bin:$PATH

COPY package.json /usr/src/app/frontend/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

CMD ["npm", "start"]

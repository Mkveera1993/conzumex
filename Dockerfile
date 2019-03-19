FROM node:8

RUN mkdir -p /app

ADD . /app

WORKDIR /app

RUN npm install

EXPOSE 3000

CMD npm start
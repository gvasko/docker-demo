# source: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
FROM nodejs/node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install && bower install

EXPOSE 80
CMD [ "npm", "start" ]

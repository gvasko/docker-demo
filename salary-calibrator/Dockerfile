# source: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install -g bower
RUN npm install
RUN bower install --allow-root

EXPOSE 80
CMD [ "npm", "start" ]

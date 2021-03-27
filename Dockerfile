FROM node:14.16.0-alpine3.10

# create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . ./

EXPOSE 3000
CMD [ "npm", "start"]
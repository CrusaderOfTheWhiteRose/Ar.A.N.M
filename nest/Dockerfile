#Base Image
FROM node:latest

#Create Folder For Conteiner
WORKDIR /app

#Create .bin
ENV PATH /app/node_modules/.bin:$PATH

#Install All The Dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @nestjs/cli

#Create The App
COPY . /app

#Start The App
CMD nest start
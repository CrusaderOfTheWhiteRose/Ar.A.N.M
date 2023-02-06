#Base Image
FROM node:latest

#Create Folder For Conteiner
WORKDIR /app

#Install All The Dependencies
COPY package.json /app
RUN npm install apollo-server-express
RUN npm i

#Copy The App Into "app" Folder
COPY . /app

#Start The App
CMD ["npm", "run", "start:prod"]
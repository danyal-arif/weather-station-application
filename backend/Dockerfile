FROM node:alpine

WORKDIR /weather-api
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
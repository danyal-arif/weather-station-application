FROM node:alpine

WORKDIR /weather-ui
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "run", "serve"]
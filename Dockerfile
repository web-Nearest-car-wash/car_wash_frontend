# build env
FROM node:19-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
ENV REACT_APP_API_KEY=$REACT_APP_API_KEY
RUN npm run build
CMD cp -r build result_build

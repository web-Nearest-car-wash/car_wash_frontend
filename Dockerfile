# build env
FROM node:19-alpine as build
ENV REACT_APP_API_KEY=$REACT_APP_API_KEY
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build
CMD cp -r build result_build

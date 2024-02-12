# build env
FROM node:19-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
ARG REACT_APP_API_KEY
ENV REACT_APP_API_KEY=$REACT_APP_API_KEY
ENV REACT_APP_BASE_URL=$REACT_APP_BASE_URL
RUN npm run build
CMD cp -r build result_build

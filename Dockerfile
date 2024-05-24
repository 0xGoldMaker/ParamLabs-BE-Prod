FROM node:lts-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json
RUN npm i --omit=dev --ignore-scripts
COPY . /usr/src/app

EXPOSE 3000

CMD [ "node", "."]

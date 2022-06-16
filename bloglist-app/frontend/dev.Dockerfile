FROM node:16
WORKDIR /usr/src/app
COPY . /usr/src/app/
# Since we are in development we use npm install
RUN npm install
CMD ["npm", "start"]
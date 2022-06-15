FROM node:16
WORKDIR /usr/src/app
COPY . /usr/src/app/
# We change npm ci to npm install since we are going to be in development mode
RUN npm install
# npm start is the command in development mode
CMD ["npm", "start"]
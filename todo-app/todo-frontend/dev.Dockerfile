FROM node:16
WORKDIR /usr/src/app
COPY . /usr/src/app/
# We change npm ci to npm install since we are going to be in development mode
RUN npm install
ENV REACT_APP_BACKEND_URL http://localhost:8080/api/
# npm start is the command in development mode
CMD ["npm", "start"]
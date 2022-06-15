FROM node:16
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
ENV DEBUG todo-express-backend:*
CMD ["npm", "run", "dev"]
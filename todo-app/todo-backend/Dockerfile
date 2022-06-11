FROM node@sha256:d6a8cd069ab740759394a9338dc4bc4b9b32b15209cccd0c7faa32d438b1076e

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci --only=production

USER node

CMD npm start
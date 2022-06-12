# --------------> The build image
FROM node:16 AS build-stage
ENV REACT_APP_BACKEND_URL http://localhost:3000
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm ci --only=production
RUN npm run build

# --------------> The production image
FROM nginx:1.20-alpine@sha256:016789c9a2d021b2dcb5e1c724c75ab0a57cc4e8cd7aab7bb28e69fec7c8c4fc
COPY --chown=nginx:nginx --from=build-stage /usr/src/app/build /usr/share/nginx/html
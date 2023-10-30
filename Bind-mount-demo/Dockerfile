FROM node

WORKDIR /developer/node-js/bind-mount-demo-project

COPY . .

RUN npm ci

ENV PORT 7010

CMD [ "npm", "start"]

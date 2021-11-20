FROM node:lts-alpine as build

WORKDIR /usr/web
COPY package.json /usr/web/
COPY yarn.lock /usr/web/
COPY tsconfig.json /usr/app/
RUN yarn
COPY . /usr/web/

EXPOSE 3000
CMD ["yarn", "start"]
FROM node:alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json /usr/app/
COPY yarn.lock /usr/app/
COPY tsconfig.json /usr/app/

COPY . /usr/app/

RUN yarn
RUN yarn build

CMD ["yarn", "start"]

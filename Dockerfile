FROM node:20.13.1
# mkdir app && cd app
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install --only=dev && npm run build

EXPOSE ${NODE_PORT}

ENV NODE_ENV=development

CMD ["npm", "start"]

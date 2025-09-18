FROM node:22.19
# mkdir app && cd app
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3001

ENV NODE_ENV=development

CMD ["npm", "run", "start:dev"]

# Etapa 1: Build
FROM node:18 AS build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY prisma ./prisma

RUN npx prisma generate

COPY . .

RUN npm run build

# Etapa 2: Run
FROM node:18-alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app .

EXPOSE 3000

CMD ["npm", "run", "dev"]
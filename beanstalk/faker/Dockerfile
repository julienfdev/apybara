FROM node AS build

WORKDIR /build
COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npx nest build faker

FROM node AS run

WORKDIR /app

COPY --from=build /build/dist/apps/faker .
COPY --from=build /build/node_modules ./node_modules

CMD ["node", "main.js"]

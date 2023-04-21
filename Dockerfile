FROM node:lts as builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:lts as runner
WORKDIR /app/web
ENV NODE_ENV production

COPY --from=builder /app ./

EXPOSE 3000
CMD ["npm", "start"]
FROM node:12.18.3-alpine
USER node
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 80
CMD ["node", "app.js"]
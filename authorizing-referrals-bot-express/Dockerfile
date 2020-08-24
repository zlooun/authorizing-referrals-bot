FROM node:12
RUN mkdir /www
RUN mkdir /www/authorizing-referrals-bot-express
WORKDIR /www/authorizing-referrals-bot-express
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

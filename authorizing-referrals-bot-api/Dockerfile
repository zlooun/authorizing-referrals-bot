FROM node:12
RUN mkdir /www
RUN mkdir /www/authorizing-referrals-bot-api
WORKDIR /www/authorizing-referrals-bot-api
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
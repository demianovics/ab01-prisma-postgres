FROM node:20-alpine as app
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY ./ ./
# Kopiere das Skript in den Container
COPY ./wait-for-mysql.sh ./wait-for-mysql.sh
# Mache das Skript ausführbar
RUN chmod +x ./wait-for-mysql.sh
CMD ["npm", "run", "debug"]
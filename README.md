# ab01-prisma-postgres
## Node.js + TypeScript + Express + Prisma (Mysql/Postgres)

### Prerequisites
- docker
- node.js
- mysql

You need to have you database up an running. And copy the .env.dist file to .env and adjust the DATABASE_URL value according to your database and its credentials. The database can be empty, and npx 

Start up a mysql instance and expose its 3306 port.
```bash
docker run --name mysql -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 -d mysql:8.2.0
```

```bash
npm install
npx prisma migrate dev
npm start
```

http://localhost:3000 bzw. http://localhost:3000/users

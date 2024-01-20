# ab01-prisma-postgres
## Node.js + TypeScript + Express + Prisma (Mysql/Postgres)

This setup combines the following:

- Node.js v20.10.0 (in Docker)
- TypeScript
- Express
- Prisma
- MySQL
- Debuggable
- development locally (with nodemon)
- development with docker (with nodemon)

There are two ways to setup up this project:

## Locally

### Prerequisites
- docker
- node.js v20.10.0
- mysql 8.2.0 (via Docker)

You need to have you database up an running. And copy the .env.dist file to .env and adjust the DATABASE_URL value according to your database and its credentials. `npx prisma migrate dev` will take care of creating not only the database but also the tables.

Start up a mysql instance and expose its 3306 port with docker.
```bash
docker run --name mysql -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 -d mysql:8.2.0
```

Change into the `/server` directory. And run the following:

```bash
npm install
npx prisma migrate dev
npm run debug
```

Keep in mind, that ```npm prisma generate``` will run post install, and generate type definitions based on the schema into `node_modules/@prisma/client``

Now visit http://localhost:3000/users to see the server in action.

## Docker

When running the `docker-compose.yaml` both the app and the mysql server are started as containers. You don't need Node.js locally.

```bash
docker-compose up
```

Now visit http://localhost:3000/users to see the server in action.
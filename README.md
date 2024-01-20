# ab01-prisma-postgres

This setup combines the following:

- Node.js v20.10.0
- TypeScript
- Express
- Prisma
- MySQL
- tRPC
- Vite & React

It consists of two projects. A tRPC-Server under /server and a frontend-GUI under /admin.


## Prerequisites
- Docker installed
- Mode.js v20.10.0 installed
- Mysql 8.2.0 running (via Docker)

You need to have you database up an running. Start up a mysql instance and expose its 3306 port with Docker.

```bash
docker run --name mysql -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 -d mysql:8.2.0
```

## Run the Server

Change into the `/server` directory.

Copy the .env.dist file to .env and adjust the DATABASE_URL value according to your database and its credentials.

And run the following:

```bash
npm install
npx prisma generate
npx prisma migrate dev
npm run debug
```

Keep in mind, that ```npm prisma generate``` will also run post install, and generate type definitions based on the schema into `node_modules/@prisma/client`

Now visit http://localhost:3000/users and http://localhost:3000/trpc to see the server in action.

## Run the Frontend

Change into the `/admin` directory.

Copy the .env.dist file to .env without altering its contents.

And run the following:

```bash
npm install
npm run dev
```

Now visit http://localhost:5173/ to see the frontend in action, communication with the backend 

import { faker } from '@faker-js/faker';
import { prisma } from './prisma';

async function main() {
    const newUser = await prisma.user.create({
        data: {
            name: faker.person.firstName(),
            email: faker.internet.email(),
        },
    });
    console.log('Neuer Benutzer:', newUser);
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        console.log("disconnect");
        await prisma.$disconnect();
    });

import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hallo Welt!');
});

app.get('/users', async (req, res) => {
    console.log("GET /users");
    try {
        const users = await prisma.user.findMany({
            // where: {
            //     userConfigs: {
            //         some: {}
            //     }
            // },
            include: {
                userConfigs: true
            },
            take: 1
        });
        const user = users[0];
        const userConfig = users[0].userConfigs[0]
        console.log(typeof user);
        console.log(typeof userConfig);
        res.json(users);
      } catch (error: any) {
        console.error(error);
        res.status(500).json({ error: error.message });
      }
});

app.get('/user_configs', async (req, res) => {
    console.log("GET /users");
    try {
        const userConfigs = await prisma.userConfig.findMany({
            include: {
                user: true
            }
        });
        res.json(userConfigs);
      } catch (error: any) {
        console.error(error);
        res.status(500).json({ error: error.message });
      }
});


import { appRouter } from './router';
import { initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';

// created for each request
const createContext = ({
    req,
    res,
  }: trpcExpress.CreateExpressContextOptions) => ({}); // no context
  type Context = Awaited<ReturnType<typeof createContext>>;
  const t = initTRPC.context<Context>().create();
  
  app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    }),
  );

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});

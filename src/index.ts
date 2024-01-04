import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    // const newUser = await prisma.user.create({
    //     data: {
    //         name: 'Alice',
    //         email: 'alice2@example.com',
    //     },
    // });
    // console.log('Neuer Benutzer:', newUser);

    const users = await prisma.user.findMany();
    console.log(users);
}



import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hallo Welt!');
});

app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany();
    res.send(users);
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});

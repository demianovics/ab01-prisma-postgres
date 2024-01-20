import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { prisma } from './prisma';

export const t = initTRPC.create();

export const appRouter = t.router({
  getUser: t.procedure.input(z.string()).query((opts) => {
    opts.input; // string
    return { id: opts.input, name: 'Bilbo' };
  }),
  getUsers: t.procedure.query(async () => {
    const users = await prisma.user.findMany({
      include: {
        userConfigs: true
      }
    });
    return users;
  })
});

// export type definition of API
export type AppRouter = typeof appRouter;
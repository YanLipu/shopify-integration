import { App } from "./app";
import { PrismaClient } from '@prisma/client';

const PORT = process.env.PORT || 3000;

async function main() {
  const app = new App({ db: new PrismaClient() });
  app.boot();
  app.run(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
  });
}

main()
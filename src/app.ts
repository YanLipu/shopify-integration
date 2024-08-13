import 'express-async-errors';
import express, { Express as ExpressServer } from 'express';
import { PrismaClient } from '@prisma/client';
import { v1Routes } from './routes';

interface AppParams {
  db: PrismaClient;
}

export interface AppContext {
  db: PrismaClient;
}

export class App {
  public expressServer: ExpressServer;
  private db: PrismaClient;

  constructor({ db }: AppParams) {
    this.db = db || new PrismaClient();
    this.expressServer = express();
  }

  boot(): void {
    const appContext = {
      db: this.db
    };

    v1Routes(this, appContext);
  }

  run(port: number | string, callback?: () => void): void {
    this.expressServer.listen(port, callback);
  }
}

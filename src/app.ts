import 'express-async-errors'
import express, { Express as ExpressServer } from 'express';
import { v1Routes } from './routes';
import { PrismaClient } from '@prisma/client';

interface AppParams {
  db: PrismaClient
}

export interface AppContext {
  db: PrismaClient
}

export class App {
  public expressServer: ExpressServer
  private db: PrismaClient

  constructor({ db }: AppParams) {
    this.db = db || new PrismaClient();
    this.expressServer = express();
  }

  boot() {

    const appContext = {
      db: this.db
    }

    v1Routes(this, appContext);
  }

  run(port: number | string, callback?: () => void) {
    this.expressServer.listen(port, callback);
  }
}

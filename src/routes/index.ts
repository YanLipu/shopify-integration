import { App, AppContext } from '../app';
import { Router } from 'express';
import { createProductsRoutes } from './products';
import { errorHandler } from '../lib/express/errors';

const v1Routes = (app: App, context: AppContext): void => {
  const router = Router({ mergeParams: true });

  router.get('/healt-check', (req, res) => {
    res.send('Hello, World!');
  });

  router.use('/', createProductsRoutes(context));

  app.expressServer.use(router);
  app.expressServer.use(errorHandler());
};

export { v1Routes };

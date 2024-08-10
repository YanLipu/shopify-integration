import { Router } from "express";
import { App, AppContext } from '../app'
import {createProductsRoutes} from "./products";

export const v1Routes = (app: App, context: AppContext) =>{
  const router = Router({ mergeParams: true });

  router.get('/healt-check', (req, res) => {
    res.send('Hello, World!');
  });

  router.use('/', createProductsRoutes(context))

  app.expressServer.use(router);

  return router;
}
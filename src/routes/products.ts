import { Router } from "express";
import { ProductsController } from "../controller/ProductsController";
import { AppContext } from "../app";

export const createProductsRoutes = (context: AppContext) => {
  const products = new ProductsController(context);
  const productsRoutes = Router({ mergeParams: true });
  
  productsRoutes.get('/products', products.list)
  productsRoutes.post('/products/shopify', products.create)
  
  productsRoutes.get('/shopify/products', products.listShopify)
  productsRoutes.post('/shopify/products/sync', products.syncShopify)
  
  return productsRoutes;
}


// export default productsRoutes;
import { Router } from "express";
import { ProductsController } from "../controller/ProductsController";

const router = Router({ mergeParams: true });
const products = new ProductsController();

router.get('/products', products.list)
router.post('/products/shopify', products.create)

router.get('/shopify/products', products.listShopify)
router.post('/shopify/products/sync', products.syncShopify)

export default router;
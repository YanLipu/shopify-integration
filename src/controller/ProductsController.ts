import { Action, BaseController } from '.';
import { AppContext } from '../app';
import { PrismaClient } from '@prisma/client';
import { ProductService } from '../services/ProductService';
import { ShopifyService } from '../services/ShopifyService';
import { syncProductQueue } from '../infrastructure/queues/product.queue';

export class ProductsController extends BaseController {
  private db: PrismaClient;
  private productService: ProductService;
  private shopifyService: ShopifyService;

  constructor(context: AppContext) {
    super();
    this.db = context.db;
    this.productService = new ProductService(this.db);
    this.shopifyService = new ShopifyService();
  }
  /**
   * Should search for products in the database
   * @param req
   * @param res
   * @returns
   */
  list: Action = async (req, res) => {
    const products = await this.productService.listAll();
    return this.sendSuccess(res, products);
  };

  /**
   * Should create a new product in Shopify and then save it in the database
   * @param req
   * @param res
   * @returns
   */
  create: Action = async (req, res) => {
    return this.sendCreated(res);
  };

  /**
   * Should list all products from Shopify
   * @param req
   * @param res
   * @returns
   */
  listShopify: Action = async (req, res) => {
    const products = await this.shopifyService.getProducts();
    return this.sendSuccess(res, products);
  };

  /**
   * Should sync all products from Shopify with the database
   * @param req
   * @param res
   * @returns
   */
  syncShopify: Action = async (req, res) => {
    syncProductQueue.addSyncProductsJob('syncApiProductsWithDatabaseWorker');
    return this.sendSuccess(res, 'Job adicionado na fila');
  };
}

import { Action, BaseController } from ".";

export class ProductsController extends BaseController {
  /**
   * Should search for products in the database
   * @param req 
   * @param res 
   * @returns 
   */
  list: Action = async (req, res) => {
    return this.sendSuccess(res, ['controller ok']);
  }

  /**
   * Should create a new product in Shopify and then save it in the database
   * @param req 
   * @param res 
   * @returns 
   */
  create: Action = async (req, res) => {
    return this.sendCreated(res);
  }

  /**
   * Should list all products from Shopify
   * @param req 
   * @param res 
   * @returns 
   */
  listShopify: Action = async (req, res) => {
    return this.sendSuccess(res, []);
  }
  
  /**
   * Should sync all products from Shopify with the database
   * @param req 
   * @param res 
   * @returns 
   */
  syncShopify: Action = async (req, res) => {
    return this.sendSuccess(res);
  }
}


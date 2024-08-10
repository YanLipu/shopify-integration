import { HttpRequest } from "../infrastructure/http";
import { ShopifyRequestBuilder } from "../infrastructure/adapters/shopifyRequest";

export class ShopifyService {
  private storeName: string
  private accessToken: string
  private apiVersion: string
  private shopifyRequestBuilder: ShopifyRequestBuilder
  // private http: HttpRequest

  constructor() {
    this.storeName = process.env.STORE_NAME || ''
    this.accessToken = process.env.SHOPIFY_API_ACCESS_TOKEN || ''
    this.apiVersion = process.env.SHOPIFY_API_VERSION || ''
    this.shopifyRequestBuilder = new ShopifyRequestBuilder()
  }
  
  async getProducts() {
    const request = this.shopifyRequestBuilder
      .setBaseUrl(`https://${this.storeName}.myshopify.com/admin/api/${this.apiVersion}/products.json`)
      .setHeaders(this.accessToken)
      .build();
    
    const http = new HttpRequest(request.baseUrl, request.headers, request.body);
    
    const response = await http.request('GET');

    return response;
  }

  async syncProducts() {}

  async createProduct() {}
}
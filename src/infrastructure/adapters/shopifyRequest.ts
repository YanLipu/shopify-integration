import { Headers } from './types';

export class ShopifyRequestBuilder {
  public baseUrl: string;
  public apiVersion: string;
  public headers: Headers;
  public body: Record<string, any>;

  constructor() {
    this.baseUrl = '';
    this.headers = {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': ''
    };
    this.apiVersion = '';
    this.body = {};
  }

  public setBaseUrl(baseUrl: string): ShopifyRequestBuilder {
    this.baseUrl = baseUrl;
    return this;
  }

  public setHeaders(accessToken: string): ShopifyRequestBuilder {
    this.headers['X-Shopify-Access-Token'] = accessToken;
    return this;
  }

  public setBody(body: Record<string, any>): ShopifyRequestBuilder {
    this.body = body;
    return this;
  }

  public addBodyField(key: string, value: any): ShopifyRequestBuilder {
    this.body[key] = value;
    return this;
  }

  public build(): ShopifyRequestBuilder {
    return this;
  }
}

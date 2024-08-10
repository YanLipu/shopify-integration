import  axios, { Axios, AxiosRequestConfig, AxiosResponse } from "axios";
import { Method } from "./types";

export class HttpRequest {
  private url: string;
  private headers: Record<string, string>;
  private body: Record<string, any>;
  
  constructor(url: string, headers: Record<string, string>, body: Record<string, any>) {
    this.url = url;
    this.headers = headers;
    this.body = body;
  }
  
  public async request<T>(method: Method): Promise<AxiosResponse<T>> {
    try {
      const config: AxiosRequestConfig = {
        url: this.url,
        headers: { ...this.headers },
        params: this.body,
        method
      }

      const response = await axios(config);

      return response.data  
    } catch (error) {
      throw error
    }
  }
}
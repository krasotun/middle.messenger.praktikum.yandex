import { URLS } from "../core/constants";
import { HTTPClient } from "../core/http-client";

export abstract class BaseAPI {
  private _httpClient: HTTPClient;
  private _baseUrl: string;
  private _headers: Record<string, string>;

  constructor({ path }: Record<string, string>) {
    this._httpClient = new HTTPClient();
    this._baseUrl = `${URLS.BASE}${path}`;
    this._headers = { "Content-Type": "application/json" };
  }
  post(url: string, data: {}) {
    return this._httpClient.post(`${this._baseUrl}/${url}`, {
      headers: this._headers,
      data,
    });
  }
  get(url: string) {
    return this._httpClient.get(`${this._baseUrl}/${url}`, {
      headers: this._headers,
    });
  }
  put(url: string, data: {}, headers?: {}) {
    if (data instanceof FormData) {
      this._headers = { "content-type": "multipart/form-data" };
    }
    return this._httpClient.put(`${this._baseUrl}/${url}`, {
      headers: headers ? headers : this._headers,
      data,
    });
  }
  delete(url: string, data: {}) {
    return this._httpClient.delete(`${this._baseUrl}/${url}`, {
      headers: this._headers,
      data,
    });
  }
}

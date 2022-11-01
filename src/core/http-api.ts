enum METHODS {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE",
}

export type reqOptions = {
  headers?: Record<string, string>;
  method?: string;
  timeout?: number;
  data?: any;
};

export class HTTPApi {
  get(url: string, options = {}) {
    return this._request(url, { ...options, method: METHODS.GET });
  }
  put(url: string, options = {}) {
    return this._request(url, { ...options, method: METHODS.GET });
  }
  post(url: string, options = {}) {
    return this._request(url, { ...options, method: METHODS.POST });
  }
  delete(url: string, options = {}) {
    return this._request(url, { ...options, method: METHODS.POST });
  }
  private _queryStringify(data: {}) {
    return Object.entries(data).reduce((acc, entry, index) => {
      const amp = index ? "&" : "";
      acc = `${acc}${amp}${entry[0]}=${entry[1]}`;
      return acc;
    }, "?");
  }
  private _request(url: string, options: reqOptions) {
    const { headers = {}, method, data } = options;
    return new Promise((resolve, reject) => {
      if (!method) {
        reject("No method");
        return;
      }
      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;
      xhr.open(
        method,
        isGet && !!data ? `${url}${this._queryStringify(data)}` : url
      );
      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });
      xhr.onload = function () {
        resolve(xhr);
      };
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = options.timeout || 5000;
      xhr.ontimeout = reject;
      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  }
}

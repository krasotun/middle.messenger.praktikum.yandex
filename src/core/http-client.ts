enum METHODS {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE",
}

export type ReqOptions = {
  headers?: Record<string, string>;
  method?: string;
  timeout?: number;
  data?: any;
  withCredentials?: Boolean;
};

export class HTTPClient {
  get(url: string, options = {}) {
    return this._request(url, { ...options, method: METHODS.GET });
  }
  put(url: string, options = {}) {
    return this._request(url, { ...options, method: METHODS.PUT });
  }
  post(url: string, options = {}) {
    return this._request(url, { ...options, method: METHODS.POST });
  }
  delete(url: string, options = {}) {
    return this._request(url, { ...options, method: METHODS.DELETE });
  }
  private _queryStringify(data: {}) {
    return Object.entries(data).reduce((acc, entry, index) => {
      const amp = index ? "&" : "";
      acc = `${acc}${amp}${entry[0]}=${entry[1]}`;
      return acc;
    }, "?");
  }
  private _getRequestResult(request: XMLHttpRequest) {
    const res = {
      ok: request.status >= 200 && request.status < 300,
      status: request.status,
      statusText: request.statusText,
      headers: request.getAllResponseHeaders(),
      data: request.responseText,
      json: () => JSON.parse(request.responseText),
    };
    return res;
  }
  private _getErrorResult(request: XMLHttpRequest) {
    const res = {
      ok: false,
      status: request.status,
      statusText: request.statusText,
      headers: request.getAllResponseHeaders(),
      data: request.statusText,
      json: () => JSON.parse(request.statusText),
    };
    return res;
  }

  private _request(url: string, options: ReqOptions) {
    const { headers = {}, method, data, withCredentials = true } = options;
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
      if (withCredentials) {
        xhr.withCredentials = true;
      }
      // Object.keys(headers).forEach((key) => {
      //   xhr.setRequestHeader(key, headers[key]);
      // });
      xhr.setRequestHeader("accept", "application/json");
      xhr.onload = () => {
        resolve(this._getRequestResult(xhr));
      };
      xhr.onabort = reject;
      xhr.onerror = () => {
        reject(this._getErrorResult(xhr));
      };
      xhr.timeout = options.timeout || 5000;
      xhr.ontimeout = reject;
      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  }
}

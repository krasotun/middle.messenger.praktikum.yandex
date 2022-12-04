import { HTTPClient } from "./http-client";

describe("#HTTPClient", () => {
  const httpClient = new HTTPClient();
  it("should send get request", (done) => {
    httpClient.get("https://jsonplaceholder.typicode.com/").then(() => {});
    done();
  });
});

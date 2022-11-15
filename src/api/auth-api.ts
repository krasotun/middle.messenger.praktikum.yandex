import { ISignIn } from "../interfaces/sign-in";
import { ISignUp } from "../interfaces/sign-up";
import { BaseAPI } from "./base-api";

class AuthAPI extends BaseAPI {
  constructor() {
    super({ path: "/auth" });
  }
  signup({ ...data }: ISignUp) {
    return this.post("signup", { ...data });
  }
  signin({ ...data }: ISignIn) {
    return this.post("signin", { ...data });
  }
  logout() {
    return this.post("logout", {});
  }
  getUserInfo() {
    return this.get("user");
  }
}

export default new AuthAPI();

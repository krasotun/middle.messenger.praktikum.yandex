import { IUserInfo } from "../interfaces/user-info";
import { IUserPassword } from "../interfaces/user-password";
import { BaseAPI } from "./base-api";

class UserApi extends BaseAPI {
  constructor() {
    super({ path: "/user" });
  }
  changeUserInfo({ ...data }: IUserInfo) {
    return this.put("profile", { ...data });
  }
  changeUserAvatar(file) {
    return this.put("profile/avatar", file);
  }
  changeUserPassword({ ...data }: IUserPassword) {
    return this.put("password", { ...data });
  }
}
export default new UserApi();

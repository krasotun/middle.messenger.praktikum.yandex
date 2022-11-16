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
  changeUserAvatar(avatar: FormData) {
    return this.put("profile/avatar", avatar);
  }
  changeUserPassword({ ...data }: IUserPassword) {
    return this.put("profile", { ...data });
  }
}
export default new UserApi();

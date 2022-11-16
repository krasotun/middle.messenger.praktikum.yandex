import authApi from "../api/auth-api";
import userApi from "../api/user-api";
import { IUserInfo } from "../interfaces/user-info";
import { IUserPassword } from "../interfaces/user-password";

class UserController {
  changeUserInfo({ ...data }: IUserInfo) {
    userApi
      .changeUserInfo({ ...data })
      .then(() => {
        authApi.getUserInfo();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  changeUserAvatar(avatar: FormData) {
    userApi
      .changeUserAvatar(avatar)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  changeUserPassword({ ...data }: IUserPassword) {
    console.log("Change user password");
    userApi
      .changeUserPassword({ ...data })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
export default new UserController();

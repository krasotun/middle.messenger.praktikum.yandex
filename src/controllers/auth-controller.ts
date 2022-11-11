import authApi from "../api/auth-api";
import { PATHS } from "../core/constants";
import router from "../core/router";
import { ISignIn } from "../interfaces/sign-in";
import { ISignUp } from "../interfaces/sign-up";

class AuthController {
  signup({ ...data }: ISignUp) {
    authApi
      .signup({ ...data })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  signin({ ...data }: ISignIn) {
    authApi
      .signin({ ...data })
      .then(() => {
        router.go(PATHS.CHATPAGE);
      })
      .catch((error) => {
        console.log("Ошибка");
        console.log(error);
      });
  }
}
export default new AuthController();

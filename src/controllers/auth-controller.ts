import authApi from "../api/auth-api";
import { PATHS } from "../core/constants";
import router from "../core/router";
import { ISigninIn } from "../interfaces/sign-in";
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
  signin({ ...data }: ISigninIn) {
    authApi
      .signin({ ...data })
      .then((res) => {
        console.log(res);
        router.go(PATHS.CHATPAGE);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
export default new AuthController();

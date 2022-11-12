import authApi from "../api/auth-api";
import { PATHS } from "../core/constants";
import { errorsHandler } from "../core/errors-handler";
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
      .then((res) => {
        if (res.ok) {
          router.go(PATHS.CHATPAGE);
        } else {
          errorsHandler(".sign-form__auth-error", res.json().reason);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
export default new AuthController();

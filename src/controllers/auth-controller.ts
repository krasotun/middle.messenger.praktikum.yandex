import authApi from "../api/auth-api";
import { PATHS } from "../core/constants";
import { errorsHandler } from "../core/errors-handler";
import router from "../core/router";
import store from "../core/store";
import { ISignIn } from "../interfaces/sign-in";
import { ISignUp } from "../interfaces/sign-up";

class AuthController {
  signup({ ...data }: ISignUp) {
    authApi
      .signup({ ...data })
      .then((res) => {
        if (res.ok) {
          router.go(PATHS.MAINPAGE);
        } else {
          errorsHandler(".sign-form__auth-error", res.json().reason);
        }
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
  getUserInfo() {
    authApi
      .getUserInfo()
      .then((res) => {
        store.setState({ userInfo: res.json() });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
export default new AuthController();

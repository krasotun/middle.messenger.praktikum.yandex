import { Button } from "../button/button";
import { InputSign } from "../input-sign/input-sign.";
export interface ISignUpFormProps {
  formTitle: string;
  children: {
    submitButton: Button;
    email: InputSign;
    login: InputSign;
    firstName: InputSign;
    lastName: InputSign;
    phone: InputSign;
    password: InputSign;
    passwordAgain: InputSign;
  };
  linkHref: string;
  linkText: string;
}

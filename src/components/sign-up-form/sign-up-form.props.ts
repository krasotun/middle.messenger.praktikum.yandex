import { Button } from "../button/button";
import { InputSign } from "../input-sign/input-sign.";
export interface ISignUpFormProps {
  formTitle: string;
  children: {
    submitButton: Button;
    email: InputSign;
    login: InputSign;
    password: InputSign;
  };
  linkHref: string;
  linkText: string;
}

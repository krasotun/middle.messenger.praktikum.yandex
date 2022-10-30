import { Button } from "../button/button";
import { InputSign } from "../input-sign/input-sign.";
export interface ISignInFormProps {
  formTitle: string;
  children: {
    submitButton: Button;
    login: InputSign;
    password: InputSign;
  };
  linkHref: string;
  linkText: string;
}

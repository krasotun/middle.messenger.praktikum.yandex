import { Button } from "../button/button";
import { InputSign } from "../input-sign/input-sign.";
export interface ISignFormProps {
  formTitle: string;
  inputList?: {}[];
  children?: {
    submitButton: Button;
    email?: InputSign;
    login: InputSign;
    password: InputSign;
  };
  linkHref?: string;
  linkText?: string;
}

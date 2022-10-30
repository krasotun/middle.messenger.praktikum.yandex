import { Button } from "../button/button";
import { InputSign } from "../input-sign/input-sign.";
export interface ISignInFormProps {
  formTitle: string;
  onSubmit: (event: SubmitEvent) => void;
  children: {
    submitButton: Button;
    login: InputSign;
    password: InputSign;
  };
  linkHref: string;
  linkText: string;
}

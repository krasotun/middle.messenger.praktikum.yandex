import { Button } from "../button/button";
export interface ISignFormProps {
  formTitle: string;
  inputList: {}[];
  children?: {
    submitButton: Button;
  };
  linkHref?: string;
  linkText?: string;
}

import { Button } from "../button/button";

// mixin sign-form (formTitle, inputList, buttontext, linkHref,linkText)
export interface ISignFormProps {
  formTitle: string;
  inputList: {}[];
  children?: {
    submitButton: Button;
    unSubmitButton: Button;
  };
  linkHref?: string;
  linkText?: string;
}

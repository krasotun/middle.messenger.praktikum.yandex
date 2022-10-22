import { Button } from "../button/button";

// mixin sign-form (formTitle, inputList, buttontext, linkHref,linkText)
export interface ISignFormProps {
  formTitle: string;
  inputList: {}[];
  children?: {};
  linkHref?: string;
  linkText?: string;
}

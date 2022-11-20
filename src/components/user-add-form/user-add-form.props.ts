import { Button } from "../button/button";

export interface IUserAddFormProps {
  onSubmit: (event: SubmitEvent) => void;
  children: {
    submitButton: Button;
  };
}

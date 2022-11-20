import { Button } from "../button/button";

export interface IUserRemoveFormProps {
  onSubmit: (event: SubmitEvent) => void;
  children: {
    submitButton: Button;
  };
}

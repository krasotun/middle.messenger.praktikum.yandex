import { Button } from "../button/button";

export interface IChatAddFormProps {
  onSubmit: (event: SubmitEvent) => void;
  children: {
    submitButton: Button;
  };
}

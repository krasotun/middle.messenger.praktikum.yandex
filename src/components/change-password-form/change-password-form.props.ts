import { Button } from "../button/button";
import { InputProfile } from "../input-profile/input-profile";

export interface IChangePasswordFormProps {
  onSubmit: (event: SubmitEvent) => void;
  children: {
    submitButton: Button;
    password: InputProfile;
    newPassword: InputProfile;
    againPassword: InputProfile;
  };
}

import { Button } from "../button/button";
import { InputProfile } from "../input-profile/input-profile";
export interface IProfileFormProps {
  onSubmit: (event: SubmitEvent) => void;
  children: {
    submitButton: Button;
    email: InputProfile;
    login: InputProfile;
    firstName: InputProfile;
    lastName: InputProfile;
    displayName: InputProfile;
    phone: InputProfile;
  };
}

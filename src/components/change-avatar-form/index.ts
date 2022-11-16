import userController from "../../controllers/user-controller";
import { ChangeAvatarForm } from "./change-avatar-form";

const submitChangeAvatarForm = (event: SubmitEvent) => {
  event.preventDefault();
  console.log("Avatar form submitted");
  const formData = new FormData(event.target as HTMLFormElement);
  userController.changeUserAvatar(formData);
};
export const changeAvatarForm = new ChangeAvatarForm({
  onSubmit: submitChangeAvatarForm,
});

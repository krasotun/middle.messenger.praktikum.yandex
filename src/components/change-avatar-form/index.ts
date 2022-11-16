import { ChangeAvatarForm } from "./change-avatar-form";

const submitChangeAvatarForm = (event: SubmitEvent) => {
  event.preventDefault();
  console.log("Avatar form submitted");
};
export const changeAvatarForm = new ChangeAvatarForm({
  onSubmit: submitChangeAvatarForm,
});

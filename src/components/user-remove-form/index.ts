import { Button } from "../button/button";
import { UserRemoveForm } from "./user-remove-form";

const submitButton = new Button({
  buttonText: "Удалить из чата",
  className: "user-add-form__submit-button",
  buttonType: "submit",
});

const submitUserRemoveForm = (event: SubmitEvent) => {
  event.preventDefault();
  console.log(event.target);
};

export const userRemoveForm = new UserRemoveForm({
  children: {
    submitButton,
  },
  onSubmit: submitUserRemoveForm,
});

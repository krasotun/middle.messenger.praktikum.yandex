import { Button } from "../button/button";
import { UserAddForm } from "./user-add-form";

const submitButton = new Button({
  buttonText: "Добавить пользователя в чат",
  className: "user-add-form__submit-button",
  buttonType: "submit",
});

const submitUserAddForm = (event: SubmitEvent) => {
  event.preventDefault();
  console.log(event.target);
};

export const userAddForm = new UserAddForm({
  children: {
    submitButton,
  },
  onSubmit: submitUserAddForm,
});

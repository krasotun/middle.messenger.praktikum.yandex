import { Button } from "../button/button";
import { ChatAddForm } from "./chat-add-form";
const submitButton = new Button({
  buttonText: "Добавить чат",
  className: "chat-add-form__submit-button",
  buttonType: "submit",
});
const submitAddChatForm = (event: SubmitEvent) => {
  event.preventDefault();
  console.log(event);
};

export const chatAddForm = new ChatAddForm({
  children: {
    submitButton,
  },
  onSubmit: submitAddChatForm,
});

console.log(chatAddForm);

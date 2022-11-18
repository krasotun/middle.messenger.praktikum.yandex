import chatController from "../../controllers/chat-controller";
import { Button } from "../button/button";
import { ChatAddForm } from "./chat-add-form";
const submitButton = new Button({
  buttonText: "Добавить чат",
  className: "chat-add-form__submit-button",
  buttonType: "submit",
});
const submitAddChatForm = (event: SubmitEvent) => {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  const dataForSend = Object.fromEntries(formData.entries());
  chatController.createNewChat(dataForSend);
};

export const chatAddForm = new ChatAddForm({
  children: {
    submitButton,
  },
  onSubmit: submitAddChatForm,
});

console.log(chatAddForm);

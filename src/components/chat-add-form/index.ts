import chatController from "../../controllers/chat-controller";
import { Button } from "../button/button";
import { ChatAddForm } from "./chat-add-form";
const submitAddChatForm = (event: SubmitEvent) => {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  const dataForSend = Object.fromEntries(formData.entries());
  chatController.createNewChat(dataForSend);
  (event.target as HTMLFormElement).reset();
};
export const chatAddForm = new ChatAddForm({
  children: {
    submitButton: new Button({
      buttonText: "Создать чат",
      className: "chat-add-form__submit-button",
      buttonType: "submit",
    }),
  },
  onSubmit: submitAddChatForm,
});

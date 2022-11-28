import chatController from "../../controllers/chat-controller";
import store from "../../core/store";
import { Button } from "../button/button";
import { UserRemoveForm } from "./user-remove-form";
const submitUserRemoveForm = (event: SubmitEvent) => {
  event.preventDefault();
  const inputValue = event.target.querySelector(".user-add-form__input").value;
  const activeChat = store.getState()?.activeChat;
  chatController.removeUserFromChat({
    users: [inputValue],
    chatId: activeChat!,
  });
  (event.target as HTMLFormElement).reset();
};

export const userRemoveForm = new UserRemoveForm({
  children: {
    submitButton: new Button({
      buttonText: "Удалить из чата",
      className: "user-add-form__submit-button",
      buttonType: "submit",
    }),
  },
  onSubmit: submitUserRemoveForm,
});

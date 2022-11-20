import chatController from "../../controllers/chat-controller";
import store from "../../core/store";
import { Button } from "../button/button";
import { UserAddForm } from "./user-add-form";

const submitButton = new Button({
  buttonText: "Добавить в чат",
  className: "user-add-form__submit-button",
  buttonType: "submit",
});

const submitUserAddForm = (event: SubmitEvent) => {
  event.preventDefault();
  const inputValue = event.target.querySelector(".user-add-form__input").value;
  const activeChat = store.getState()?.activeChat;
  chatController.addUserToChat({
    users: [inputValue],
    chatId: activeChat!,
  });
  (event.target as HTMLFormElement).reset();
};

export const userAddForm = new UserAddForm({
  children: {
    submitButton,
  },
  onSubmit: submitUserAddForm,
});
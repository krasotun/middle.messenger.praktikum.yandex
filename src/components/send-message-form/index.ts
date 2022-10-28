import { Button } from "../button/button";
import { SendMessageForm } from "./send-message-form";

const attachButton = new Button({
  buttonText: "Прикрепить файл",
  className: "send-message-form__attach-button",
});
const submitButton = new Button({
  buttonText: "Отправить",
  className: "send-message-form__submit-button",
});
export const sendMessageForm = new SendMessageForm({
  children: {
    attachButton,
    submitButton,
  },
});

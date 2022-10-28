import { Button } from "../button/button";
import { InputSendMessage } from "../input-send-message/input-send-message";
import { SendMessageForm } from "./send-message-form";

const attachButton = new Button({
  buttonText: "Прикрепить файл",
  className: "send-message-form__attach-button",
});
const submitButton = new Button({
  buttonText: "Отправить",
  className: "send-message-form__submit-button",
});
const inputSendMessage = new InputSendMessage({
  onInput(event) {
    console.log(event.data);
  },
  onFocus() {
    console.log("Focus", event?.target);
  },
  onBlur() {
    console.log("Blur", event?.target);
  },
});
export const sendMessageForm = new SendMessageForm({
  children: {
    inputSendMessage,
    attachButton,
    submitButton,
  },
});

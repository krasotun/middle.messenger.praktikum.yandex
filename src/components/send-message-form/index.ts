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

const onBlur = (event: any) => {
  console.log("Blur");
};
const onInput = (event: InputEvent) => {
  console.log("input", event);
};

const onFocus = (event: FocusEvent) => {
  console.log("Focus", event);
};
const inputSendMessage = new InputSendMessage({
  onBlur,
  onInput,
  onFocus,
});
export const sendMessageForm = new SendMessageForm({
  children: {
    inputSendMessage,
    attachButton,
    submitButton,
  },
});

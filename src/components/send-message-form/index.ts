import messagesController from "../../controllers/messages-controller";
import {
  handleInputValidation,
  formValidator,
} from "../../core/form-validator";
import { Button } from "../button/button";
import { InputSendMessage } from "../input-send-message/input-send-message";
import { SendMessageForm } from "./send-message-form";

const submitSendMessageForm = (event: SubmitEvent) => {
  event.preventDefault();
  console.log("Send message form submitted");
  const formData = new FormData(event.target as HTMLFormElement);
  const dataForSend = Object.fromEntries(formData.entries());
  console.log(dataForSend.message);
  messagesController.sendMessage(dataForSend.message as string);
  (event.target as HTMLFormElement).reset();
};

export const sendMessageForm = new SendMessageForm({
  children: {
    inputSendMessage: new InputSendMessage({
      onBlur: handleInputValidation,
      onFocus: handleInputValidation,
    }),
    submitButton: new Button({
      buttonText: "Отправить",
      className: "send-message-form__submit-button",
      buttonType: "submit",
    }),
  },
  onSubmit: submitSendMessageForm,
});

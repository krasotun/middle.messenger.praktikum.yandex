import {
  handleInputValidation,
  formValidator,
} from "../../core/form-validator";
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
  buttonType: "submit",
});
const submitSendMessageForm = (event: SubmitEvent) => {
  event.preventDefault();
  console.log("Form submitted");
  const isFormValid = formValidator(event.target);
  console.log(
    isFormValid ? "Данные прошли валидацию" : "Данные не прошли валидацию"
  );
  const formData = new FormData(event.target);
  console.log("данные из формы", Object.fromEntries(formData.entries()));
};

const inputSendMessage = new InputSendMessage({
  onBlur: handleInputValidation,
  onFocus: handleInputValidation,
});
export const sendMessageForm = new SendMessageForm({
  children: {
    inputSendMessage,
    attachButton,
    submitButton,
  },
  onSubmit: submitSendMessageForm,
});

import { Button } from "../button/button";
import { InputSendMessage } from "../input-send-message/input-send-message";

export interface ISendMessageFormProps {
  onSubmit: (event: SubmitEvent) => void;
  children: {
    submitButton: Button;
    inputSendMessage: InputSendMessage;
  };
}

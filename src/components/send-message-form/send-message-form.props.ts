import { Button } from "../button/button";
import { InputSendMessage } from "../input-send-message/input-send-message";

export interface ISendMessageFormProps {
  children: {
    attachButton: Button;
    submitButton: Button;
    inputSendMessage: InputSendMessage;
    onSubmit: (event: any) => void;
  };
}

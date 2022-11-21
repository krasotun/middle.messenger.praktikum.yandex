import { IProfileDataProps } from "../components/profile-data/profile-data.props";
import { IChatProps } from "./chat-props";
import { IMessage } from "./message";

export interface IInitialState {
  userInfo: IProfileDataProps;
  chats: IChatProps[];
  activeChat: number;
  chatToken: string;
  messageList: IMessage[];
}

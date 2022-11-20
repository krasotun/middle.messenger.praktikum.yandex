import { IProfileDataProps } from "../components/profile-data/profile-data.props";
import { IChatProps } from "./chat-props";

export interface IInitialState {
  userInfo: IProfileDataProps;
  chats: IChatProps[];
  activeChat: number;
  chatToken: string;
}

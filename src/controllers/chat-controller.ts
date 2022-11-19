import chatApi from "../api/chat-api";
import store from "../core/store";
import { INewChat } from "../interfaces/new-chat";
import { IUserToChat } from "../interfaces/user-to-chat";

class ChatController {
  getChats() {
    chatApi
      .getChats()
      .then((res) => {
        console.log(res.json());
        store.setState({ chats: res.json() });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  createNewChat({ ...data }: INewChat) {
    chatApi
      .createNewChat({ ...data })
      .then((res) => {
        console.log(res);
        this.getChats();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  addUserToChat({ ...data }: IUserToChat) {
    chatApi
      .addUserToChat({ ...data })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  removeUserFromChat({ ...data }: IUserToChat) {
    chatApi
      .addUserToChat({ ...data })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
export default new ChatController();

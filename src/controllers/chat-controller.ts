import chatApi from "../api/chat-api";
import store from "../core/store";
import { IChatToken } from "../interfaces/chat-token";
import { IDeleteChat } from "../interfaces/delete-chat";
import { INewChat } from "../interfaces/new-chat";
import { IUserToChat } from "../interfaces/user-to-chat";

class ChatController {
  getChats() {
    chatApi
      .getChats()
      .then((res) => {
        store.setState({ chats: res.json() });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  deleteChat({ ...data }: IDeleteChat) {
    chatApi
      .deleteChat({ ...data })
      .then((res) => {
        console.log(res);
        this.getChats();
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
  addUserToChat(data: IUserToChat) {
    chatApi
      .addUserToChat(data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  removeUserFromChat(data: IUserToChat) {
    chatApi
      .removeUserFromChat(data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getChatToken(id: IChatToken) {
    chatApi
      .getChatToken(id)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
export default new ChatController();

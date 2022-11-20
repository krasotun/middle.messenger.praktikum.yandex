import { IChatToken } from "../interfaces/chat-token";
import { IDeleteChat } from "../interfaces/delete-chat";
import { INewChat } from "../interfaces/new-chat";
import { IUserToChat } from "../interfaces/user-to-chat";
import { BaseAPI } from "./base-api";

class ChatApi extends BaseAPI {
  constructor() {
    super({ path: "/chats" });
  }
  getChats() {
    return this.get("");
  }
  deleteChat({ ...data }: IDeleteChat) {
    return this.delete("", { ...data });
  }
  createNewChat({ ...data }: INewChat) {
    return this.post("", { ...data });
  }
  addUserToChat(data: IUserToChat) {
    return this.put("/users", data);
  }
  removeUserFromChat(data: IUserToChat) {
    return this.delete("/users", data);
  }
  getChatToken(id: IChatToken) {
    return this.post(`/token/${id}`);
  }
}
export default new ChatApi();

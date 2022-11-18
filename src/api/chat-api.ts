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
  createNewChat({ ...data }: INewChat) {
    return this.post("", { ...data });
  }
  addUserToChat(data: IUserToChat) {
    return this.put("/users", data);
  }
  removeUserFromChat(data: IUserToChat) {
    return this.delete("/users", data);
  }
}
export default new ChatApi();

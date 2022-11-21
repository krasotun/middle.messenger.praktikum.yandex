import { IInitialState } from "../interfaces/initial-state";
import { EventBus } from "./event-bus";
export enum StoreEvents {
  UPDATE = "update",
}
const initialState: IInitialState = {
  userInfo: {
    first_name: "Имя из стора",
    second_name: "Фамилия из стора",
    display_name: "Имя в чате из стора",
    login: "Логин из стора",
    avatar: "Avatar из стора",
    email: "Email из стора",
    phone: "Телефон из стора",
    id: 12346,
  },
  chats: [
    {
      id: 0,
      created_by: 123,
      title: "Title from store",
      avatar: "Avatar from store",
      unread_count: 0,
      last_message: {
        user: {
          first_name: "First_name from store",
          second_name: "Second_name from store",
          avatar: "Avatar from store",
          email: "Email from store",
          login: "Login from store",
          phone: "Phone from store",
        },
        time: "22:47",
        content: "Content from store",
      },
    },
  ],
  activeChat: 0,
  chatToken: "token",
  messageList: [
    {
      chat_id: 1,
      content: "Content form store",
      file: null,
      id: 111,
      is_read: true,
      time: "Time from store",
      type: "Type from store",
      user_id: "1111",
    },
  ],
};
class Store<T> extends EventBus {
  state: T | null;
  constructor(startState: T | null) {
    super();
    this.state = startState;
  }
  getState() {
    return this.state;
  }
  setState(newState: any) {
    this.state = { ...this.state, ...newState };
    this.emit(StoreEvents.UPDATE);
    console.log(this.state.messageList);
  }
}

export default new Store(initialState);

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
        time: "Time from store",
        content: "Content from store",
      },
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
  }
}

export default new Store(initialState);

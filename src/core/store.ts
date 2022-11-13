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

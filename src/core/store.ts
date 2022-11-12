import { IInitialState } from "../interfaces/initial-state";
import { EventBus } from "./event-bus";
export enum StoreEvents {
  UPDATE = "update",
}
const initialState: IInitialState = {
  isLoggedIn: false,
};
class Store<T> extends EventBus {
  state: T | null;
  constructor(startState: T | null) {
    super();
    this.state = startState;
    console.log("Store создан");
    console.log(this.state);
  }
  getState() {
    return this.state;
  }
  setState(newState: any, action?: string) {
    this.state = { ...this.state, ...newState };
    this.emit(action ? action : StoreEvents.UPDATE);
  }
}

export default new Store(initialState);

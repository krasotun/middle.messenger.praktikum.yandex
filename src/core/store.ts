import { IInitialState } from "../interfaces/initial-state";
import { EventBus } from "./event-bus";
enum StoreEvents {
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

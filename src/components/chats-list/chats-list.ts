import { Block } from "../../core/block";
import { IChatsListProps } from "./chats-list.props";
import template from "./chats-list.template";
import store, { StoreEvents } from "../../core/store";
import chatController from "../../controllers/chat-controller";
export class ChatsList extends Block {
  constructor(props: IChatsListProps) {
    super(props);
    store.on(StoreEvents.UPDATE, () => {
      const propsFromStore = store.getState()?.chats;
      this.setProps({
        chats: propsFromStore,
      });
    });
    chatController.getChats();
  }
  render(): string {
    const { chats } = this.props;
    return this.compile(template, {
      chats,
    });
  }
  componentRendered(): void {
    const element = this.element;
    element.querySelectorAll(".single-chat__container").forEach((item) => {
      item.addEventListener("click", () => {
        store.setState({ activeChat: item.id });
      });
    });
    element
      .querySelectorAll(".single-chat__delete-button")
      .forEach((element) => {
        element.addEventListener("click", (event) => {
          event.stopPropagation();
          chatController.deleteChat({ chatId: element.id });
        });
      });
  }
}

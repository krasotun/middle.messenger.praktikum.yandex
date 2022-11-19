import { Block } from "../../core/block";
import { render as compileTemplate } from "pug";
import { IChatsListProps } from "./chats-list.props";
import template from "./chats-list.template";
import store, { StoreEvents } from "../../core/store";
import chatController from "../../controllers/chat-controller";
import authController from "../../controllers/auth-controller";

export class ChatsList extends Block {
  constructor(props: IChatsListProps) {
    super(props);
    store.on(StoreEvents.UPDATE, () => {
      const propsFromStore = store.getState()?.chats;
      console.log(propsFromStore);
      this.setProps({
        chats: propsFromStore,
      });
    });
    chatController.getChats();
  }
  render(): string {
    const { chats } = this.props;
    return compileTemplate(template, {
      chats,
    });
  }
  componentRendered(): void {
    const element = this.element;
    element.querySelectorAll(".single-chat__container").forEach((element) => {
      element.addEventListener("click", () => {
        console.log("clicked", element.id);
      });
    });
    element
      .querySelectorAll(".single-chat__delete-button")
      .forEach((element) => {
        element.addEventListener("click", (event) => {
          event.stopPropagation();
          console.log("clicked button", element.id);
        });
      });
  }
}

import { Block } from "../../core/block";
import { render as compileTemplate } from "pug";
import template from "./chat-form-search.template";
export class ChatSearchForm extends Block {
  render(): string {
    return compileTemplate(template);
  }
}

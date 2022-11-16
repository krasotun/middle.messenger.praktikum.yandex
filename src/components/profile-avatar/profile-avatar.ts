import { render as compileTemplate } from "pug";
import { Block } from "../../core/block";
import template from "./profile-avatar.template";

export class ProfileAvatar extends Block {
  render(): string {
    return compileTemplate(template);
  }
}

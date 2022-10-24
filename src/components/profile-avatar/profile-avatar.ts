import { Block } from "../../core/block";
import template from "./profile-avatar.template";
import { IProfileAvatarProps } from "./profile-avatar.props";
import { render as compileTemplate } from "pug";

export class ProfileAvatar extends Block {
  constructor({ name, link }: IProfileAvatarProps) {
    super({
      name,
      link,
    });
  }
  render(): string {
    const { name, link } = this.props;
    return compileTemplate(template, {
      name,
      link,
    });
  }
}

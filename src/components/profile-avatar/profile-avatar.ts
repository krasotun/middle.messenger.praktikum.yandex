import { Block } from "../../core/block";
import template from "./profile-avatar.template";
import { IProfileAvatarProps } from "./profile-avatar.props";
import { render as compileTemplate } from "pug";

export class ProfileAvatar extends Block {
  constructor(props: IProfileAvatarProps) {
    super(props);
  }
  render(): string {
    const { name, link } = this.props;
    return compileTemplate(template, {
      name,
      link,
    });
  }
}

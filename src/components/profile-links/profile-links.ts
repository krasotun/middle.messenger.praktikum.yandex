import { Block } from "../../core/block";
import template from "./profile-links.template";
import { render as compileTemplate } from "pug";
import { IProfileLinksProps } from "./profile-links.props";

export class ProfileLinks extends Block {
  constructor({ linkList }: IProfileLinksProps) {
    super({
      linkList,
    });
  }
  render(): string {
    const { linkList } = this.props;
    return compileTemplate(template, {
      linkList,
    });
  }
}

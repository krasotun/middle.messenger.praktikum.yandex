import { Block } from "../../core/block";
import template from "./profile-links.template";
import { render as compileTemplate } from "pug";
import { IProfileLinksProps } from "./profile-links.props";

export class ProfileLinks extends Block {
  constructor(props: IProfileLinksProps) {
    super(props);
  }
  render(): string {
    const { linkList } = this.props;
    return compileTemplate(template, {
      linkList,
    });
  }
}

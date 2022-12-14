import { Block } from "../../core/block";
import template from "./profile-links.template";
import { IProfileLinksProps } from "./profile-links.props";

export class ProfileLinks extends Block {
  constructor(props: IProfileLinksProps) {
    super(props);
  }
  render(): string {
    const { linkList } = this.props;
    return this.compile(template, {
      linkList,
    });
  }
}

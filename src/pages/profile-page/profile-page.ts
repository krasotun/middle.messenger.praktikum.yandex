import { Block } from "../../core/block";
import { render as compileTemplate } from "pug";
import template from "./profile.page.template";
import { IProfilePageProps } from "./profile-page.props";

export class ProfilePage extends Block {
  constructor({ children }: IProfilePageProps) {
    super({ children });
  }
  render(): string {
    const { header, profileAvatar, profileLinks, profileData } = this.props;
    return compileTemplate(template, {
      header,
      profileAvatar,
      profileLinks,
      profileData,
    });
  }
}

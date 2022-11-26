import { Block } from "../../core/block";
import template from "./profile.page.template";
import { IProfilePageProps } from "./profile-page.props";
export class ProfilePage extends Block {
  constructor({ children }: IProfilePageProps) {
    super({ children });
  }
  render(): string {
    const { header, changeAvatarForm, profileLinks, profileData } = this.props;
    return this.compile(template, {
      header,
      changeAvatarForm,
      profileLinks,
      profileData,
    });
  }
}

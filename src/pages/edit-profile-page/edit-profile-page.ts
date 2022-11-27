import { Block } from "../../core/block";
import template from "./edit-profile-page.template";
import { IEditProfileProps } from "./edit-profile-page.props";

export class EditProfilePage extends Block {
  constructor({ children }: IEditProfileProps) {
    super({ children });
  }
  render(): string {
    const { header, profileForm } = this.props;
    return this.compile(template, {
      header,
      profileForm,
    });
  }
}

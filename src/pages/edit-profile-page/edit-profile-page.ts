import { Block } from "../../core/block";
import { render as compileTemplate } from "pug";
import template from "./edit-profile-page.template";
import { IEditProfileProps } from "./edit-profile-page.props";

export class EditProfilePage extends Block {
  constructor({ children }: IEditProfileProps) {
    super({ children });
  }
  render(): string {
    const { header, editProfileForm } = this.props;
    return compileTemplate(template, {
      header,
      editProfileForm,
    });
  }
}

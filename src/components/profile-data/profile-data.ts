import { Block } from "../../core/block";
import { IProfileDataProps } from "./profile-data.props";
import { render as compileTemplate } from "pug";
import template from "./profile-data.template";

export class ProfileData extends Block {
  constructor(props: IProfileDataProps) {
    super(props);
  }
  render() {
    const {
      first_name,
      second_name,
      display_name,
      login,
      avatar,
      email,
      phone,
    } = this.props;
    return compileTemplate(template, {
      first_name,
      second_name,
      display_name,
      login,
      avatar,
      email,
      phone,
    });
  }
}

import { Block } from "../../core/block";
import { IProfileDataProps } from "./profile-data.props";
import { render as compileTemplate } from "pug";
import template from "./profile-data.template";
import store, { StoreEvents } from "../../core/store";
import authController from "../../controllers/auth-controller";

export class ProfileData extends Block {
  constructor(props: IProfileDataProps) {
    super(props);
    store.on(StoreEvents.UPDATE, () => {
      const propsFromStore = store.getState()?.userInfo;
      if (propsFromStore) {
        this.setProps(propsFromStore);
      }
    });
    authController.getUserInfo();
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

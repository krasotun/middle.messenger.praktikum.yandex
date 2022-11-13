import { Block } from "../../core/block";
import { IProfileDataProps } from "./profile-data.props";
import { render as compileTemplate } from "pug";
import template from "./profile-data.template";
import store, { StoreEvents } from "../../core/store";
import authController from "../../controllers/auth-controller";

export class ProfileData extends Block {
  constructor(props: IProfileDataProps) {
    super(props);
    authController.getUserInfo();
    store.on(StoreEvents.UPDATE, () => {
      const propsFromStore = store.getState();
      if (propsFromStore) {
        this.setProps(propsFromStore?.userInfo);
        this.setProps({
          first_name: "Marat",
        });
      }
    });
    const newProps = store.getState();
    console.log(newProps?.userInfo);
    this.setProps({
      first_name: "Marat",
    });
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

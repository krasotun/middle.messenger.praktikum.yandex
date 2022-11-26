import { Block } from "../../core/block";
import { IServicePageProps } from "./service-page.props";
import template from "./service-page.template";

export class ServicePage extends Block {
  constructor(props: IServicePageProps) {
    super(props);
  }
  render(): string {
    const { errorCode, errorText } = this.props;
    return this.compile(template, {
      errorCode,
      errorText,
    });
  }
}

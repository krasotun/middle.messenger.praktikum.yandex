import { Block } from "../../core/block";
import template from "./header.template";
export class Header extends Block {
  render() {
    return this.compile(template);
  }
}

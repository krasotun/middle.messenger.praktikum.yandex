import { Block } from "../../core/block";
import template from "./new-test.template";

export class NewTest extends Block {
  render() {
    return this.compile(template);
  }
}

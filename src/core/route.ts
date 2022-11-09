import { IBlockName } from "../interfaces/block-name";
import { IProps } from "../interfaces/props";
import { Block } from "./block";
import { renderTemplateToDoM } from "./render-template";

export class Route {
  private pathname: string;
  private blockName: IBlockName;
  private block: Block | null = null;
  private props: IProps;

  constructor(pathname: string, view: IBlockName, props: IProps) {
    this.pathname = pathname;
    this.blockName = view;
    this.props = props;
  }
  match(pathname: string) {
    return pathname === this.pathname;
  }
  leave() {
    if (this.block) {
      this.block.hide();
    }
  }
  navigate(pathname: string) {
    if (this.match(pathname)) {
      this.render();
    }
  }
  render() {
    if (!this.block) {
      this.block = new this.blockName({ ...this.props });
      renderTemplateToDoM(this.block);
      return;
    }
    this.block.show();
  }
}

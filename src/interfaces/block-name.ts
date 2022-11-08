import { Block } from "../core/block";
import { IProps } from "./props";

export interface IBlockName extends Function {
  new (props: IProps): Block;
}

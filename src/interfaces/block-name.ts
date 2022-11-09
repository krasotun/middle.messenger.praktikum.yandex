import { Block } from "../core/block";
import { IProps } from "./props";
export interface IBlockName {
  new (props: IProps): Block;
}

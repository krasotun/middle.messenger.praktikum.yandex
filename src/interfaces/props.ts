interface IChild {
  name: string;
  element: HTMLElement;
}
export interface IProps {
  [key: string]: any;
  class?: string;
  children?: {};
  child?: IChild | HTMLElement | string;
  events?: Record<string, (...args: any) => void>;
}

interface IChild {
  name: string;
  element: HTMLElement;
}
export interface IProps {
  [key: string]: any;
  className?: string;
  children?: {};
  child?: IChild | HTMLElement | string;
  events?: Record<string, (...args: any) => void>;
}

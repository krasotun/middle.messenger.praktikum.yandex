export interface IProps {
  [key: string]: any;
  className?: string;
  children?: {};
  events?: Record<string, (...args: any) => void>;
}

import { Button } from "../button/button";

export interface ITestHbsProps {
  title: string;
  list: [];
  children: {
    submitButton: Button;
  };
}

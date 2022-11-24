import { Button } from "../button/button";

export interface ITestHbsProps {
  title: string;
  children: {
    submitButton: Button;
  };
}

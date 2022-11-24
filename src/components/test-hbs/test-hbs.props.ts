import { Button } from "../button/button";
import { NewTest } from "../new-test/new-test";

export interface ITestHbsProps {
  title: string;
  list: [];
  children: {
    newTest: NewTest;
  };
}

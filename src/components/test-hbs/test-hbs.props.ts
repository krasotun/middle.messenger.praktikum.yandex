import { Button } from "../button/button";
import { Header } from "../header/header";
import { NewTest } from "../new-test/new-test";

export interface ITestHbsProps {
  title: string;
  list: [];
  children: {
    newTest: NewTest;
    header: Header;
  };
}

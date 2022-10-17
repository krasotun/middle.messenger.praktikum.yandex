import { render, compile } from "pug";
import headTemplate from "./components/head/head.template";

const template = compile(headTemplate)();

const root = document.querySelector(".root");
console.log(root);
root?.appendChild(document.createTextNode(template));

console.log(template);

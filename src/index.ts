// import { render } from "pug";
// import testTemplate from "./components/test/test.template";
// const parser: DOMParser = new DOMParser();
// const root: HTMLElement = document.getElementById("root");
// const props = {
//   title: "My title from props",
// };
// const template: string = render(testTemplate, {
//   title: props.title,
// });

import { Header } from "./components/header/header";
import { Block } from "./core/block/block";

// const renderTemplateToDom = (template: string, container: HTMLElement) => {
//   if (container) {
//     const doc = parser.parseFromString(template, "text/html");
//     const nodeList = Array.from(doc.body.childNodes);
//     nodeList.forEach((domElement) => {
//       container?.appendChild(domElement);
//     });
//   }
// };
// renderTemplateToDom(template, root);

const header = new Header("div");
const root: HTMLElement = document.getElementById("root");

const renderTemplateToDOM = (template: Block, container: HTMLElement) => {
  const nodeList = Array.from(template.element.childNodes);
  nodeList.forEach((element) => {
    container.appendChild(element);
  });
};

renderTemplateToDOM(header, root);

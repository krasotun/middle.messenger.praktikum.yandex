import { render } from "pug";
import testTemplate from "./components/test/test.template";
const parser: DOMParser = new DOMParser();
const root: HTMLElement = document.getElementById("root");
const props = {
  title: "My title from props",
};
const template: string = render(testTemplate, {
  title: props.title,
});

const renderTemplateToDom = (template: string, container: HTMLElement) => {
  if (container) {
    const doc = parser.parseFromString(template, "text/html");
    const nodeList = Array.from(doc.body.childNodes);
    nodeList.forEach((domElement) => {
      container?.appendChild(domElement);
    });
  }
};
renderTemplateToDom(template, root);

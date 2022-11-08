import { Block } from "./block";

export const renderTemplateToDoM = (template: Block) => {
  const root: HTMLElement | null = document.getElementById("root");
  if (root) {
    root.innerHTML = "";
    root.appendChild(template.element);
  }
};

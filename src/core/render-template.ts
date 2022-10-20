import { Block } from "./block";

export const renderTemplateToDoM = (
  template: Block,
  container: HTMLElement
) => {
  if (container) {
    container.appendChild(template.element);
  }
};

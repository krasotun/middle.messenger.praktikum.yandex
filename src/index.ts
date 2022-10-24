import { renderTemplateToDoM } from "./core/render-template";
import { pageToRender } from "./core/router";
const root: HTMLElement | null = document.getElementById("root");
document.addEventListener("DOMContentLoaded", () => {
  renderTemplateToDoM(pageToRender(), root as HTMLElement);
});

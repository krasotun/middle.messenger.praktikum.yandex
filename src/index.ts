import { renderTemplateToDoM } from "./core/render-template";
import { pageToRender } from "./core/router";
const root: HTMLElement | null = document.getElementById("root");
document.addEventListener("DOMContentLoaded", () => {
  renderTemplateToDoM(pageToRender(), root as HTMLElement);
  const wrapper = document.querySelector(".chat-search-form__input");
  const onBlur = () => {
    console.log("Blur");
  };
  const onFocus = () => {
    console.log("Focus");
  };
  const onInput = () => {
    console.log("input");
  };
  wrapper?.addEventListener("blur", onBlur);
  wrapper?.addEventListener("focus", onFocus);
  wrapper?.addEventListener("input", onInput);
});

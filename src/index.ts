import { Header } from "./components/header/header";
import { renderTemplateToDoM } from "./core/render-template";
const header = new Header({ title: "Текст заголовка" });
console.log("Перед", header.getElement());
const root: HTMLElement | null = document.getElementById("root");
renderTemplateToDoM(header, root as HTMLElement);
setTimeout(() => {
  header.setProps({
    title: "Новый текст заголовка",
  });
  console.log("После", header.getElement());
}, 3000);

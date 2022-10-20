import { Header } from "./components/header/header";
import { renderTemplateToDoM } from "./core/render-template";
const header = new Header({ title: "Текст заголовка" });
const root: HTMLElement | null = document.getElementById("root");
renderTemplateToDoM(header, root as HTMLElement);

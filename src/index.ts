import { ServicePage } from "./components/service-page/service-page";
import { Router } from "./core/router";

const router = new Router();
document.addEventListener("DOMContentLoaded", () => {
  router.use("/", ServicePage, {
    errorCode: "404",
    errorText: "Страница не найдена",
  });
  router.start();
});

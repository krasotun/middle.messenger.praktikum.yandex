import { ServicePage } from "./components/service-page/service-page";
import { Router } from "./core/router";

const router = new Router();
document.addEventListener("DOMContentLoaded", () => {
  router.use("/404", ServicePage, {
    errorCode: "404",
    errorText: "Страница не найдена",
  });
  router.use("/500", ServicePage, {
    errorCode: "500",
    errorText: "Ошибка сервера",
  });
  router.start();
});

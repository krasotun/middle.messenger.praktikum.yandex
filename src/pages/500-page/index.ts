import { ServicePage } from "../../components/service-page/service-page";

export const internalErrorPage = new ServicePage({
  errorCode: "500",
  errorText: "Ошибка сервера",
});

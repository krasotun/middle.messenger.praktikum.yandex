import { IBlockName } from "../interfaces/block-name";
import { IProps } from "../interfaces/props";
import { Route } from "./route";

export class Router {
  static _instance: Router;
  private _routes: Route[] = [];
  private _history: History = window.history;
  private _currentRoute: Route | null = null;
  constructor() {
    if (Router._instance) {
      return Router._instance;
    }
    Router._instance = this;
  }
  go(pathname: string) {
    this._history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  back() {
    this._history.back();
  }

  forward() {
    this._history.forward();
  }
  use(pathname: string, block: IBlockName, props: IProps = {}) {
    const route = new Route(pathname, block, props);
    this._routes.push(route);
    return this;
  }
  start() {
    window.onpopstate = (e) => {
      this._onRoute(e.currentTarget?.location.pathname);
    };
    this._onRoute(window.location.pathname);
  }
  getRoute(pathname: string): Route | undefined {
    return this._routes.find((route) => route.match(pathname));
  }
  private _onRoute(pathname: string) {
    let route = this.getRoute(pathname);
    if (!route) {
      return;
    }
    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render();
  }
}

// import { mainPage } from "../pages/main-page";
// import { signUpPage } from "../pages/sign-up-page";
// import { profilePage } from "../pages/profile-page";
// import { editProfilePage } from "../pages/edit-profile-page";
// import { changePasswordPage } from "../pages/change-password-page";
// import { notFoundPage } from "../pages/404-page";
// import { internalErrorPage } from "../pages/500-page";
// import { chatPage } from "../pages/chat-page";
// export const pageToRender = () => {
//   const path = document.location.pathname;
//   switch (path) {
//     case "/":
//       return mainPage;
//     case "/sign-up":
//       return signUpPage;
//     case "/profile":
//       return profilePage;
//     case "/edit-profile":
//       return editProfilePage;
//     case "/change-password":
//       return changePasswordPage;
//     case "/chat":
//       return chatPage;
//     case "/404":
//       return notFoundPage;
//     case "/500":
//       return internalErrorPage;
//     default:
//       return mainPage;
//   }
// };

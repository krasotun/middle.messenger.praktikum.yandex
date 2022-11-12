import { IInitialState } from "../interfaces/initial-state";

export enum URLS {
  BASE = "https://ya-praktikum.tech/api/v2",
}
export enum PATHS {
  MAINPAGE = "/",
  CHATPAGE = "/chat",
  SIGNUPPAGE = "/sign-up",
  PROFILEPAGE = "/profile",
  EDITPROFILEPAGE = "/edit-profile",
  CHANGEPASSWORDPAGE = "/change-password",
  NOTFOUNDPAGE = "/404",
  SERVERERRORPAGE = "/500",
}

export const initialState: IInitialState = {
  isLoggedIn: false,
};

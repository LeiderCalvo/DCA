import { NavigateAction, NavigationActions, Screens } from "../types/store";

export const navigate = (screen: Screens): NavigateAction => {
  return {
    action: NavigationActions.NAVIGATE,
    payload: screen,
  };
};

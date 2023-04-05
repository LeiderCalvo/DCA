import { User } from "./user";

export interface AppState {
  profile: { loading: boolean; error?: Error; data?: User };
}

export type Observer = HTMLElement & { render: () => void };

export enum ActionTypes {
  UPDATE_USER_NAME = "UPDATE_USER_NAME",
  LOGIN = "LOGIN",
  LOGIN_ERROR = "LOGIN_ERROR",
  LOGIN_LOADING = "LOGIN_LOADING",
}

export interface UpdateNameAction {
  type: ActionTypes.UPDATE_USER_NAME;
  payload: string;
}

export interface LoginAction {
  type: ActionTypes.LOGIN;
  payload: User;
}

export interface LoginErrorAction {
  type: ActionTypes.LOGIN_ERROR;
  payload: Error;
}

export interface LoginLoadingAction {
  type: ActionTypes.LOGIN_LOADING;
  payload: boolean;
}

export type Action = LoginAction | UpdateNameAction | LoginErrorAction | LoginLoadingAction;

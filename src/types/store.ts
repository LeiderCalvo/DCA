import { Trip } from "./trips"

export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    user: {
        userName: string,
        email: string,
    },
    trips: Trip[]
}

export enum AuthActions {
    "LOGIN" = "LOGIN",
    "LOGOUT" = "LOGOUT",
}

export enum TripsActions {
    "ADD" = "ADD",
    "GET" = "GET",
}

export interface LogInAction {
    action: AuthActions.LOGIN,
    payload: Pick<AppState, "user">
}

export interface LogOutAction {
    action: AuthActions.LOGOUT,
    payload: void
}

export interface AddTripAction {
    action: TripsActions.ADD,
    payload: Trip
}

export interface GetTripsAction {
    action: TripsActions.GET,
    payload: Trip[]
}

export type Actions = LogInAction | LogOutAction | AddTripAction | GetTripsAction;
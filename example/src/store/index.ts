import { Action, AppState, Observer } from "../types/store";
import { reducer } from "./reducer";

const initialState: AppState = {
    profile: {
        loading: false,
        data: undefined,
        error: undefined
    },
}

export let appState: AppState = initialState;

const observers: Observer[] = [];

export const dispatch = (action: Action) => {
    appState = reducer(action, appState);
    observers.forEach(o => o.render())
}

export const addObserver = (comp: Observer) => {
    observers.push(comp)
}
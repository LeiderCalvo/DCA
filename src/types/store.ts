export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  something: {};
};

export enum SomeActions {
  "X" = "X",
}

export interface XAction {
  action: SomeActions.X;
  payload: Pick<AppState, "something">;
}

export type Actions = XAction;

export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    screen: string
}

export enum ScreenActions {
    "NAVIGATE" = "NAVIGATE",
}

export type Actions = ScreenActions;
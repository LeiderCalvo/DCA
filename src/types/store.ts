export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	backgroundColor: string;
};

export enum BackgroundActions {
	'CHANGEBACKGROUND' = 'CHANGEBACKGROUND',
}

export interface ChangeBackgroundAction {
	action: BackgroundActions.CHANGEBACKGROUND;
	payload: 'red';
}

export type Actions = ChangeBackgroundAction;

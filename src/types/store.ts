export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	screen: string;
};

export enum Screens {
	'LOGIN' = 'LOGIN',
	'DASHBOARD' = 'DASHBOARD',
	'REGISTER' = 'REGISTER',
}

export enum Actions {
	'NAVIGATE' = 'NAVIGATE',
}

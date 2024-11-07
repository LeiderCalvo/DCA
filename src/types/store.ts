export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	screen: string;
	products: [];
	user: '';
	productsByUser: [];
};

export enum Screens {
	'LOGIN' = 'LOGIN',
	'DASHBOARD' = 'DASHBOARD',
	'REGISTER' = 'REGISTER',
	'PROFILE' = 'PROFILE',
}

export enum Actions {
	'NAVIGATE' = 'NAVIGATE',
	'GETPRODUCTS' = 'GETPRODUCTS',
	'SETUSERCREDENTIALS' = 'SETUSERCREDENTIALS',
	'GETPRODUCTSBYUSER' = 'GETPRODUCTSBYUSER',
}

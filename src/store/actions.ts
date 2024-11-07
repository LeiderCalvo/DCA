import { Actions, Screens } from '../types/store';
import { getProducts, getProductsByUser } from '../utils/firebase';

export const navigate = (screen: Screens) => {
	return {
		action: Actions.NAVIGATE,
		payload: screen,
	};
};

export const getProductsAction = async () => {
	const products = await getProducts(); //Firestore
	return {
		action: Actions.GETPRODUCTS,
		payload: products,
	};
};

export const getProductsByUserAction = async () => {
	const productsByUser = await getProductsByUser(); //Firestore
	return {
		action: Actions.GETPRODUCTSBYUSER,
		payload: productsByUser,
	};
};

export const setUserCredentials = (user: string) => {
	return {
		action: Actions.SETUSERCREDENTIALS,
		payload: user,
	};
};

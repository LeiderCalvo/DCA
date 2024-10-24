import { Actions, Screens } from '../types/store';
import { getProducts } from '../utils/firebase';

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

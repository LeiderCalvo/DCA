import { Actions } from '../types/store';
import { Screens } from '../types/store';

export const changeBackground = (payload: any) => {
	return {
		action: Actions.CHANGEBACKGROUND,
		payload,
	};
};

export const navigate = (screen: Screens) => {
	return {
		action: Actions.NAVIGATE,
		payload: screen,
	};
};

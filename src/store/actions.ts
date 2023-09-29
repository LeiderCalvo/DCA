import { BackgroundActions } from '../types/store';

export const changeBackground = (payload: any) => {
	return {
		action: BackgroundActions.CHANGEBACKGROUND,
		payload,
	};
};

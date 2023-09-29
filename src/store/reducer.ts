import { AppState } from '../types/store';

import { Actions, BackgroundActions } from '../types/store';

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
	console.log(currentAction);
	const { action, payload } = currentAction;

	switch (action) {
		case BackgroundActions.CHANGEBACKGROUND:
			return {
				...currentState,
				backgroundColor: payload,
			};

		default:
			return currentState;
	}
};

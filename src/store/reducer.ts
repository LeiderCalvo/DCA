export const reducer = (currentAction: any, currentState: any) => {
	const { action, payload } = currentAction;

	switch (action) {
		case 'NAVIGATE':
			currentState.screen = payload;
			break;

		case 'GETPOSTS':
			currentState.posts = payload;
			break;

		case 'SETUSER':
			currentState.user = payload;
			break;
	}

	return currentState;
};

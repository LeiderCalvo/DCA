import { reducer } from './reducer';
import { AppState, Observer } from '../types/store';

//El estado global, appState
export let appState: AppState = {
	screen: 'LOGIN',
	backgroundColor: 'black',
	username: 'Juanes',
	id: 12345,
};

let observers: Observer[] = [];

//Crear el dispatch
export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState));
	appState = reducer(action, clone);
	observers.forEach((o) => o.render());
};

//Agregar los observadores para los interesados, los suscritos
export const addObserver = (ref: any) => {
	observers = [...observers, ref];
};

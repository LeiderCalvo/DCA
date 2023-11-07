import { onAuthStateChanged } from "firebase/auth";
import { Screens } from "../types/navigation";
import { Observer } from "../types/store";
import { reducer } from "./reducer";
import { auth } from "../utils/firebase";
import { navigate, setUserCredentials } from "./actions";

onAuthStateChanged(auth, (user)=>{
  if(user){
    user.uid !== null ? dispatch(setUserCredentials(user.uid)) : '';
    dispatch(navigate(Screens.DASHBOARD));
  }else {
    dispatch(navigate(Screens.LOGIN));
  }
})

const emptyState = {
  screen: Screens.LOGIN,
  user: {},
};

export let appState = emptyState;

let observers: Observer[] = [];

const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: any) => {
  const clone = JSON.parse(JSON.stringify(appState));
  const newState = reducer(action, clone);
  appState = newState;
  notifyObservers();
};

export const addObserver = (ref: Observer) => {
  observers = [...observers, ref];
};
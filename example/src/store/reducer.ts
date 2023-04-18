import { Action, ActionTypes, AppState } from "../types/store";

export const reducer = (action: Action, currentState: AppState): AppState => {
  const clone = JSON.parse(JSON.stringify(currentState));

  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        profile: { data: action.payload, loading: false, error: undefined },
      };

    case ActionTypes.UPDATE_USER_NAME:
      return {
        ...clone,
        profile: {
          ...clone.profile,
          data: { ...clone.profiloe.data, userName: action.payload },
        },
      };

    case ActionTypes.LOGIN_ERROR:
      return {
        ...clone,
        profile: {
          ...clone.profile,
          loading: false,
          error: action.payload,
        },
      };

    case ActionTypes.LOGIN_LOADING:
      return {
        ...clone,
        profile: {
          ...clone.profile,
          loading: true,
        },
      };

    default:
      return clone;
  }
};

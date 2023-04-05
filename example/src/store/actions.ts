import AuthService from "../services/auth"
import { Credentials } from "../types/auth"
import { ActionTypes, LoginAction, LoginErrorAction, LoginLoadingAction, UpdateNameAction } from "../types/store"
import { dispatch } from "./index"

export const updateName = (name: string): UpdateNameAction => {
    return {
        type: ActionTypes.UPDATE_USER_NAME,
        payload: name
    }
}

export const loginLoading = (loading: boolean): LoginLoadingAction => {
    return {
        type: ActionTypes.LOGIN_LOADING,
        payload: loading
    }
}

export const login = async (credentials: Credentials): Promise<LoginAction | LoginErrorAction > => {
    dispatch(loginLoading(true))
    const user = await AuthService.login(credentials);
    if(!user) {
        return {
            type: ActionTypes.LOGIN_ERROR,
            payload: new Error("credentials invalid")
        }
    }

    return {
        type: ActionTypes.LOGIN,
        payload: user
    }
}
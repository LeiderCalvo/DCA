import TripsService from '../services/trips'
import { AddTripAction, AuthActions, GetTripsAction, LogInAction, LogOutAction, TripsActions } from "../types/store"


export const logOut = (): LogOutAction => {
    return {
        action: AuthActions.LOGOUT,
        payload: undefined
    }
}

export const logIn = ({payload}: Pick<LogInAction, "payload">): LogInAction => {
    return {
        action: AuthActions.LOGIN,
        payload
    }
}

export const getTrips = async (): Promise<GetTripsAction> => {
    const trips = await TripsService.get();
    return {
        action: TripsActions.GET,
        payload: trips
    }
}

export const addNewTrip = ({payload}: Pick<AddTripAction, "payload">): AddTripAction => {
    return {
        action: TripsActions.ADD,
        payload
    }
}

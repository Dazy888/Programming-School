 import {InferActionTypes} from "../Redux-Store"

let initialState = {
    fetching: false
}

type InitialStateType = typeof initialState

export function contactsReducer(state = initialState, action: ActionType): InitialStateType {
    switch (action.type) {
        case 'Programming-Courses/Contacts/CHANGE-FETCHING-STATUS':
            return {
                ...state,
                fetching: action.status
            }
        default:
            return {
                ...state
            }
    }
}

type ActionType = InferActionTypes<typeof ContactsReducerActions>

export const ContactsReducerActions = {
    changeFetchingStatus: (status: boolean) => ({type: 'Programming-Courses/Contacts/CHANGE-FETCHING-STATUS', status} as const)
}
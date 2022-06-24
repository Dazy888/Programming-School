import {InferActionTypes} from "../Redux-Store"

let initialState = {
    newsSubscribedUsers: [] as Array<string>
}

type initialStateType = typeof initialState

export function HomeReducer(state = initialState, action: ActionType): initialStateType {
    switch (action.type) {
        case 'PROGRAMMING-COURSES/SCHEDULE/SUBSCRIBE-NEWS':
            return {
                ...state,
                newsSubscribedUsers: [...state.newsSubscribedUsers, action.email]
            }
        default:
            return {
                ...state
            }
    }
}

type ActionType = InferActionTypes<typeof ScheduleReducerActions>

export const ScheduleReducerActions = {
    subscribeNews: (email: string) => ({type: 'PROGRAMMING-COURSES/SCHEDULE/SUBSCRIBE-NEWS', email} as const)
}
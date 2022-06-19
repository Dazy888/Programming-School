import {AppStateType} from "../Redux-Store"

export function getNewsSubscribedUsers(state: AppStateType) {
    return state.schedulePage.newsSubscribedUsers
}
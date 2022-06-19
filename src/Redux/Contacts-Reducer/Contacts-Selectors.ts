import {AppStateType} from "../Redux-Store"

export function getFetchingStatus(state: AppStateType) {
    return state.contactsPage.fetching
}
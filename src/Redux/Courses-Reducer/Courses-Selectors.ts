import {AppStateType} from "../Redux-Store"

export function getCoursesInfo(state: AppStateType) {
    return state.coursesPage
}
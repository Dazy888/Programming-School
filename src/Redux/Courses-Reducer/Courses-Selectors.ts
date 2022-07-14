import {AppStateType} from "../Redux-Store"

export function getCoursesInfo(state: AppStateType) {
    return state.coursesPage
}

export function getTeachersInfo(state: AppStateType) {
    return state.teachersPage
}
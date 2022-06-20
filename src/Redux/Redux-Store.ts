import {combineReducers, createStore} from "redux";
import {contactsReducer} from "./Contacts-Reducer/Contacts-Reducer";
import {HomeReducer} from "./Home-Reducer/Home-Reducer";
import {TeachersReducer} from "./Teachers-Reducer/Teachers-Reducer";

let reducers = combineReducers({
    contactsPage: contactsReducer,
    schedulePage: HomeReducer,
    teachersPage: TeachersReducer
})

type PropertiesTypes<T> = T extends {[key: string] : infer U} ? U : never
export type InferActionTypes<T extends {[key: string]: (...args: any) => any}> = ReturnType<PropertiesTypes<T>>
export type AppStateType = ReturnType<typeof reducers>

export const store = createStore(reducers)
import {combineReducers, createStore} from "redux";
import {contactsReducer} from "./Contacts-Page-Reducer/Contacts-Reducer";

let reducers = combineReducers({
    contactsPage: contactsReducer
})

type PropertiesTypes<T> = T extends {[key: string] : infer U} ? U : never
export type InferActionTypes<T extends {[key: string]: (...args: any) => any}> = ReturnType<PropertiesTypes<T>>
export type AppStateType = ReturnType<typeof reducers>

export const store = createStore(reducers)
import { combineReducers, createStore } from "redux"
import testReducer from "@/store/reducers/home/home-reducer"

let rootReducer = combineReducers({
    home: testReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export default createStore(rootReducer)
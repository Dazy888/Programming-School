import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"
// Reducers
import { homeReducer } from "@/store/reducers/HomeSlice"
import { coursesReducer } from "@/store/reducers/CoursesSlice"

const rootReducer = combineReducers({
    homeReducer,
    coursesReducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

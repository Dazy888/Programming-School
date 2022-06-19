import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import {HomePage} from "./Pages/Home/Home-Page"
import {ContactsPage} from "./Pages/Contacts/Contacts-Page"
import {Provider} from "react-redux"
import {store} from "./Redux/Redux-Store"
import {SchedulePage} from "./Pages/Schedule/Schedule-Page"
import {CoursesPage} from "./Pages/Courses/Courses-Page"

export function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div id={'wrapper'}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/home'}/>}/>
                        <Route path={'/home'} element={<HomePage/>}/>
                        <Route path={'/contacts'} element={<ContactsPage/>}/>
                        <Route path={'/schedule'} element={<SchedulePage/>}/>
                        <Route path={'/courses'} element={<CoursesPage/>}/>
                    </Routes>
                </div>
            </Provider>
        </BrowserRouter>
    )
}
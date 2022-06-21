import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import {HomePage} from "./Pages/Home/Home-Page"
import {ContactsPage} from "./Pages/Contacts/Contacts-Page"
import {Provider} from "react-redux"
import {store} from "./Redux/Redux-Store"
import {SchedulePage} from "./Pages/Schedule/Schedule-Page"
import {CoursesPage} from "./Pages/Courses/Courses-Page"
import {TeachersPage} from "./Pages/Teachers/Teachers-Page";
import {Navigation} from "./Components/Navigation/Navigation";

export function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div id={'wrapper'}>
                    <Navigation/>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/home'}/>}/>
                        <Route path={'/home'} element={<HomePage/>}/>
                        <Route path={'/contacts'} element={<ContactsPage/>}/>
                        <Route path={'/schedule'} element={<SchedulePage/>}/>
                        <Route path={'/courses/*'} element={<CoursesPage/>}/>
                        <Route path={'/teachers'} element={<TeachersPage/>}/>
                    </Routes>
                </div>
            </Provider>
        </BrowserRouter>
    )
}
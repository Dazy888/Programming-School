import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import {MainPage} from "./Pages/Main-Page/Main-Page"
import {ContactsPage} from "./Pages/Contacts-Page/Contacts-Page";
import {Provider} from "react-redux";
import {store} from "./Redux/Redux-Store";
import {SchedulePage} from "./Pages/Schedule-Page/Schedule-Page";

export function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div id={'wrapper'}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/home'}/>}/>
                        <Route path={'/home'} element={<MainPage/>}/>
                        <Route path={'/contacts'} element={<ContactsPage/>}/>
                        <Route path={'/schedule'} element={<SchedulePage/>}/>
                    </Routes>
                </div>
            </Provider>
        </BrowserRouter>
    )
}
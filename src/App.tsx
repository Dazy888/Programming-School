import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import {MainPage} from "./Pages/Main-Page/Main-Page"
import {ContactsPage} from "./Pages/Contacts-Page/Contacts-Page";

export function App() {
    return (
        <BrowserRouter>
            <div id={'wrapper'}>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/home'}/>}/>
                    <Route path={'/home'} element={<MainPage/>}/>
                    <Route path={'/contacts'} element={<ContactsPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
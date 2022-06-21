import './Styles/Courses.css'
import {Route, Routes} from "react-router-dom"
import {Main} from "./Main"
import {Python} from "./Python"
import {JavaPro} from "./Java-Pro"
import {Web} from "./Web"
import {CPlusPlus} from "./C++"
import {PythonFullstack} from "./Python-Fullstack";
import {Android} from "./Android";
import {CSharp} from "./C#";
import {IOS} from "./IOS";
import {PHPFullstack} from "./PHP-Fullstack";
import {Mobile} from "./Mobile";
import {Java} from "./Java";
import {FrontendFull} from "./Frontend-Full";
import {FrontendPro} from "./Frontend-Pro";
import {JavascriptFullstack} from "./Javascript-Fullstack";
import {PHPPro} from "./PHP-Pro";

export function CoursesPage() {
    return (
        <div id={'courses-wrapper'}>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/python'} element={<Python/>}/>
                <Route path={'/java-pro'} element={<JavaPro/>}/>
                <Route path={'/web'} element={<Web/>}/>
                <Route path={'/c++'} element={<CPlusPlus/>}/>
                <Route path={'/python-fullstack'} element={<PythonFullstack/>}/>
                <Route path={'/android'} element={<Android/>}/>
                <Route path={'/c-sharp'} element={<CSharp/>}/>
                <Route path={'/ios'} element={<IOS/>}/>
                <Route path={'/php-fullstack'} element={<PHPFullstack/>}/>
                <Route path={'/mobile'} element={<Mobile/>}/>
                <Route path={'/java'} element={<Java/>}/>
                <Route path={'/frontend-full'} element={<FrontendFull/>}/>
                <Route path={'/frontend-pro'} element={<FrontendPro/>}/>
                <Route path={'/javascript-fullstack'} element={<JavascriptFullstack/>}/>
                <Route path={'/php-pro'} element={<PHPPro/>}/>
            </Routes>
        </div>
    )
}
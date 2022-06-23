import './Styles/Courses.css'
import './Styles/Course.css'
import './Styles/Course-Media.css'
import {Route, Routes} from "react-router-dom"
import {Main} from "./Main"
import {Python} from "./Python"
import {JavaPro} from "./Java-Pro"
import {Web} from "./Web"
import {CPlusPlus} from "./C-Plus-Plus"
import {PythonFullstack} from "./Python-Fullstack"
import {Android} from "./Android"
import {CSharp} from "./C-Sharp"
import {IOS} from "./IOS"
import {PHPFullstack} from "./PHP-Fullstack"
import {Mobile} from "./Mobile"
import {Java} from "./Java"
import {FrontendFull} from "./Frontend-Full"
import {FrontendPro} from "./Frontend-Pro"
import {JavascriptFullstack} from "./Javascript-Fullstack"
import {PHPPro} from "./PHP-Pro"
import {useSelector} from "react-redux"
import {getCoursesInfo} from "../../Redux/Courses-Reducer/Courses-Selectors"

export function CoursesPage() {
    const courses_info = useSelector(getCoursesInfo)

    return (
        <div id={'courses-wrapper'}>
            <Routes>
                <Route path={'/'} element={<Main courses_info={courses_info}/>}/>
                <Route path={'/python'} element={<Python projects={courses_info.python.course.projects} skills={courses_info.python.course.skills} time={courses_info.python.time} img={courses_info.python.main_img} header={courses_info.python.course.header} job_name={courses_info.python.job_name} for_who={courses_info.python.course.for_who}/>}/>
                <Route path={'/java-pro'} element={<JavaPro skills={courses_info.java_pro.course.skills} time={courses_info.java_pro.time} img={courses_info.java_pro.main_img} header={courses_info.java_pro.course.header} job_name={courses_info.java_pro.job_name} for_who={courses_info.java_pro.course.for_who}/>}/>
                <Route path={'/web'} element={<Web projects={courses_info.web.course.projects} skills={courses_info.web.course.skills} time={courses_info.web.time} img={courses_info.web.main_img} header={courses_info.web.course.header} job_name={courses_info.web.job_name} for_who={courses_info.web.course.for_who}/>}/>
                <Route path={'/c++'} element={<CPlusPlus projects={courses_info.c_plus_plus.course.projects} skills={courses_info.c_plus_plus.course.skills} time={courses_info.c_plus_plus.time} img={courses_info.c_plus_plus.main_img} header={courses_info.c_plus_plus.course.header} job_name={courses_info.c_plus_plus.job_name} for_who={courses_info.c_plus_plus.course.for_who}/>}/>
                <Route path={'/python-fullstack'} element={<PythonFullstack projects={courses_info.python_fullstack.course.projects} skills={courses_info.python_fullstack.course.skills} time={courses_info.python_fullstack.time} img={courses_info.python_fullstack.main_img} header={courses_info.python_fullstack.course.header} job_name={courses_info.python_fullstack.job_name} for_who={courses_info.python_fullstack.course.for_who}/>}/>
                <Route path={'/android'} element={<Android projects={courses_info.android.course.projects} skills={courses_info.android.course.skills} time={courses_info.android.time} img={courses_info.android.main_img} header={courses_info.android.course.header} job_name={courses_info.android.job_name} for_who={courses_info.android.course.for_who}/>}/>
                <Route path={'/c-sharp'} element={<CSharp projects={courses_info.c_sharp.course.projects} skills={courses_info.c_sharp.course.skills} time={courses_info.c_sharp.time} img={courses_info.c_sharp.main_img} header={courses_info.c_sharp.course.header} job_name={courses_info.c_sharp.job_name} for_who={courses_info.c_sharp.course.for_who}/>}/>
                <Route path={'/ios'} element={<IOS projects={courses_info.ios.course.projects} skills={courses_info.ios.course.skills} time={courses_info.ios.time} img={courses_info.ios.main_img} header={courses_info.ios.course.header} job_name={courses_info.ios.job_name} for_who={courses_info.ios.course.for_who}/>}/>
                <Route path={'/php-fullstack'} element={<PHPFullstack projects={courses_info.php_fullstack.course.projects} skills={courses_info.php_fullstack.course.skills} time={courses_info.php_fullstack.time} img={courses_info.php_fullstack.main_img} header={courses_info.php_fullstack.course.header} job_name={courses_info.php_fullstack.job_name} for_who={courses_info.php_fullstack.course.for_who}/>}/>
                <Route path={'/mobile'} element={<Mobile projects_texts={[...courses_info.ios.course.projects.texts, ...courses_info.android.course.projects.texts]} projects_photographs={[...courses_info.ios.course.projects.photographs, ...courses_info.android.course.projects.photographs]} projects={courses_info.mobile.course.projects} skills={courses_info.mobile.course.skills} time={courses_info.mobile.time} img={courses_info.mobile.main_img} header={courses_info.mobile.course.header} job_name={courses_info.mobile.job_name} for_who={courses_info.mobile.course.for_who}/>}/>
                <Route path={'/java'} element={<Java skills={courses_info.java.course.skills} time={courses_info.java.time} img={courses_info.java.main_img} header={courses_info.java.course.header} job_name={courses_info.java.job_name} for_who={courses_info.java.course.for_who}/>}/>
                <Route path={'/frontend-full'} element={<FrontendFull projects_titles={courses_info.web.course.projects.titles} projects_photographs={courses_info.web.course.projects.photographs} projects_texts={courses_info.web.course.projects.texts} projects={courses_info.frontend_full.course.projects} skills={courses_info.frontend_full.course.skills} time={courses_info.frontend_full.time} img={courses_info.frontend_full.main_img} header={courses_info.frontend_full.course.header} job_name={courses_info.frontend_full.job_name} for_who={courses_info.frontend_full.course.for_who}/>}/>
                <Route path={'/frontend-pro'} element={<FrontendPro projects_titles={courses_info.web.course.projects.titles} projects_photographs={courses_info.web.course.projects.photographs} projects_texts={courses_info.web.course.projects.texts} projects={courses_info.frontend_pro.course.projects} skills={courses_info.frontend_pro.course.skills} time={courses_info.frontend_pro.time} img={courses_info.frontend_pro.main_img} header={courses_info.frontend_pro.course.header} job_name={courses_info.frontend_pro.job_name} for_who={courses_info.frontend_pro.course.for_who}/>}/>
                <Route path={'/javascript-fullstack'} element={<JavascriptFullstack projects={courses_info.js_fullstack.course.projects} skills={courses_info.js_fullstack.course.skills} time={courses_info.js_fullstack.time} img={courses_info.js_fullstack.main_img} header={courses_info.js_fullstack.course.header} job_name={courses_info.js_fullstack.job_name} for_who={courses_info.js_fullstack.course.for_who}/>}/>
                <Route path={'/php-pro'} element={<PHPPro skills={courses_info.php_pro.course.skills} time={courses_info.php_pro.time} img={courses_info.php_pro.main_img} header={courses_info.php_pro.course.header} job_name={courses_info.php_pro.job_name} for_who={courses_info.php_pro.course.for_who}/>}/>
            </Routes>
        </div>
    )
}
import {useNavigate} from "react-router-dom"
import {InitialStateType} from "../../Redux/Courses-Reducer/Courses-Reducer";

type CourseItemPropsType = {
    title: string
    time: string
    imgUrl: string
    path: string
    className?: string
}

function CourseItem({title, time, imgUrl, path, className = ''}: CourseItemPropsType) {
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`/courses/${path}`)} className={`column__item flex-property-set_between ${className}`}>
            <div className={'item__text'}>
                <h2 className={'text__title'}>{title}</h2>
                <p className={'text__time'}>{time}</p>
            </div>
            <div className={'item__img'}>
                <img alt={'Logo'} src={imgUrl}/>
            </div>
        </div>
    )
}

type PropsType = {
    courses_info: InitialStateType
}

export function Main({courses_info}: PropsType) {
    return(
        <div className={'container'}>
            <h1 className={'title'}>Courses</h1>
            <div className={'content flex-property-set_between'}>
                <div className={'content__column'}>
                    <CourseItem path={courses_info.python.main.path} title={courses_info.python.job_name} time={courses_info.python.time} imgUrl={courses_info.python.main_img}/>
                    <CourseItem className={courses_info.java_pro.main.backgroundClass} path={courses_info.java_pro.main.path} title={courses_info.java_pro.job_name} time={courses_info.java_pro.time} imgUrl={courses_info.java_pro.main_img}/>
                    <CourseItem className={courses_info.web.main.backgroundClass} path={courses_info.web.main.path} title={courses_info.web.job_name} time={courses_info.web.time} imgUrl={courses_info.web.main_img}/>
                    <CourseItem className={courses_info.c_plus_plus.main.backgroundClass} path={courses_info.c_plus_plus.main.path} title={courses_info.c_plus_plus.job_name} time={courses_info.c_plus_plus.time} imgUrl={courses_info.c_plus_plus.main_img}/>
                    <CourseItem className={courses_info.python_fullstack.main.backgroundClass} path={courses_info.python_fullstack.main.path} title={courses_info.python_fullstack.job_name} time={courses_info.python_fullstack.time} imgUrl={courses_info.python_fullstack.main_img}/>
                    <CourseItem className={courses_info.android.main.backgroundClass} path={courses_info.android.main.path} title={courses_info.android.job_name} time={courses_info.android.time} imgUrl={courses_info.android.main_img}/>
                    <CourseItem className={courses_info.c_sharp.main.backgroundClass} path={courses_info.c_sharp.main.path} title={courses_info.c_sharp.job_name} time={courses_info.c_sharp.time} imgUrl={courses_info.c_sharp.main_img}/>
                    <CourseItem className={courses_info.ios.main.backgroundClass} path={courses_info.ios.main.path} title={courses_info.ios.job_name} time={courses_info.ios.time} imgUrl={courses_info.ios.main_img}/>
                </div>
                <div className={'content__column'}>
                    <CourseItem className={courses_info.php_fullstack.main.backgroundClass} path={courses_info.php_fullstack.main.path} title={courses_info.php_fullstack.job_name} time={courses_info.php_fullstack.time} imgUrl={courses_info.php_fullstack.main_img}/>
                    <CourseItem className={courses_info.mobile.main.backgroundClass} path={courses_info.mobile.main.path} title={courses_info.mobile.job_name} time={courses_info.mobile.time} imgUrl={courses_info.mobile.main_img}/>
                    <CourseItem className={courses_info.java.main.backgroundClass} path={courses_info.java.main.path} title={courses_info.java.job_name} time={courses_info.java.time} imgUrl={courses_info.java.main_img}/>
                    <CourseItem className={courses_info.frontend_full.main.backgroundClass} path={courses_info.frontend_full.main.path} title={courses_info.frontend_full.job_name} time={courses_info.frontend_full.time} imgUrl={courses_info.frontend_full.main_img}/>
                    <CourseItem className={courses_info.frontend_pro.main.backgroundClass} path={courses_info.frontend_pro.main.path} title={courses_info.frontend_pro.job_name} time={courses_info.frontend_pro.time} imgUrl={courses_info.frontend_pro.main_img}/>
                    <CourseItem className={courses_info.js_fullstack.main.backgroundClass} path={courses_info.js_fullstack.main.path} title={courses_info.js_fullstack.job_name} time={courses_info.js_fullstack.time} imgUrl={courses_info.js_fullstack.main_img}/>
                    <CourseItem className={courses_info.php_pro.main.backgroundClass} path={courses_info.php_pro.main.path} title={courses_info.php_pro.job_name} time={courses_info.php_pro.time} imgUrl={courses_info.php_pro.main_img}/>
                </div>
            </div>
        </div>
    )
}
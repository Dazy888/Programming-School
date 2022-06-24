import {useNavigate} from "react-router-dom"
import {InitialStateType} from "../../Redux/Courses-Reducer/Courses-Reducer"

type CourseItemPropsType = {
    title: string
    time: string
    imgUrl: string
    path: string
    classNames?: Array<string>
}

function CourseItem({title, time, imgUrl, path, classNames = ['']}: CourseItemPropsType) {
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`/courses/${path}`)} className={`column__item flex-property-set_between ${classNames[0]}`}>
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
    console.log(courses_info.java_pro.classNames)

    return(
        <div className={'container'}>
            <h1 className={'title'}>Courses</h1>
            <div className={'content flex-property-set_between'}>
                <div className={'content__column'}>
                    <CourseItem path={courses_info.python.path} title={courses_info.python.job_name} time={courses_info.python.time} imgUrl={courses_info.python.main_img}/>
                    <CourseItem classNames={courses_info.java_pro.classNames} path={courses_info.java_pro.path} title={courses_info.java_pro.job_name} time={courses_info.java_pro.time} imgUrl={courses_info.java_pro.main_img}/>
                    <CourseItem classNames={courses_info.web.classNames} path={courses_info.web.path} title={courses_info.web.job_name} time={courses_info.web.time} imgUrl={courses_info.web.main_img}/>
                    <CourseItem classNames={courses_info.c_plus_plus.classNames} path={courses_info.c_plus_plus.path} title={courses_info.c_plus_plus.job_name} time={courses_info.c_plus_plus.time} imgUrl={courses_info.c_plus_plus.main_img}/>
                    <CourseItem classNames={courses_info.python_fullstack.classNames} path={courses_info.python_fullstack.path} title={courses_info.python_fullstack.job_name} time={courses_info.python_fullstack.time} imgUrl={courses_info.python_fullstack.main_img}/>
                    <CourseItem classNames={courses_info.android.classNames} path={courses_info.android.path} title={courses_info.android.job_name} time={courses_info.android.time} imgUrl={courses_info.android.main_img}/>
                    <CourseItem classNames={courses_info.c_sharp.classNames} path={courses_info.c_sharp.path} title={courses_info.c_sharp.job_name} time={courses_info.c_sharp.time} imgUrl={courses_info.c_sharp.main_img}/>
                    <CourseItem classNames={courses_info.ios.classNames} path={courses_info.ios.path} title={courses_info.ios.job_name} time={courses_info.ios.time} imgUrl={courses_info.ios.main_img}/>
                </div>
                <div className={'content__column'}>
                    <CourseItem classNames={courses_info.php_fullstack.classNames} path={courses_info.php_fullstack.path} title={courses_info.php_fullstack.job_name} time={courses_info.php_fullstack.time} imgUrl={courses_info.php_fullstack.main_img}/>
                    <CourseItem classNames={courses_info.mobile.classNames} path={courses_info.mobile.path} title={courses_info.mobile.job_name} time={courses_info.mobile.time} imgUrl={courses_info.mobile.main_img}/>
                    <CourseItem classNames={courses_info.java.classNames} path={courses_info.java.path} title={courses_info.java.job_name} time={courses_info.java.time} imgUrl={courses_info.java.main_img}/>
                    <CourseItem classNames={courses_info.frontend_full.classNames} path={courses_info.frontend_full.path} title={courses_info.frontend_full.job_name} time={courses_info.frontend_full.time} imgUrl={courses_info.frontend_full.main_img}/>
                    <CourseItem classNames={courses_info.frontend_pro.classNames} path={courses_info.frontend_pro.path} title={courses_info.frontend_pro.job_name} time={courses_info.frontend_pro.time} imgUrl={courses_info.frontend_pro.main_img}/>
                    <CourseItem classNames={courses_info.js_fullstack.classNames} path={courses_info.js_fullstack.path} title={courses_info.js_fullstack.job_name} time={courses_info.js_fullstack.time} imgUrl={courses_info.js_fullstack.main_img}/>
                    <CourseItem classNames={courses_info.php_pro.classNames} path={courses_info.php_pro.path} title={courses_info.php_pro.job_name} time={courses_info.php_pro.time} imgUrl={courses_info.php_pro.main_img}/>
                </div>
            </div>
        </div>
    )
}
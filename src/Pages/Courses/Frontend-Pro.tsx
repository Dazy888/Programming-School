import {CourseHeader} from "./Components/Course-Header"

const titleTxt = "You will start with the basics of layout and JavaScript, and by the end of the course, you will have learned how to create enterprise services. Gain teamwork experience and start your career as a web developer"

export function FrontendPro() {
    return(
        <div className={'course-container'}>
            <CourseHeader companies={'4 100'} salary={'1100'} classNames={['light-green-back', 'light-green-border']} profession={'Frontend-developer PRO'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_98a708fd2012f5033663fece150133eac4387673.webp'} time={'1 year'} projects={'6'}/>
        </div>
    )
}
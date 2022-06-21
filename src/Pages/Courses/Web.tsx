import {CourseHeader} from "./Components/Course-Header"

const titleTxt = "You will learn how to create full-fledged websites and web applications from scratch. Master HTML, CSS, JavaScript and PHP, get familiar with frameworks and become a sought-after web developer. Even if you haven't programmed before."

export function Web() {
    return(
        <div className={'course-container web-course'}>
            <CourseHeader profession={'Web-developer'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_1483b955a743f9098806cbe6c6d78d306a210b65.webp'} time={'2 years'} projects={'6'}/>
        </div>
    )
}
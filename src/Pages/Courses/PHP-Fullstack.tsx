import {CourseHeader} from "./Components/Course-Header"

const titleTxt = "You will learn how to design web pages from scratch, as well as how to program and create turnkey web applications in PHP. You can start a career as a fullstack specialist or reach a new level in web development"

export function PHPFullstack() {
    return(
        <div className={'course-container php-fullstack-course'}>
            <CourseHeader profession={'PHP Fullstack-Developer'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_62f01151670d0e3f00a7099b2501ac2e043a2314.webp'} time={'1 year'} projects={'4'}/>
        </div>
    )
}
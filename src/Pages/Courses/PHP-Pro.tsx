import {CourseHeader} from "./Components/Course-Header"

const titleTxt = "You will learn how to program sites and web applications in PHP from scratch, master the Laravel framework, write cloud storage and work on an online store as a team.You could apply for a junior developer position"

export function PHPPro() {
    return(
        <div className={'course-container php-pro-course'}>
            <CourseHeader profession={'Javascript Fullstack-developer'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_ef69df0ff2b047f7d37fea27a790dd8187e4404a.webp'} time={'1 year'} projects={'3'}/>
        </div>
    )
}
import {CourseHeader} from "./Components/Course-Header"

const titleTxt = "Learn JavaScript, TypeScript, and other trending web application development technologies from scratch. Build a portfolio, learn how to work in a team and start a career as a frontend developer"

export function FrontendFull() {
    return(
        <div className={'course-container frontend-full-course'}>
            <CourseHeader profession={'Frontend-developer from zero to PRO'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_af62204878d4eba3a075419b219ff11849d0bbc3.webp'} time={'2 years'} projects={'7'}/>
        </div>
    )
}
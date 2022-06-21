import {CourseHeader} from "./Components/Course-Header"

const titleTxt = "You will learn how to develop full-fledged websites and web applications in JS from scratch and learn one of the frameworks - Vue, React or Angular. Become a valuable employee for any IT company, understand how to get a promotion, and be able to earn more"

export function JavascriptFullstack() {
    return(
        <div className={'course-container javascript-fullstack-course'}>
            <CourseHeader profession={'Javascript Fullstack-developer'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_9567df25c360d949e492c6afcb047f9878baa2b3.webp'} time={'1 year'} projects={'4'}/>
        </div>
    )
}
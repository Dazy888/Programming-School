import {CourseHeader} from "./Components/Course-Header"

const titleTxt = "You will master a profession in demand and learn how to create applications on Android or iOS, gain skills in developing complex UX / UI solutions and be able to expand the functionality of the product. Our managers will help you choose your specialization"

export function Mobile() {
    return(
        <div className={'course-container mobile-course'}>
            <CourseHeader profession={'Mobile-Developer'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_b21b1ae4f5baf79bc47f29ca1ab1ef7ad0d3b615.webp'} time={'2 years'} projects={'2'}/>
        </div>
    )
}
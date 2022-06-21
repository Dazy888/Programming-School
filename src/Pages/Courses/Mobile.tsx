import {CourseHeader} from "./Components/Course-Header"

const titleTxt = "You will master a profession in demand and learn how to create applications on Android or iOS, gain skills in developing complex UX / UI solutions and be able to expand the functionality of the product. Our managers will help you choose your specialization"
const textAboutJob = "A mobile developer creates applications that we use every day on smartphones, smartwatches and tablets. For example, he writes services for ordering a taxi and food delivery, online banking, applications for booking hotels, selecting airline tickets and listening to music. Such a professional understands the peculiarities of mobile platforms, works in conjunction with UX and UI designers, knows how to test and optimize code for work on different devices"

export function Mobile() {
    return(
        <div className={'course-container'}>
            <CourseHeader text={textAboutJob} companies={'6 000'} salary={'1900'} classNames={['light-pink-back', 'light-pink-border']} profession={'Mobile-Developer'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_b21b1ae4f5baf79bc47f29ca1ab1ef7ad0d3b615.webp'} time={'2 years'} projects={'2'}/>
        </div>
    )
}
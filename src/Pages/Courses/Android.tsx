import {CourseHeader} from "./Components/Course-Header"

const titleTxt = "According to Google, 3 billion devices run on Android. TVs, smartphones and smartwatches are packed with useful apps that we use to watch TV shows, pay for purchases, communicate and order food. Now you can create such services.You'll add up to five apps to your portfolio, gain teamwork experience, and become an Android developer. And the Career Center will help you find a job already during the course"
const textAboutJob = "Junior Android developers earn an average of 400 usd, middles - 2000 usd, and seniors and leads can count on salaries from 3000 usd"

export function Android() {
    return(
        <div className={'course-container'}>
            <CourseHeader text={textAboutJob} salary={'1500'} companies={'3 867'} classNames={['light-orange-back', 'light-orange-border']} profession={'Android-Developer'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_763111395fcf224a8e694cdfbf3bb3d198914536.webp'} time={'22 months'} projects={'2'}/>
        </div>
    )
}
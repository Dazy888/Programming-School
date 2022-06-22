import {CourseHeader} from "./Components/Course-Header"
import {ForWho} from "./Components/For-Who";

const titleTxt = "According to Google, 3 billion devices run on Android. TVs, smartphones and smartwatches are packed with useful apps that we use to watch TV shows, pay for purchases, communicate and order food. Now you can create such services.You'll add up to five apps to your portfolio, gain teamwork experience, and become an Android developer. And the Career Center will help you find a job already during the course"
const textAboutJob = "Junior Android developers earn an average of 400 usd, middles - 2000 usd, and seniors and leads can count on salaries from 3000 usd"

const forWhoPhotographs = [
    'https://248006.selcdn.ru/LandGen/phone_21e32f33213998f2b4586418fa6658202d2fecf3.png',
    'https://248006.selcdn.ru/LandGen/phone_7246954690f98ed86dcd2a2aeb73599726eeef4a.png',
    'https://248006.selcdn.ru/LandGen/phone_ea200f53b190b7e75a1d4ca5cb054c4461588d9a.png'
]

const forWhoTexts = [
    'You will go from a beginner to a confident Android developer without stress: learn to code in Kotlin from scratch, write your first applications for your portfolio and be able to get a job right after the course',
    'In practice, solidify the basics and delve into more complex topics. Learn how to create and test large applications according to technical specifications from a real customer',
    'Learn about the features of developing and testing mobile software. Get system knowledge and portfolio, you can find a job as an Android developer and increase your income'
]

export function Android() {
    return(
        <div className={'course-container'}>
            <CourseHeader text={textAboutJob} salary={'1500'} companies={'3 867'} classNames={['light-orange-back', 'light-orange-border']} profession={'Android-Developer'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_763111395fcf224a8e694cdfbf3bb3d198914536.webp'} time={'22 months'} projects={'2'}/>
            <ForWho photographs={forWhoPhotographs} titles={['Beginners in programming', 'Beginning developers', 'Programmers who want to change direction']} texts={forWhoTexts}/>
        </div>
    )
}
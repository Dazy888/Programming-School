import {CourseHeader} from "./Components/Course-Header";

const titleTxt = 'Python is used to write web applications and neural networks, conduct scientific calculations and automate processes. The language is easy to learn, even if you have never programmed. On the course, you will create a Telegram bot, a full-fledged store and a portfolio task book, and the Career Center will help you find a job as a Python developer'

export function Python() {
    return(
        <div className={'course-container python-course'}>
            <CourseHeader profession={'Python-developer'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_4589beaf332198133164e04e0fb855c2c1368858.webp'} time={'1 year'} projects={'3'}/>
        </div>
    )
}
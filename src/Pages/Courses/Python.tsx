import {CourseHeader} from "./Components/Course-Header";
import {ForWho} from "./Components/For-Who";

const titleTxt = 'Python is used to write web applications and neural networks, conduct scientific calculations and automate processes. The language is easy to learn, even if you have never programmed. On the course, you will create a Telegram bot, a full-fledged store and a portfolio task book, and the Career Center will help you find a job as a Python developer'
const textAboutJob = "A good developer doesn't stop learning after courses. Programming languages are frequently updated with new frameworks and features.In order to keep your skills in demand in the labor market, in 2022 we updated the course and added relevant materials.Access to online classes is open forever - you can learn new things at any time"

const forWhoPhotographs = [
    'https://248006.selcdn.ru/LandGen/phone_471f5ca3cdee26f3899e1a97f1b69a32c2053785.png',
    'https://248006.selcdn.ru/LandGen/phone_4d557d9c97e5a6e31a1a72d88cda2d659b21abe1.png'
]

const forWhoTexts = [
    "Those who have just decided to become a programmer, but have not chosen in which area they are going to work. Python is a universal language",
    'For those who are already learning Python on their own or from textbooks. But there is no one to ask a question and ask for help'
]

export function Python() {
    return(
        <div className={'course-container'}>
            <CourseHeader text={textAboutJob} companies={'6 342'} salary={'1200'} profession={'Python-developer'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_4589beaf332198133164e04e0fb855c2c1368858.webp'} time={'1 year'} projects={'3'}/>
            <ForWho photographs={forWhoPhotographs} titles={['Newbies in code']} texts={forWhoTexts}/>
        </div>
    )
}
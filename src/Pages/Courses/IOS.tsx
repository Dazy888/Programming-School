import {CourseHeader} from "./Components/Course-Header"
import {ForWho} from "./Components/For-Who";

const titleTxt = "An IOS developer creates applications for Apple devices — online banks, navigators, fitness trackers, and other useful services. He programs logic in Swift and designs interfaces, tests code, and uploads projects to the App Store.On the course, you will master Swift from scratch, write a news application, take part in the team development of an analogue of Yandex:GO and get help in finding a job"
const textAboutJob = "Business lacks great programmers, so companies offer high salaries and remote work.Junior iOS developers earn an average of 400 usd, middles - 1500 usd, and seniors and leads can count on salaries from 2300 usd"

const forWhoPhotographs = [
    'https://248006.selcdn.ru/LandGen/phone_27077d4ce08bed215d90e1d22ef764aea176ff9d.png',
    'https://248006.selcdn.ru/LandGen/phone_b8dff30ace11f525a49f10951c610d8e1f7c3613.png',
    'https://248006.selcdn.ru/LandGen/phone_3162715cbab5423a858090e2a5b5e1521ddc289c.png'
]

const forWhoTexts = [
    "The course will allow you to master the profession of an iOS developer from scratch. You will write your first portfolio applications, and after graduation we will help you with employment",
    'You will receive the systematic knowledge that is necessary for a successful career as an iOS developer',
    'Get to know the specifics of iOS development better, hone the necessary skills, find a profitable and interesting job'
]

export function IOS() {
    return(
        <div className={'course-container'}>
            <CourseHeader text={textAboutJob} companies={'2 768'} salary={'2000'} classNames={['blue-back', 'blue-border']} profession={'IOS-Developer'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_b0d52a8c5100ff4bb126ca5fc03cd1da32805b9b.webp'} time={'1 year'} projects={'3'}/>
            <ForWho photographs={forWhoPhotographs} titles={['Beginners in programming', 'Beginning developers', 'Programmers who want to change specialization']} texts={forWhoTexts} />
        </div>
    )
}
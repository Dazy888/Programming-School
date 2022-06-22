import {CourseHeader} from "./Components/Course-Header"
import {ForWho} from "./Components/For-Who";

const titleTxt = "You will learn how to create full-fledged websites and web applications from scratch. Master HTML, CSS, JavaScript and PHP, get familiar with frameworks and become a sought-after web developer. Even if you haven't programmed before."
const textAboutJob = "A web developer creates websites, services and applications that we use every day. He develops online stores, online banks, search engines, maps and email clients. A web developer designs the appearance of the site - the frontend and programs the service part - the backend.Demand for web developers remains high - business profit directly depends on how convenient it is for customers to use the company's website"

const forWhoPhotographs = [
    'https://248006.selcdn.ru/LandGen/phone_229c6152337eeea798e1bf5b4a10ad9e9f49bb53.png',
    'https://248006.selcdn.ru/LandGen/phone_7f3b1a0a5d3c4980bb91dd4dc88c4810fbd342ba.png',
    'https://248006.selcdn.ru/LandGen/phone_0627a8ae28c8e2540cd2c941653d2ee50b135da9.png'
]

const forWhoTexts = [
    'Learn the basics of JavaScript and PHP programming from scratch. Learn how to design websites in HTML and CSS. Create your first portfolio projects',
    'Level up with the most popular programming languages Learn Vue, React or Angular frameworks and expand your coding skills',
    'Learn to program in JavaScript and PHP, you will create projects on the Laravel framework. You can change direction and become a popular web developer'
]

export function Web() {
    return(
        <div className={'course-container'}>
            <CourseHeader text={textAboutJob} salary={'800'} companies={'3 160'} classNames={['purple-back', 'purple-border']} profession={'Web-developer'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_1483b955a743f9098806cbe6c6d78d306a210b65.webp'} time={'2 years'} projects={'6'}/>
            <ForWho photographs={forWhoPhotographs} titles={['Beginners in web development', 'Beginning developers', 'IT specialists']} texts={forWhoTexts} />
        </div>
    )
}
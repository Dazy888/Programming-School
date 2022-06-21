import {CourseHeader} from "./Components/Course-Header"

const titleTxt = "You will learn how to create full-fledged websites and web applications from scratch. Master HTML, CSS, JavaScript and PHP, get familiar with frameworks and become a sought-after web developer. Even if you haven't programmed before."
const textAboutJob = "A web developer creates websites, services and applications that we use every day. He develops online stores, online banks, search engines, maps and email clients. A web developer designs the appearance of the site - the frontend and programs the service part - the backend.Demand for web developers remains high - business profit directly depends on how convenient it is for customers to use the company's website"

export function Web() {
    return(
        <div className={'course-container'}>
            <CourseHeader text={textAboutJob} salary={'800'} companies={'3 160'} classNames={['purple-back', 'purple-border']} profession={'Web-developer'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_1483b955a743f9098806cbe6c6d78d306a210b65.webp'} time={'2 years'} projects={'6'}/>
        </div>
    )
}
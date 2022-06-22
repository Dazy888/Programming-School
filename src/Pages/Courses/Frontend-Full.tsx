import {CourseHeader} from "./Components/Course-Header"
import {ForWho} from "./Components/For-Who";

const titleTxt = "Learn JavaScript, TypeScript, and other trending web application development technologies from scratch. Build a portfolio, learn how to work in a team and start a career as a frontend developer"
const textAboutJob = "A frontend developer creates the visible part of websites and web applications using markup and programming languages, frameworks, and other tools. He develops interfaces for complex services - task schedulers, instant messengers, online stores. Without a frontend developer, there will be no likes under posts in social networks, a basket of goods, comments, and convenient navigation through online maps.Frontend developers are needed by both large corporations and startups. And if you don’t want to work for a company, freelancing options are always available"

const forWhoPhotographs = [
    'https://248006.selcdn.ru/LandGen/phone_47154b3bc22aa560051467b5b501f08d98079468.png',
    'https://248006.selcdn.ru/LandGen/phone_174ce7a1726098665c79bdd21ae8c7d07d97b9d1.png'
]

const forWhoTexts = [
    'You will go from a person far from IT to a confident web developer with teamwork skills. You can start a career in a promising IT studio',
    'Improve your layout skills, learn how to work with frameworks and create desktop applications in JS. Become a sought-after web developer and understand how to develop in the profession',
]

export function FrontendFull() {
    return(
        <div className={'course-container'}>
            <CourseHeader text={textAboutJob} salary={'1000'} companies={'6 660'} classNames={['grey-back', 'grey-border']} profession={'Frontend-developer from zero to PRO'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_af62204878d4eba3a075419b219ff11849d0bbc3.webp'} time={'2 years'} projects={'7'}/>
            <ForWho photographs={forWhoPhotographs} titles={['For absolute beginners', 'Beginning programmers']} texts={forWhoTexts}/>
        </div>
    )
}
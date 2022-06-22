import {CourseHeader} from "./Components/Course-Header"
import {ForWho} from "./Components/For-Who";

const titleTxt = "You will learn how to design web pages from scratch, as well as how to program and create turnkey web applications in PHP. You can start a career as a fullstack specialist or reach a new level in web development"

const forWhoPhotographs = [
    'https://248006.selcdn.ru/LandGen/phone_add8ef2702c18d96050f6a29be5ec4e12863862715816824596821.png',
    'https://248006.selcdn.ru/LandGen/phone_5cbc8afcd5fd843306b0738e58153dc108c6874c15816824765285.png',
    'https://248006.selcdn.ru/LandGen/phone_ea2850648ba9f13c89f1fd6a30086b3aacd8691d15816824940198.png'
]

const forWhoTexts = [
    "Learn the basic principles of programming and overcome the first difficulties with a personal mentor",
    'Master backend, frontend and other stacks. Learn PHP and learn how to work with application programming interface',
    'You will be able to create projects in JavaScript and its frameworks, program in PHP and make up. Learn to work in a team and be a versatile developer'
]

export function PHPFullstack() {
    return(
        <div className={'course-container'}>
            <CourseHeader companies={'3 235'} salary={'1400'} classNames={['light-dark-blue-back', 'light-dark-blue-border']} profession={'PHP Fullstack-Developer'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_62f01151670d0e3f00a7099b2501ac2e043a2314.webp'} time={'1 year'} projects={'4'}/>
            <ForWho photographs={forWhoPhotographs} titles={['For those new to web development', 'Beginning developers', 'IT specialists']} texts={forWhoTexts}/>
        </div>
    )
}
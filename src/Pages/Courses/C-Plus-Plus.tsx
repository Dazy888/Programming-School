import {CourseHeader} from "./Components/Course-Header"
import {ForWho} from "./Components/For-Who";

const titleTxt = "C++ programmers create complex programs and services. They develop high-load network applications, games, graphics engines, components for operating systems and hardware. Windows, Linux and macOS, Android, Chrome, Counter-Strike, StarCraft and Diablo are written in this language.You will master the legendary programming language from scratch: write a search engine, your own browser, and gain teamwork skills"
const textAboutJob = "C++ developers work in large IT companies, game development, web development, create corporate and banking applications, design operating systems and software for robots"

const forWhoPhotographs = [
    'https://248006.selcdn.ru/LandGen/phone_73434525171cc8231ff2b24ddfa2c05fa84f74dc15789991354209.png',
    'https://248006.selcdn.ru/LandGen/phone_3e46222e2f153a264c5c16f81c19e5e68a28a02f1578999111297.png'
]

const forWhoTexts = [
    'Learn the basic principles of C++ programming. Write your first programs, build a portfolio and start a career in the direction you like',
    'Get familiar with C++ syntax and learn the in-demand language. Write a microservice, make a game for UE4 and be able to apply for the position of a middle developer in a game dev or IT company',
]

export function CPlusPlus() {
    return(
        <div className={'course-container'}>
            <CourseHeader text={textAboutJob} companies={'4 018'} salary={'3500'} classNames={['light-blue-back','light-blue-border']} profession={'C++ developer'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_7d5b8e852952b4fc68ca058c53a3b9570fd4f3d7.webp'} time={'1 year'} projects={'2'}/>
            <ForWho photographs={forWhoPhotographs} titles={['For those who want to become a programmer', 'Developers in other languages']} texts={forWhoTexts}/>
        </div>
    )
}
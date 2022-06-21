import {CourseHeader} from "./Components/Course-Header"

const titleTxt = "C++ programmers create complex programs and services. They develop high-load network applications, games, graphics engines, components for operating systems and hardware. Windows, Linux and macOS, Android, Chrome, Counter-Strike, StarCraft and Diablo are written in this language.You will master the legendary programming language from scratch: write a search engine, your own browser, and gain teamwork skills"

export function CPlusPlus() {
    return(
        <div className={'course-container cPlusPlus-course'}>
            <CourseHeader profession={'C++ developer'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_7d5b8e852952b4fc68ca058c53a3b9570fd4f3d7.webp'} time={'1 year'} projects={'2'}/>
        </div>
    )
}
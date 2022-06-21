import {CourseHeader} from "./Components/Course-Header"

const titleTxt = "Do you want to create a website or a game? Or write a mobile application? Or maybe you dream of programming multi-threaded services? Then you should definitely learn C#. The language has absorbed the best of Java and C++ and is used in all areas: from web development to game development.Learn C# from scratch to Pro level, take part in the team development of the messenger and become a cool programmer in the in-demand language"

export function CSharp() {
    return(
        <div className={'course-container cSharp-course'}>
            <CourseHeader profession={'C# Developer'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_9d6b6453a2e5702f3848771f0bb79eda7566a530.webp'} time={'1 year'} projects={'2'}/>
        </div>
    )
}
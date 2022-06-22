import {CourseHeader} from "./Components/Course-Header"
import {ForWho} from "./Components/For-Who";

const titleTxt = "Do you want to create a website or a game? Or write a mobile application? Or maybe you dream of programming multi-threaded services? Then you should definitely learn C#. The language has absorbed the best of Java and C++ and is used in all areas: from web development to game development.Learn C# from scratch to Pro level, take part in the team development of the messenger and become a cool programmer in the in-demand language"
const textAboutJob = "C# developers create backends for ASP.NET websites, Unity video games, Xamarin mobile apps, high-load desktop programs such as CRM systems, and design smart chatbots. Microsoft maintains and develops the language to this day.A beginner can master C# in a few months. After studying, you will be able to find yourself in web development, you will write corporate software for banks and large businesses. Or master Unity and create indie games in the studio"

const forWhoPhotographs = [
    'https://248006.selcdn.ru/LandGen/phone_4c5e5273443bf1d3ac90f7fc2eb999c3a3c350f515792575451483.png',
    'https://248006.selcdn.ru/LandGen/phone_54615e41797b0eb62492f4d51492aed3244b4c471579257575757.png'
]

const forWhoTexts = [
    'A systematic approach will help you learn to program from scratch and learn the topic in theory and practice',
    'Using the .NET platform, you can develop web resources, applications and games of any complexity. In practice, master all the subtleties of programming in C #',
]

export function CSharp() {
    return(
        <div className={'course-container'}>
            <CourseHeader companies={'5 206'} salary={'900'} text={textAboutJob} classNames={['blue-back', 'blue-border']} profession={'C# Developer'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_9d6b6453a2e5702f3848771f0bb79eda7566a530.webp'} time={'1 year'} projects={'2'}/>
            <ForWho photographs={forWhoPhotographs} titles={['For beginners', 'Practicing programmers']} texts={forWhoTexts} />
        </div>
    )
}
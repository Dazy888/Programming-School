import {CourseHeader} from "./Components/Course-Header"
import {ForWho} from "./Components/For-Who";

const titleTxt = 'You will master a popular programming language from scratch, learn how to create high-quality applications for different platforms, and become a valuable middle-level Java specialist'

const forWhoPhotographs = [
    'https://248006.selcdn.ru/LandGen/phone_8842a60ff215e4738db6796099e7b2b688439fb215845377455302.png',
    'https://248006.selcdn.ru/LandGen/phone_5c55c73f3bf2c300b90f540a7ff6406c99c172e315845377647246.png',
    'https://248006.selcdn.ru/LandGen/phone_757b950c687cb8d1e31c6d93c611bf42fe69ddc915845377824032.png'
]

const forWhoTexts = [
    "You will understand how to create web applications, explore the possibilities of Java, develop the first projects for real customers and build a portfolio",
    'You will understand the features and syntax of Java, master a new popular language and be able to change the direction of work to work on interesting projects and earn more',
    'Learn how to structure and debug your code, work with frameworks and databases, improve your level and be able to take on complex expensive projects in Java'
]

export function JavaPro() {
    return(
        <div className={'course-container'}>
            <CourseHeader companies={'3 000'} salary={'1900'} classNames={['light-purple-back', 'light-purple-border']} profession={'Java-developer PRO'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_57c9d80b2b75745579f68b99bdd0e2c0516a955f.webp'} time={'2 years'} projects={'4'}/>
            <ForWho photographs={forWhoPhotographs} titles={['For those who want to get started in Java development', 'Programmers from other fields', 'Beginners in Java']} texts={forWhoTexts}/>
        </div>
    )
}
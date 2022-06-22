import {CourseHeader} from "./Components/Course-Header"
import {ForWho} from "./Components/For-Who";

const titleTxt = "You will start with the basics of layout and JavaScript, and by the end of the course, you will have learned how to create enterprise services. Gain teamwork experience and start your career as a web developer"

const forWhoPhotographs = [
    'https://248006.selcdn.ru/LandGen/phone_8324597e2efaf50fd1f52ad8ae50538cf7f0cc7b15821163457558.png',
    'https://248006.selcdn.ru/LandGen/phone_f6137b382419ffb2e58e12fbba50a78ea600e86e15821163808598.png',
    'https://248006.selcdn.ru/LandGen/phone_227ecf445249bb751716bda2dae6c03be894783515821163999428.png'
]

const forWhoTexts = [
     "You don't need to be good at math or have programming experience. Step by step you will learn how to develop websites. You will start with simple landing pages, and by the end of the training you will know frameworks, create complex enterprise services and work in a team",
    'Improve your layout skills, learn how to work with frameworks and create desktop applications in JS. Become a sought-after web developer and understand how to develop in the profession',
    'Turn programming from a hobby into a profitable profession. Master advanced layout skills, learn JavaScript and frameworks in depth. Close gaps in knowledge and be able to apply for the position of a middle-developer in a large company'
]

export function FrontendPro() {
    return(
        <div className={'course-container'}>
            <CourseHeader companies={'4 100'} salary={'1100'} classNames={['light-green-back', 'light-green-border']} profession={'Frontend-developer PRO'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_98a708fd2012f5033663fece150133eac4387673.webp'} time={'1 year'} projects={'6'}/>
            <ForWho photographs={forWhoPhotographs} titles={['For beginners', 'Beginning programmers', 'Freelancers with no experience in IT']} texts={forWhoTexts}/>
        </div>
    )
}
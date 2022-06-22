import {CourseHeader} from "./Components/Course-Header"
import {ForWho} from "./Components/For-Who";

const titleTxt = "You will be able to actively participate in all stages of the development of sites and web interfaces - from working with design layouts to programming and configuring servers. Get comprehensive knowledge in web development and start earning more"

const forWhoPhotographs = [
    'https://248006.selcdn.ru/LandGen/phone_a5641cfe6d40558046dc9d3de8bdc54a07c0a9fc.png',
    'https://248006.selcdn.ru/LandGen/phone_8183cf0898f74c94cd37425aba13d98e180b5e2a.png',
    'https://248006.selcdn.ru/LandGen/phone_b7d3c38e3dc9f8fb00449084468c15465fbff35c.png'
]

const forWhoTexts = [
    "You will master a sought-after profession from scratch, learn how to program in Python and JavaScript, create websites and work with databases. You will be able to write the backend and frontend part yourself",
    'If you already have basic knowledge of frontend or backend, then the training will help you master the full cycle of product development. You will become a universal specialist and increase your income',
    'You will increase your chances of getting a high-paying job, get advice from experienced teachers and learn how to develop as a fullstack programmer and work on complex and expensive projects'
]

export function PythonFullstack() {
    return(
        <div className={'course-container'}>
            <CourseHeader companies={'4 231'} salary={'1400'} classNames={['pink-back', 'pink-border']} profession={'Python Fullstack-Developer'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_43712003895f94c163a288e6e9e0e00bbf671110.webp'} time={'1 year'} projects={'4'}/>
            <ForWho photographs={forWhoPhotographs} titles={['Beginners in programming', 'Beginning developers', 'Experienced programmers']} texts={forWhoTexts}/>
        </div>
    )
}
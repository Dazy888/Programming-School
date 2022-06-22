import {CourseHeader} from "./Components/Course-Header"
import {ForWho} from "./Components/For-Who";

const titleTxt = "You will master a profession in demand and learn how to create applications on Android or iOS, gain skills in developing complex UX / UI solutions and be able to expand the functionality of the product. Our managers will help you choose your specialization"
const textAboutJob = "A mobile developer creates applications that we use every day on smartphones, smartwatches and tablets. For example, he writes services for ordering a taxi and food delivery, online banking, applications for booking hotels, selecting airline tickets and listening to music. Such a professional understands the peculiarities of mobile platforms, works in conjunction with UX and UI designers, knows how to test and optimize code for work on different devices"

const forWhoPhotographs = [
    'https://248006.selcdn.ru/LandGen/phone_24a404e808fbfd0cf8466bfcb32d18f4502e5d8d.png',
    'https://248006.selcdn.ru/LandGen/phone_68b506bc505531a0702e65e3475a69c37a462f65.png',
    'https://248006.selcdn.ru/LandGen/phone_2e532061dfe18df2dd8f19041d43b9d8e085f7ef.png'
]

const forWhoTexts = [
    "Master programming in Swift or Kotlin, learn how to design interfaces and test applications. Get a sought-after profession: you will work in a studio or in a product team",
    'Fix the basics and go through more advanced topics. Learn how to create and test mobile applications according to technical specifications from a real customer',
    'Learn about the features of designing, developing and testing mobile applications. Add projects to your portfolio, add skills to your resume, change jobs or move up the career ladder'
]

export function Mobile() {
    return(
        <div className={'course-container'}>
            <CourseHeader text={textAboutJob} companies={'6 000'} salary={'1900'} classNames={['light-pink-back', 'light-pink-border']} profession={'Mobile-Developer'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_b21b1ae4f5baf79bc47f29ca1ab1ef7ad0d3b615.webp'} time={'2 years'} projects={'2'}/>
            <ForWho photographs={forWhoPhotographs} titles={['Beginners in programming', 'Beginning mobile developers', 'Developers from other fields']} texts={forWhoTexts}/>
        </div>
    )
}
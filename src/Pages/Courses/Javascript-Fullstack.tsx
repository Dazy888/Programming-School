import {CourseHeader} from "./Components/Course-Header"
import {ForWho} from "./Components/For-Who";

const titleTxt = "You will learn how to develop full-fledged websites and web applications in JS from scratch and learn one of the frameworks - Vue, React or Angular. Become a valuable employee for any IT company, understand how to get a promotion, and be able to earn more"

const forWhoPhotographs = [
    'https://248006.selcdn.ru/LandGen/phone_93b2747395829db9f89d3c9073d02c35a68e1df2.png',
    'https://248006.selcdn.ru/LandGen/phone_c22d4893414c49389d082537f881ae623775de78.png',
    'https://248006.selcdn.ru/LandGen/phone_6af395b8a94ab67c78231fa5af4f5faac40babae.png'
]

const forWhoTexts = [
    "You will learn how to make up, code in JavaScript and develop full-fledged websites from scratch. Master the full cycle of creating web projects and be able to get a job in an IT company",
    'You will get acquainted with Node.js and frameworks and deepen your knowledge. You can move to the position of a fullstack developer in a web studio or create turnkey websites on freelance',
    'You will learn Vue.js, React.js or Angular and be able to create complex interactive interfaces. Get soft skills for professional development and understand where to go next'
]

export function JavascriptFullstack() {
    return(
        <div className={'course-container'}>
            <CourseHeader companies={'6 000'} salary={'1400'} classNames={['yellow-back', 'yellow-border']} profession={'Javascript Fullstack-developer'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_9567df25c360d949e492c6afcb047f9878baa2b3.webp'} time={'1 year'} projects={'4'}/>
            <ForWho photographs={forWhoPhotographs} titles={['Those who want to start a career as a programmer', 'Beginning developers', 'Experienced professionals']} texts={forWhoTexts}/>
        </div>
    )
}
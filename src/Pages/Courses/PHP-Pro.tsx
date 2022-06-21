import {CourseHeader} from "./Components/Course-Header"

const titleTxt = "You will learn how to program sites and web applications in PHP from scratch, master the Laravel framework, write cloud storage and work on an online store as a team.You could apply for a junior developer position"
const textAboutJob = "PHP is one of the ten most popular programming languages in the TIOBE ranking. Most CMS are written on it, including WordPress, which powers 65% of all sites in the world. PHP under the hood of Wikipedia, VKontakte, Facebook* and YouTube. Developers have been developing the language for over 25 years and introducing new features with each version.To keep old projects running and write web applications from scratch, companies hire PHP programmers"

export function PHPPro() {
    return(
        <div className={'course-container'}>
            <CourseHeader text={textAboutJob} companies={'2 837'} salary={'1400'} classNames={['light-yellow-back', 'light-yellow-border']} profession={'Javascript Fullstack-developer'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_ef69df0ff2b047f7d37fea27a790dd8187e4404a.webp'} time={'1 year'} projects={'3'}/>
        </div>
    )
}
import {CourseHeader} from "./Components/Course-Header"

const titleTxt = "Learn the popular Java programming language from scratch. Become a sought-after specialist in 9 months, even if you have never programmed before"

export function Java() {
    return(
        <div className={'course-container'}>
            <CourseHeader companies={'3 000'} salary={'1900'} classNames={['orange-back', 'orange-border']} profession={'Java-Developer'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_477ae814606ca5e5256c683921f40d2d7f29bad4.webp'} time={'9 months'} projects={'2'}/>
        </div>
    )
}
import {CourseHeader} from "./Components/Course-Header"
import {ForWho} from "./Components/For-Who";

const titleTxt = "Learn the popular Java programming language from scratch. Become a sought-after specialist in 9 months, even if you have never programmed before"

const forWhoPhotographs = [
    'https://248006.selcdn.ru/LandGen/phone_eda894e08bd420dceebe9236359421172560b8b0.png',
    'https://248006.selcdn.ru/LandGen/phone_61edcc5c3bc4f8c0db7805ac7c3cfdb91f618a02.png',
]

const forWhoTexts = [
    'Perhaps you already have basic skills and understanding of programming and apply this knowledge in your projects. Our course will give you an in-depth knowledge of the universal Java language, and you will begin to properly structure the code and follow everyone\'s "favorite" syntax to create outstanding projects',
    'If you are attracted by modern technologies and high salaries in the field of IT, then this course is definitely for you. You will learn how to write code, learn that the legend that a programmer must be perfect in mathematics is a fiction, begin to think critically and be able to code in the most popular language in the world',
]

export function Java() {
    return(
        <div className={'course-container'}>
            <CourseHeader companies={'3 000'} salary={'1900'} classNames={['orange-back', 'orange-border']} profession={'Java-Developer'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_477ae814606ca5e5256c683921f40d2d7f29bad4.webp'} time={'9 months'} projects={'2'}/>
            <ForWho photographs={forWhoPhotographs} titles={['Beginning programmers', 'Beginners']} texts={forWhoTexts}/>
        </div>
    )
}
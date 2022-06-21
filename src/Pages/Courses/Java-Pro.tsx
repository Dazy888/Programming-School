import {CourseHeader} from "./Components/Course-Header"

const titleTxt = 'You will master a popular programming language from scratch, learn how to create high-quality applications for different platforms, and become a valuable middle-level Java specialist'

export function JavaPro() {
    return(
        <div className={'course-container'}>
            <CourseHeader companies={'3 000'} salary={'1900'} classNames={['light-purple-back', 'light-purple-border']} profession={'Java-developer PRO'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_57c9d80b2b75745579f68b99bdd0e2c0516a955f.webp'} time={'2 years'} projects={'4'}/>
        </div>
    )
}
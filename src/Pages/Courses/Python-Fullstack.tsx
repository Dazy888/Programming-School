import {CourseHeader} from "./Components/Course-Header"

const titleTxt = "You will be able to actively participate in all stages of the development of sites and web interfaces - from working with design layouts to programming and configuring servers. Get comprehensive knowledge in web development and start earning more"

export function PythonFullstack() {
    return(
        <div className={'course-container'}>
            <CourseHeader companies={'4 231'} salary={'1400'} classNames={['pink-back', 'pink-border']} profession={'Python Fullstack-Developer'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_43712003895f94c163a288e6e9e0e00bbf671110.webp'} time={'1 year'} projects={'4'}/>
        </div>
    )
}
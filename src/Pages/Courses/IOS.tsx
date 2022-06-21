import {CourseHeader} from "./Components/Course-Header"

const titleTxt = "An IOS developer creates applications for Apple devices — online banks, navigators, fitness trackers, and other useful services. He programs logic in Swift and designs interfaces, tests code, and uploads projects to the App Store.On the course, you will master Swift from scratch, write a news application, take part in the team development of an analogue of Yandex:GO and get help in finding a job"

export function IOS() {
    return(
        <div className={'course-container ios-course'}>
            <CourseHeader profession={'IOS-Developer'} titleTxt={titleTxt} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_b0d52a8c5100ff4bb126ca5fc03cd1da32805b9b.webp'} time={'1 year'} projects={'3'}/>
        </div>
    )
}
import {AndroidCoursePropsType} from "./Git"
import {CourseTitle} from "../Course-Title";

export function Testing({text}: AndroidCoursePropsType) {
    return(
        <div className={'courses__item reset-height_big'}>
            <CourseTitle title={'Manual testing of mobile applications'} isButton={true}/>
            {text ? <p className={'text'}>{text}</p> : null}
            <ul className={'item__list'}>
                <li className={'text'}>Learn how to check Android applications for errors, write bug reports</li>
                <li className={'text'}>General familiarity with the topic</li>
                <li className={'text'}>Orientation and Screens</li>
                <li className={'text'}>Emulators and Simulators</li>
                <li className={'text'}>Application building and advanced features of Android Studio and Xcode</li>
                <li className={'text'}>GPS and battery</li>
                <li className={'text'}>Connection</li>
                <li className={'text'}>Screenshots and logs</li>
                <li className={'text'}>Information about the graduation project</li>
            </ul>
        </div>
    )
}
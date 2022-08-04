import {AndroidCoursePropsType} from "./Git"
import {CourseTitle} from "../Course-Title"

export function Career({text}: AndroidCoursePropsType) {
    return(
        <div className={'courses__item'}>
            <CourseTitle title={'Career and development of a programmer'} isButton={true}/>
            {text ? <p className={'text'}>{text}</p> : null}
            <div className={'item__txt'}>
                <ul className={'item__list'}>
                    <li className={'text'}>What does an employer need?</li>
                    <li className={'text'}>How to create a resume and apply for a job</li>
                    <li className={'text'}>How to succeed in an interview</li>
                    <li className={'text'}>How to pass the probationary period</li>
                </ul>
            </div>
        </div>
    )
}
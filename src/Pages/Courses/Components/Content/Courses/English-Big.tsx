import {AndroidCoursePropsType} from "./Git"
import {CourseTitle} from "../Course-Title"

export function EnglishBig({text}: AndroidCoursePropsType) {
    return(
        <div className={'courses__item'}>
            <CourseTitle title={'English for IT professionals'} isButton={true}/>
            {text ? <p className={'text'}>{text}</p> : null}
            <ul className={'item__list'}>
                <li className={'text'}>IT Resume and CV: Writing a resume in English</li>
                <li className={'text'}>Job interview: questions and answers: We pass the interview in English</li>
                <li className={'text'}>Teamwork: We talk about teamwork and processes in English</li>
                <li className={'text'}>Workplace communication: English for communication</li>
                <li className={'text'}>Business letter: We correspond in English</li>
                <li className={'text'}>Software development: We analyze all stages of the software life cycle in English</li>
                <li className={'text'}>System concept development and SRS</li>
                <li className={'text'}>Design: Talking about basic design concepts</li>
                <li className={'text'}>Development and Testing: Understanding key terms used in development and testing</li>
                <li className={'text'}>Deployment and Maintenance: Discussing typical deployment and maintenance steps</li>
            </ul>
        </div>
    )
}
import {CourseTitle} from "../Course-Title"

export function EnglishSmall() {
    return(
        <div className={'courses__item'}>
            <CourseTitle title={'English for IT professionals'} isButton={true}/>
            <ul className={'item__list'}>
                <li className={'text'}>IT Resume and CV</li>
                <li className={'text'}>Job interview: questions and answers</li>
                <li className={'text'}>Teamwork</li>
                <li className={'text'}>Workplace communication</li>
                <li className={'text'}>Business letter</li>
                <li className={'text'}>Software development</li>
                <li className={'text'}>System concept development and SRS</li>
                <li className={'text'}>Design</li>
                <li className={'text'}>Development and Testing</li>
                <li className={'text'}>Deployment and Maintenance</li>
            </ul>
        </div>
    )
}
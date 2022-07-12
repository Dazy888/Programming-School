import {CourseTitle} from "../Course-Title"

export function Knowledge() {
    return(
        <div className={'courses__item'}>
            <CourseTitle title={'Universal programmer knowledge'} isButton={true}/>
            <ul className={'item__list'}>
                <li className={'text'}>How to become an excellent programmer</li>
                <li className={'text'}>How to search for development orders</li>
                <li className={'text'}>Developer's personal brand</li>
                <li className={'text'}>Photoshop for the programmer</li>
                <li className={'text'}>Layout of email newsletters. Tips on real examples</li>
                <li className={'text'}>The state of soft skills</li>
                <li className={'text'}>How we created a development map for developers</li>
                <li className={'text'}>How to work effectively with mail</li>
                <li className={'text'}>Increasing your efficiency</li>
                <li className={'text'}>Controversy over the first programming language</li>
                <li className={'text'}>Self-development</li>
                <li className={'text'}>Data-driven approach to productivity - insights from the data of a million people</li>
            </ul>
        </div>
    )
}
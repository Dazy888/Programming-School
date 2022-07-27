import {ReactFramework} from "./React-Framework"
import {CourseTitle} from "../Course-Title"

export function TouchTyping() {
    return(
        <div className={'courses__item'}>
            <CourseTitle title={'Touch typing course'} isButton={true}/>
            <ul className={'item__list'}>
                <li className={'text'}>Ratatype Features Guide</li>
            </ul>
        </div>
    )
}
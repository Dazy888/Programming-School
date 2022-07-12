import {React} from "./React"
import {CourseTitle} from "../Course-Title"

export function English() {
    return(
        <div className={'courses__item'}>
            <CourseTitle title={'English for IT'} isButton={true}/>
            <ul className={'item__list'}>
                <li className={'text'}>Terminology</li>
                <li className={'text'}>Reading documentation and libraries</li>
                <li className={'text'}>Communication on the forums</li>
                <li className={'text'}>Tech News Resources</li>
                <li className={'text'}>Word pronunciation</li>
                <li className={'text'}>Communication</li>
                <li className={'text'}>Accents</li>
                <li className={'text'}>Watching video originals</li>
            </ul>
        </div>
    )
}
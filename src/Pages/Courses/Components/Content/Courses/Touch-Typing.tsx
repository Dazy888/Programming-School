import {CourseTitle} from "../Course-Title"

export function TouchTyping() {
    return(
        <div className={'courses__item'}>
            <CourseTitle title={'Touch typing course'} isButton={true}/>
            <div className={'item__txt'}>
                <ul className={'item__list'}>
                    <li className={'text'}>Ratatype Features Guide</li>
                </ul>
            </div>
        </div>
    )
}
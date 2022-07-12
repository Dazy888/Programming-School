import {CourseTitle} from "./Course-Title"

type PropsType = {
    title: string
    text: string
}

export function CourseSmallList({title, text}: PropsType) {
    return(
        <div className={'courses__item'}>
            <CourseTitle title={title} isButton={true}/>
            <ul className={'item__list default-list'}>
                <li className={'text'}>{text}</li>
            </ul>
        </div>
    )
}
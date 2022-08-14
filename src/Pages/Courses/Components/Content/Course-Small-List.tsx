import {CourseTitle} from "./Course-Title"

type PropsType = {
    title: string
    text: string
}

export function CourseSmallList({title, text}: PropsType) {
    return(
        <div className={'courses__item'}>
            <CourseTitle title={title} isButton={true}/>
            <div className={'item__txt'}>
                <ul className={'item__list default-list'}>
                    <li className={'text'}>{text}</li>
                </ul>
            </div>
        </div>
    )
}
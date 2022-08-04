import {CourseTitle} from "./Course-Title"

type PropsType = {
    title: string
    text: string
    className?: string
}

export function CourseSmall({title, text, className = ''}: PropsType) {
    return(
        <div className={`courses__item ${className}`}>
            <CourseTitle title={title} isButton={true}/>
            <div className={'item__txt'}>
                <p className={'text'}>{text}</p>
            </div>
        </div>
    )
}
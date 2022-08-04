import {CourseSmall} from "../Content/Course-Small"
import {QuestionsType} from "../../../../Redux/Courses-Reducer/Courses-Reducer"

export type QuestionsPropsType = {
    classNames?: Array<string>
}

export function FiveQuestions({titles, texts, classNames = ['', '', '', '', '']}: QuestionsType & QuestionsPropsType) {
    return(
        <div className={`questions flex-property-set_between ${classNames[0]}`}>
            <h1 className={'title'}>Frequently asked Questions</h1>
            <div className={'questions__column'}>
                <CourseSmall className={classNames[1]} title={titles[0]} text={texts[0]}/>
                <CourseSmall className={classNames[2]} title={titles[1]} text={texts[1]}/>
                <CourseSmall className={classNames[3]} title={titles[2]} text={texts[2]}/>
                <CourseSmall className={classNames[4]} title={titles[3]} text={texts[3]}/>
                <CourseSmall className={classNames[5]} title={titles[4]} text={texts[4]}/>
            </div>
        </div>
    )
}
import {AndroidCoursePropsType} from "./Git"
import {CourseTitle} from "../Course-Title"

export function SQL({text}: AndroidCoursePropsType) {
    return(
        <div className={'courses__item'}>
            <CourseTitle title={'SQL query language'} isButton={true}/>
            {text ? <p className={'text'}>{text}</p> : null}
            <ul className={'item__list'}>
                <li className={'text'}>SQL. Introduction</li>
                <li className={'text'}>DB structure, DESCRIBE query</li>
                <li className={'text'}>Selecting and filtering data, SELECT query</li>
                <li className={'text'}>Functions and expressions, data aggregation</li>
                <li className={'text'}>Table relationships and joins: JOIN</li>
                <li className={'text'}>Grouping</li>
                <li className={'text'}>Data modification</li>
                <li className={'text'}>Subqueries</li>
                <li className={'text'}>Declaring and changing the data structure</li>
            </ul>
        </div>
    )
}
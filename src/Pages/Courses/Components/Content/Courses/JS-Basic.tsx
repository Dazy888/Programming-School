import {CourseTitle} from "../Course-Title"

export function JSBasic() {
    return(
        <div className={'courses__item'}>
            <CourseTitle title={'JavaScript. Basic level'} isButton={true}/>
            <div className={'item__txt'}>
                <ul className={'item__list'}>
                    <li className={'text'}>Introduction</li>
                    <li className={'text'}>Variables and working with numbers</li>
                    <li className={'text'}>Strings, booleans, and conditional statements</li>
                    <li className={'text'}>Arrays and loops</li>
                    <li className={'text'}>Function</li>
                    <li className={'text'}>Objects</li>
                    <li className={'text'}>Introduction to the DOM</li>
                    <li className={'text'}>Constants, scopes and closures</li>
                    <li className={'text'}>Transformations and non-strict comparisons</li>
                    <li className={'text'}>Communication with the server, async/await</li>
                </ul>
            </div>
        </div>
    )
}
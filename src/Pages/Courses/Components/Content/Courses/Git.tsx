import {CourseTitle} from "../Course-Title"

export type AndroidCoursePropsType = {
    text?: string
}

export function Git({text}: AndroidCoursePropsType) {
    return(
        <div className={'courses__item'}>
            <CourseTitle title={'Git version control system'} isButton={true}/>
            {text ? <p className={'text'}>{text}</p> : null}
            <ul className={'item__list'}>
                <li className={'text'}>Code Versions</li>
                <li className={'text'}>Installing Git</li>
                <li className={'text'}>Index and partial commits</li>
                <li className={'text'}>Version comparison</li>
                <li className={'text'}>Reverting Changes and Rolling Back Versions</li>
                <li className={'text'}>Repositories and collaboration</li>
                <li className={'text'}>Branches - creating and managing</li>
                <li className={'text'}>Merging and conflict resolution</li>
                <li className={'text'}>Useful Tools</li>
                <li className={'text'}>Git Rules</li>
            </ul>
        </div>
    )
}
import {CourseTitle} from "../Course-Title";
import {AndroidCoursePropsType} from "./Git"

export function Figma({text}: AndroidCoursePropsType) {
    return(
        <div className={'courses__item'}>
            <CourseTitle title={'Figma'} isButton={true}/>
            {text ? <p className={'text'}>{text}</p> : null}
            <div className={'item__txt'}>
                <ul className={'item__list'}>
                    <li className={'text'}>Introduction to Figma. Features Overview</li>
                    <li className={'text'}>Working with graphics</li>
                    <li className={'text'}>Figma Editor - Modular Grids and Artboards</li>
                    <li className={'text'}>Creating and configuring components, working with effects</li>
                    <li className={'text'}>Create nested components. Auto Layout</li>
                    <li className={'text'}>Organization of the workspace of components and styles. Teamwork, version control and transfer of layouts to development</li>
                    <li className={'text'}>Prototyping</li>
                    <li className={'text'}>Figma Animate</li>
                    <li className={'text'}>Bonus module. Overview and application of Figma plugins</li>
                </ul>
            </div>
        </div>
    )
}
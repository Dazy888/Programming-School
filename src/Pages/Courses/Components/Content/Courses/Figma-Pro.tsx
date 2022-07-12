import {React} from "./React"
import {CourseTitle} from "../Course-Title"

export function FigmaPro() {
    return(
        <div className={'courses__item'}>
            <CourseTitle title={'Figma from zero to PRO'} isButton={true}/>
            <ul className={'item__list'}>
                <li className={'text'}>Introduction to Figma</li>
                <li className={'text'}>Basic Figma Tools</li>
                <li className={'text'}>Icons, illustrations and pictures</li>
                <li className={'text'}>Components</li>
                <li className={'text'}>Component Libraries and Common Styles</li>
                <li className={'text'}>Auto Layout и Variants</li>
                <li className={'text'}>Multi-page complex documents in Figma</li>
                <li className={'text'}>Additional features and community of authors</li>
                <li className={'text'}>Preparing the layout in Figma for developers</li>
                <li className={'text'}>As a result. Get acquainted with the graphic editor, in which you will be sent layouts for layout. Learn to extract colors, fonts, styles and even try yourself as a web designer</li>
            </ul>
        </div>
    )
}
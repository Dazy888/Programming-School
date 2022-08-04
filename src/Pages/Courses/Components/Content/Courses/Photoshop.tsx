import {CourseTitle} from "../Course-Title"

export function Photoshop() {
    return (
        <div className={'courses__item'}>
            <CourseTitle title={'Photoshop Basics'} isButton={true}/>
            <div className={'item__txt'}>
                <ul className={'item__list'}>
                    <li className={'text'}>Introduction to Photoshop</li>
                    <li className={'text'}>Instruments</li>
                    <li className={'text'}>Working with files and images</li>
                    <li className={'text'}>How to work with layers and masks</li>
                    <li className={'text'}>Bonus module. Selections and masks</li>
                    <li className={'text'}>Working with layers</li>
                    <li className={'text'}>Effects</li>
                    <li className={'text'}>Advanced clipping/retouching techniques</li>
                    <li className={'text'}>Principles of construction of raster images</li>
                    <li className={'text'}>Bonus module. How to master the pen tool</li>
                    <li className={'text'}>Collage Practice to Create a Key-Visual</li>
                    <li className={'text'}>Bonus module. do good</li>
                    <li className={'text'}>The practice of creating the most original social media memes</li>
                    <li className={'text'}>Create a poster</li>
                    <li className={'text'}>As a result. Learn the basics of working in the Photoshop editor</li>
                </ul>
            </div>
        </div>
    )
}
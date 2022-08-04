import {CourseTitle} from "../Course-Title"

export function MarkupBasic() {
    return (
        <div className={'courses__item'}>
            <CourseTitle title={'Web layout. Basic level'} isButton={true}/>
            <div className={'item__txt'}>
                <ul className={'item__list'}>
                    <li className={'text'}>Introduction</li>
                    <li className={'text'}>Basic HTML</li>
                    <li className={'text'}>Basic CSS</li>
                    <li className={'text'}>Working with layout</li>
                    <li className={'text'}>Layout. HTML markup</li>
                    <li className={'text'}>Layout. Flexbox</li>
                    <li className={'text'}>Layout. Stylization</li>
                    <li className={'text'}>Advanced HTML. Forms</li>
                    <li className={'text'}>Advanced CSS</li>
                    <li className={'text'}>Grids</li>
                    <li className={'text'}>Adaptability. Desktop and tablet</li>
                    <li className={'text'}>Adaptability. Mobile devices</li>
                    <li className={'text'}>JavaScript for layout designer</li>
                    <li className={'text'}>Availability</li>
                    <li className={'text'}>Cross browser</li>
                    <li className={'text'}>Knowledge base</li>
                    <li className={'text'}>Working with a host</li>
                    <li className={'text'}>Animation</li>
                    <li className={'text'}>Information about the course project</li>
                </ul>
            </div>
        </div>
    )
}
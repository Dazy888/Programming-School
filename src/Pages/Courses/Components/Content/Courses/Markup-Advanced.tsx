import {CourseTitle} from "../Course-Title"

export function MarkupAdvanced() {
    return(
        <div className={'courses__item'}>
            <CourseTitle title={'Web layout. Advanced level'} isButton={true}/>
            <div className={'item__txt'}>
                <ul className={'item__list'}>
                    <li className={'text'}>HTML email layout</li>
                    <li className={'text'}>SVG</li>
                    <li className={'text'}>Animation in JS</li>
                    <li className={'text'}>Optimization and download process</li>
                    <li className={'text'}>Site rendering</li>
                    <li className={'text'}>Collectors</li>
                    <li className={'text'}>Preprocessors and Postprocessors</li>
                    <li className={'text'}>CSS Grid</li>
                    <li className={'text'}>The future of layout</li>
                </ul>
            </div>
        </div>
    )
}
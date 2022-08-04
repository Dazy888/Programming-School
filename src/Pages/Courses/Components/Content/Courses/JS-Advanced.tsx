import {CourseTitle} from "../Course-Title"

export function JSAdvanced() {
    return(
        <div className={'courses__item'}>
            <CourseTitle title={'JavaScript. Advanced level'} isButton={true}/>
            <div className={'item__txt'}>
                <ul className={'item__list'}>
                    <li className={'text'}>Browser events, execution context</li>
                    <li className={'text'}>Modules</li>
                    <li className={'text'}>Event loop and asynchronous development</li>
                    <li className={'text'}>Error processing</li>
                    <li className={'text'}>Classes</li>
                    <li className={'text'}>Developments</li>
                    <li className={'text'}>The JavaScript Ecosystem and npm</li>
                    <li className={'text'}>Assembly</li>
                    <li className={'text'}>Testing</li>
                    <li className={'text'}>Knowledge base</li>
                </ul>
            </div>
        </div>
    )
}
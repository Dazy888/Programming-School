import {CourseTitle} from "../Course-Title"

export function Node() {
    return(
        <div className={'courses__item'}>
            <CourseTitle title={'Node'} isButton={true}/>
            <div className={'item__txt'}>
                <ul className={'item__list'}>
                    <li className={'text'}>Introduction to the course</li>
                    <li className={'text'}>Preparing the working environment</li>
                    <li className={'text'}>We write Hello, world!</li>
                    <li className={'text'}>We solve basic problems</li>
                    <li className={'text'}>Asynchronous code</li>
                    <li className={'text'}>Express.js</li>
                    <li className={'text'}>Databases, relational databases</li>
                    <li className={'text'}>Databases, non-relational databases</li>
                    <li className={'text'}>CLI programs</li>
                    <li className={'text'}>Deepening Theory + Advanced Concepts</li>
                    <li className={'text'}>Real-time & WebSockets</li>
                    <li className={'text'}>Pro tips</li>
                </ul>
            </div>
        </div>
    )
}
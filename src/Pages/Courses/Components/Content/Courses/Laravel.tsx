import {ReactFramework} from "./React-Framework"
import {CourseTitle} from "../Course-Title"

export function Laravel() {
    return (
        <div className={'courses__item'}>
            <CourseTitle title={'Laravel PHP Framework'} isButton={true}/>
            <ul className={'item__list'}>
                <li className={'text'}>Introduction, installation and initial setup</li>
                <li className={'text'}>Controllers, actions and routing</li>
                <li className={'text'}>Working with databases. Eloquent ORM</li>
                <li className={'text'}>Working with templates. Blade template engine</li>
                <li className={'text'}>Forming a response (Response)</li>
                <li className={'text'}>Request Processing</li>
                <li className={'text'}>Services: creating and using</li>
                <li className={'text'}>Working with events</li>
                <li className={'text'}>Built-in features of Laravel</li>
                <li className={'text'}>Authorization Implementation</li>
                <li className={'text'}>Integration with external services</li>
                <li className={'text'}>Testing and Debugging Laravel Applications</li>
                <li className={'text'}>Creating an admin panel</li>
            </ul>
        </div>
    )
}
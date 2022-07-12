import {React} from "./React"
import {CourseTitle} from "../Course-Title"

export function Bash() {
    return(
        <div className={'courses__item reset-height_big'}>
            <CourseTitle title={'Working on the Bash command line'} isButton={true}/>
            <ul className={'item__list'}>
                <li className={'text'}>What is command line</li>
                <li className={'text'}>Working with files and folders</li>
                <li className={'text'}>Authorization and access rights</li>
                <li className={'text'}>Processes, services and tasks</li>
                <li className={'text'}>Configuration and tools</li>
                <li className={'text'}>Writing scripts in Bash</li>
                <li className={'text'}>Using Bash on an example of setting up a web server</li>
                <li className={'text'}>As a result. Learn to manage the computer's file system using the command line. Speed up your work and spend less time on routine</li>
            </ul>
        </div>
    )
}
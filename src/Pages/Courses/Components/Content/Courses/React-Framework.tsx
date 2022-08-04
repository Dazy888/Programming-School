import {CourseTitle} from "../Course-Title"

export function ReactFramework() {
    return (
        <div className={'courses__item'}>
            <CourseTitle title={'ReactFramework'} isButton={true}/>
            <div className={'item__txt'}>
                <ul className={'item__list'}>
                    <li className={'text'}>Introduction to React</li>
                    <li className={'text'}>Create a project</li>
                    <li className={'text'}>TypeScript</li>
                    <li className={'text'}>Components on the example of a Reddit news card</li>
                    <li className={'text'}>Hooks and functional programming</li>
                    <li className={'text'}>Hooks and functional programming</li>
                    <li className={'text'}>Working with a public API on the example of Reddit</li>
                    <li className={'text'}>API + context</li>
                    <li className={'text'}>Portal and form</li>
                    <li className={'text'}>Introduction to Redux with an example of a comment field</li>
                    <li className={'text'}>Using Redux-Thunk with User Profile Loading Example</li>
                    <li className={'text'}>Forms on the example of comments and a post card</li>
                    <li className={'text'}>Endless lists on the example of a feed of posts</li>
                    <li className={'text'}>Routing</li>
                    <li className={'text'}>Deploy</li>
                    <li className={'text'}>Bonus module: Mobx, effector and other redux alternatives</li>
                </ul>
            </div>
        </div>
    )
}
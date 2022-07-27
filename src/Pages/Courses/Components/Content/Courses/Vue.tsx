import {CourseTitle} from "../Course-Title"
import {ReactFramework} from "./React-Framework"

export function Vue() {
    return(
        <div className={'courses__item'}>
            <CourseTitle title={'Vue'} isButton={true}/>
            <ul className={'item__list'}>
                <li className={'text'}>Introduction</li>
                <li className={'text'}>Vue Basics</li>
                <li className={'text'}>Create a project</li>
                <li className={'text'}>Catalog</li>
                <li className={'text'}>Pagination and filtering</li>
                <li className={'text'}>Product page</li>
                <li className={'text'}>Basket</li>
                <li className={'text'}>Working with API. Product List</li>
                <li className={'text'}>Working with API. Checkout</li>
                <li className={'text'}>Deploy</li>
            </ul>
        </div>
    )
}
import {CourseTitle} from "../Course-Title"

export function Angular() {
    return (
        <div className={'courses__item'}>
            <CourseTitle title={'Angular'} isButton={true}/>
            <div className={'item__txt'}>
                <ul className={'item__list'}>
                    <li className={'text'}>Introduction to Angular</li>
                    <li className={'text'}>Creating a UI Kit</li>
                    <li className={'text'}>Catalog</li>
                    <li className={'text'}>Routing</li>
                    <li className={'text'}>Service architecture in Angular</li>
                    <li className={'text'}>HTTP Advanced</li>
                    <li className={'text'}>RXJS: Product Search</li>
                    <li className={'text'}>Forms in Angular</li>
                    <li className={'text'}>Product page</li>
                    <li className={'text'}>We improve the application</li>
                    <li className={'text'}>RXJS & Components Advanced: shopping cart</li>
                    <li className={'text'}>Testing</li>
                    <li className={'text'}>Ways to organize data exchange</li>
                </ul>
            </div>
        </div>
    )
}
import {NavLink} from "react-router-dom"
import React, {useEffect} from "react"
import './Navigation.css'

export function Navigation() {
    const navigationRef: any = React.createRef()

    useEffect(() => {
        const navigation = navigationRef.current

        const burgerOpen: any = navigation.querySelector('.burger_open')
        const burgerClose: any = navigation.querySelector('.burger_close')

        burgerOpen.onclick = () => {
            navigation.classList.add('show-nav')
            burgerOpen.style.display = 'none'
            burgerClose.style.display = 'block'
        }

        burgerClose.onclick = () => {
            navigation.classList.remove('show-nav')
            burgerOpen.style.display = 'block'
            burgerClose.style.display = 'none'
        }
    }, [])

    return(
        <div className="navigation flex-property-set_between">
            <div className="navigation__img">
                <img className="img__logo" src="/Photographs/Main-Page/Logo.png" alt="Logo" />
            </div>
            <nav className="navigation__links white-txt" ref={navigationRef}>
                <button className="burger burger_close"><i className="fa-solid fa-square-xmark"></i></button>
                <button className="burger burger_open"><i className="fa-solid fa-bars"></i></button>
                <NavLink to={'/home'} className="links__item">Home</NavLink>
                <NavLink to={'/courses'} className="links__item">Courses</NavLink>
                <NavLink to={'/schedule'} className="links__item">Schedule</NavLink>
                <NavLink to={'/teachers'} className="links__item">Teachers</NavLink>
                <NavLink to={'/contacts'} className="links__item">Contacts</NavLink>
            </nav>
            <div className="navigation__btn white-txt">
                <button className="btn__cabinet white-txt">Go to office</button>
            </div>
        </div>
    )
}
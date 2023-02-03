import React, { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import styles from "@/styles/Navigation.module.scss"

const NavigationLinksComponents = () => {
    const router = useRouter()
    const [isBurgerMenuOpened, setBurgerMenuStatus] = useState(false)
    const [navClass, setNavClass] = useState('')

    function burgerListener() {
        if (isBurgerMenuOpened) {
            setBurgerMenuStatus(false)
            setNavClass('')
        } else {
            setBurgerMenuStatus(true)
            setNavClass(styles['show-nav'])
        }
    }

    return(
        <nav className={`${navClass} white-txt`}>
            <button onClick={burgerListener} className={styles['burger']}>
                <i className={`fa-solid fa-${isBurgerMenuOpened ? 'xmark' : 'bars'}`}/>
            </button>
            <ul className={'flex-center'}>
                <Link className={(router.pathname === '/') ? styles['active'] : ''} href={'/'}>Home</Link>
                <Link className={(router.pathname === '/courses') ? styles['active'] : ''} href={'/courses'}>Courses</Link>
                <Link className={(router.pathname === '/schedule') ? styles['active'] : ''} href={'/schedule'}>Schedule</Link>
                <Link className={(router.pathname === '/teachers') ? styles['active'] : ''} href={'/teachers'}>Teachers</Link>
                <Link className={(router.pathname === '/contacts') ? styles['active'] : ''} href={'/contacts'}>Contacts</Link>
            </ul>
        </nav>
    )
}

export const NavigationLinks = React.memo(NavigationLinksComponents)
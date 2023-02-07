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
        <nav className={`${navClass} duration-500 overflow-hidden text-white`}>
            <button onClick={burgerListener} className={`${styles['burger']} text-3xl mt-10 mb-5 mx-auto hidden`}>
                <i className={`fa-solid fa-${isBurgerMenuOpened ? 'xmark' : 'bars'}`}/>
            </button>
            <ul className={'flex justify-center text-lg'}>
                <Link className={(/^\/$/.test(router.pathname)) ? `${styles['active']} mr-14 duration-300` : 'mr-14 duration-300'} href={'/'}>Home</Link>
                <Link className={(/\/(courses|courses\/python)/.test(router.pathname)) ? `${styles['active']} mr-14 duration-300` : 'mr-14 duration-300'} href={'/courses'}>Courses</Link>
                <Link className={(/\/contacts/.test(router.pathname)) ? `${styles['active']} duration-300` : ' duration-300'} href={'/contacts'}>Contacts</Link>
            </ul>
        </nav>
    )
}

export const NavigationLinks = React.memo(NavigationLinksComponents)
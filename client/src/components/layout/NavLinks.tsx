import React, { useState } from "react"
import { useRouter } from "next/router"
import styles from '@/styles/MainLayout.module.scss'
import Link from "next/link"

const NavigationLinksComponents = () => {
    const router = useRouter()
    const [isNavOpened, setNavState] = useState(false)

    return(
        <nav className={`${isNavOpened ? styles['show-nav'] : ''} duration-500`}>
            <button onClick={() => setNavState(!isNavOpened)} className={'w-fit text-3xl mx-auto hidden'}>
                <i className={`fa-solid fa-${isNavOpened ? 'xmark' : 'bars'}`}/>
            </button>
            <ul className={'flex gap-10 text-lg'}>
                <Link className={(/^\/$/.test(router.pathname)) ? styles.active : ''} href={'/'}>Home</Link>
                <Link className={(/\/(courses|courses\/(python|android))/.test(router.pathname)) ? styles.active : ''} href={'/courses'}>Courses</Link>
                <Link className={(/\/contacts/.test(router.pathname)) ? styles.active : ''} href={'/contacts'}>Contacts</Link>
            </ul>
        </nav>
    )
}

export const NavLinks = React.memo(NavigationLinksComponents)

import React, { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import styles from "@/styles/Home.module.scss"

const NavigationLinksComponents = () => {
    const router = useRouter()
    const [isNavOpened, setNavState] = useState(false)
    const [navHeight, setNavHeight] = useState('')

    function setMenu(burgerStatus: boolean, navClass: string) {
        setNavState(burgerStatus)
        setNavHeight(navClass)
    }

    return(
        <nav className={`${navHeight} duration-500 text-white`}> { /* Add animation class */ }
            <button onClick={() => (isNavOpened) ? setMenu(false, '') : setMenu(true, 'show-nav')} className={'w-fit text-3xl mx-auto hidden'}>
                <i className={`fa-solid fa-${isNavOpened ? 'xmark' : 'bars'}`}/>
            </button>
            <ul className={'flex text-lg'}>
                <Link className={(/^\/$/.test(router.pathname)) ? 'active mr-14 duration-300' : 'mr-14 duration-300'} href={'/'}>Home</Link>
                <Link className={(/\/(courses|courses\/python)/.test(router.pathname)) ? 'active mr-14 duration-300' : 'mr-14 duration-300'} href={'/courses'}>Courses</Link>
                <Link className={(/\/contacts/.test(router.pathname)) ? 'active duration-300' : ' duration-300'} href={'/contacts'}>Contacts</Link>
            </ul>
        </nav>
    )
}

export const NavigationLinks = React.memo(NavigationLinksComponents)
import React, { ReactNode, useState } from "react"
import styles from '@/styles/Navigation.module.scss'
import { useRouter } from "next/router"

interface Props {
    children: ReactNode
}

const NavigationLayoutComponent: React.FC<Props> = ({ children }) => {
    const router = useRouter()
    const [isBurgerMenuOpened, setBurgerMenuStatus] = useState(false)

    function checkPath(path: string, currentPath: string) {
        if (currentPath === path) {
            return styles['active']
        }
    }

    return(
        <div id={'wrapper'}>
            <div className={`${styles['navigation']} flex-between`}>
                <div className={styles['navigation__img']}>
                    <img src={"/logo.png"} alt={"Logo"} />
                </div>
                <nav className={'white-txt'}>
                    <button onClick={() => (isBurgerMenuOpened) ? setBurgerMenuStatus(false) : setBurgerMenuStatus(true)} className={styles['burger']}>
                        <i className={`fa - solid fa-${isBurgerMenuOpened ? 'xmark' : 'bars'}`}/>
                    </button>
                    <ul>
                        <li className={checkPath(router.pathname, '/')} onClick={() => router.push('/')}>Home</li>
                        <li className={checkPath(router.pathname, '/courses')} onClick={() => router.push('/courses')}>Courses</li>
                        <li className={checkPath(router.pathname, '/schedule')} onClick={() => router.push('/schedule')}>Schedule</li>
                        <li className={checkPath(router.pathname, '/teachers')} onClick={() => router.push('/teachers')}>Teachers</li>
                        <li className={checkPath(router.pathname, '/contacts')} onClick={() => router.push('/contacts')}>Contacts</li>
                    </ul>
                </nav>
                <div className={styles['navigation__btn']}>
                    <button className={'white-txt'}>Go to office</button>
                </div>
            </div>
            {children}
        </div>
    )
}

export const NavigationLayout = React.memo(NavigationLayoutComponent)
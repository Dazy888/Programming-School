import React, { ReactNode } from "react"
import Image from "next/image"
import styles from '@/styles/Navigation.module.scss'
import { NavigationLinks } from "@/components/navigation/NavigationLinks"

interface Props {
    children: ReactNode
}

const NavigationLayoutComponent: React.FC<Props> = ({ children }) => {
    return(
        <div id={'wrapper'}>
            <div className={`${styles['navigation']} flex-between`}>
                <Image height={100} width={100} src={"/logo.png"} alt={"Logo"} />
                <NavigationLinks/>
                <button className={`${styles['navigation__btn']} white-txt`}>Go to office</button>
            </div>
            {children}
        </div>
    )
}

export const NavigationLayout = React.memo(NavigationLayoutComponent)
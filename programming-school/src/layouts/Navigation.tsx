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
            <div className={`${styles['navigation']} flex items-center justify-between py-10 px-20`}>
                <Image height={40} width={40} src={"/navigation/logo.png"} alt={"Logo"}/>
                <NavigationLinks/>
                <button className={`w-44 h-11 rounded-full text-base text-white`}>Go to office</button>
            </div>
            {children}
        </div>
    )
}

export const NavigationLayout = React.memo(NavigationLayoutComponent)
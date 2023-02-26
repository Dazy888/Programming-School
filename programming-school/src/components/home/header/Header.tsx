import React from "react"
import styles from '@/styles/Home.module.scss'
import { Timer } from "@/components/home/header/Timer"
import { Booking } from "@/components/home/header/Booking"

const HeaderSection = () => {
    return(
        <section id={styles['header']}>
            <Timer/>
            <Booking/>
        </section>
    )
}

export const Header = React.memo(HeaderSection)
import React from "react"
// Styles
import styles from '@/styles/Home.module.scss'
// Components
import { Timer } from "@/components/home/header/Timer"
import { Booking } from "@/components/home/header/Booking"

const HeaderSection = () => {
    return(
        <section id={styles.header}>
            <Timer/>
            <Booking/>
        </section>
    )
}

export const Header = React.memo(HeaderSection)

import React from "react"
import Head from "next/head"
// Styles
import styles from '@/styles/Home.module.scss'
// Layout
import { NavigationLayout } from "@/layouts/Navigation"
// Components
import { Main } from "@/components/home/main/Main"
import { Header } from "@/components/home/header/Header"
import { Footer } from "@/components/home/footer/Footer"

const Index = () => {
    return (
        <NavigationLayout>
            <Head>
                <title>Home</title>
            </Head>
            <div id={styles['home']}>
                <Header/>
                <Main/>
            </div>
        </NavigationLayout>
    )
}

export default React.memo(Index)
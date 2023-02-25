import React from "react"
import Head from "next/head"
// Styles
import styles from '@/styles/Home.module.scss'
// Layout
import { PageFrame } from "@/layouts/pageFrame-layout"
// Components
import { Main } from "@/components/home/main/Main"
import { Header } from "@/components/home/header/Header"

const Index = () => {
    return (
        <PageFrame>
            <Head>
                <title>Home</title>
            </Head>
            <div id={styles['home']}>
                <Header/>
                <Main/>
            </div>
        </PageFrame>
    )
}

export default React.memo(Index)
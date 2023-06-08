import React from "react"
import Head from "next/head"
import styles from '@/styles/Home.module.scss'
import { MainLayout } from "@/layouts/MainLayout"
import { Main } from "@/components/home/main/Main"
import { Header } from "@/components/home/header/Header"

const Home = () => (
    <MainLayout>
        <Head>
            <title>Home</title>
        </Head>
        <div id={styles.home}>
            <Header/>
            <Main/>
        </div>
    </MainLayout>
)

export default React.memo(Home)

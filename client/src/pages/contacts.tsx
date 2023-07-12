import React from "react"
import dynamic from "next/dynamic"
import styles from '@/styles/Contacs.module.scss'
// Components
import { MainLayout } from "@/layouts/MainLayout"
import { Managers } from "@/components/contacts/managers/Managers"
import { Map } from "@/components/contacts/Map"
const Feedback = dynamic(() => import('@/components/contacts/feedback/Feedback'), { ssr: false })

const Contacts = () => (
    <MainLayout title={'Contacts'}>
        <div id={styles.contacts} className={'flex justify-center items-center py-36 text-white'}>
            <div className={styles.container}>
                <Managers />
                <Map />
                <Feedback />
            </div>
        </div>
    </MainLayout>
)

export default React.memo(Contacts)

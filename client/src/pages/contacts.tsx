import React from "react"
import Head from "next/head"
import styles from '@/styles/Contacs.module.scss'
import { MainLayout } from "@/layouts/MainLayout"
import { TitleText } from "@/components/common/TitleText"
import { Form } from "@/components/contacts/Form"
import { Manager } from "@/components/contacts/Manager"

const Contacts = () => (
    <MainLayout>
        <Head>
            <title>Contacts</title>
        </Head>
        <div id={styles.contacts} className={'flex justify-center items-center py-36 text-white'}>
            <div className={styles.container}>
                <div className={`${styles.managers} text-center`}>
                    <TitleText text={'Contacts'}/>
                    <div className={`${styles['managers__row']} flex justify-between mt-12 mx-auto`}>
                        <Manager imgSrc={'/contacts/alex-manager.png'} name={'Alex'} occupation={'Advertising'} mail={'alexmanager'}/>
                        <Manager imgSrc={'/contacts/svetlana-manager.png'} name={'Svetlana'} occupation={'Social media'} mail={'svetlanamanager'}/>
                        <Manager imgSrc={'/contacts/yulia-manager.png'} name={'Yulia'} occupation={'Technical manager'} mail={'yuliamanager'}/>
                    </div>
                </div>
                <div className={`${styles.map} mt-40 mb-32`}>
                    <iframe className={'w-full h-96 rounded-lg'} src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68361.92759686733!2d30.456578117746258!3d50.45012771430198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf8e2a6aea1d%3A0xb229d398f9539240!2sVI%20Software%20Solutions!5e0!3m2!1sen!2sua!4v1675593084849!5m2!1sen!2sua'} loading={'lazy'} referrerPolicy={'no-referrer-when-downgrade'}/>
                </div>
                <div className={`${styles.feedback} flex justify-between items-baseline text-white`}>
                    <div className={`${styles['feedback__information']} text-left`}>
                        <h1 className={'text-3xl font-bold tracking-wide mb-4'}>Contact Information</h1>
                        <ul>
                            <li>Address : Antonovycha St, 172, Kyiv, 03150</li>
                            <li className={'my-2.5'}>Phone number : +380-(66)-820-54-14</li>
                            <li>Work time : 10:00-18:00</li>
                        </ul>
                    </div>
                    <div className={`${styles['feedback__form']} w-8/12`}>
                        <h1 className={'text-3xl font-bold tracking-wide mb-4'}>We are in touch</h1>
                        <p>Submit your application and we will contact you</p>
                        <Form/>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
)

export default React.memo(Contacts)

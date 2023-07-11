import React from "react"
import Image from "next/image"
import styles from "@/styles/Home.module.scss"
import { TitleText } from "@/components/layout/TitleText"

const AboutUs = () => (
    <section id={styles['about-us']} className={'flex justify-between items-center mx-auto mt-48'}>
        <div className={`${styles['img-container']} relative`}>
            <Image width={446} height={446} className={'absolute left-5 z-50'} alt={'Computer'} src={'/home/computer.webp'}/>
        </div>
        <div className={'max-w-lg'}>
            <TitleText text={'What are we doing?'}/>
            <p className={'mt-11 text-lg'}>
                We are engaged training of highly qualified specialists who are ready to cope with the difficulties at work. Thanks to our sponsors, our classrooms are equipped with the best equipment.
                We have the best teachers and in our courses you will learn the newest technologies. After completing our courses, you will receive a certificate and a 100 percent job placement.
            </p>
        </div>
    </section>
)

export default React.memo(AboutUs)

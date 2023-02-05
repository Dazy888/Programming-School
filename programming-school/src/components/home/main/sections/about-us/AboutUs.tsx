import React from "react"
import styles from "@/styles/Home.module.scss"
import { TitleText } from "@/components/home/main/TitleText"

const AboutUsComponent = () => {
    return(
        <section id={styles['about-us']} className={'flex items-center justify-between mt-48'}>
            <div className={`${styles['about-us__img']} relative`}>
                <img className={'w-full h-full absolute left-2.5'} alt={'Computer'} src="/home/computer.png"/>
            </div>
            <div className={styles['about-us__text']}>
                <TitleText text={'What are we doing?'}/>
                <p className={'mt-11 font-base text-white max-w-md'}>We are engaged training of highly qualified specialists who are
                    ready to cope with the difficulties at work. Thanks to our sponsors, our classrooms are equipped with
                    the best equipment. We have the best teachers and in our courses you will learn the
                    newest technologies. After completing our courses, you will receive a certificate
                    and a 100 percent job placement
                </p>
            </div>
        </section>
    )
}

export const AboutUs = React.memo(AboutUsComponent)
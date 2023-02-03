import React from "react"
import styles from "@/styles/Home.module.scss"

const AboutUsComponent = () => {
    return(
        <section id={styles['about-us']} className={'flex-between'}>
            <div className={styles['about-us__img']}>
                <img alt={'Computer'} src="/home/computer.png"/>
            </div>
            <div className={styles['about-us__text']}>
                <h1 className={'title'}>What are we doing?</h1>
                <p>We are engaged training of highly qualified specialists who are
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
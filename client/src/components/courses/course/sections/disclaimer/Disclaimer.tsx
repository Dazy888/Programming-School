import React from "react"
import Image from "next/image"
import styles from "@/styles/Course.module.scss"

const DisclaimerSection = () => (
    <section id={styles.disclaimer} className={'max-w-6xl py-9 px-32 mx-auto mb-32 rounded-2xl'}>
        <div className={'flex justify-between items-center'}>
            <Image width={56} height={56} alt={'Disclaimer img'} src={'/courses/course/disclaimer.webp'}/>
            <p className={'w-10/12 text-lg font-medium'}>We are constantly updating the course, so that you will get the skills that robots will need right away. Stay updated - May 2022.</p>
        </div>
    </section>
)

export const Disclaimer = React.memo(DisclaimerSection)

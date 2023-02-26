import React from "react"
import Image from "next/image"
import styles from "@/styles/Course.module.scss"

const HeaderComponent = () => {
    return(
        <div className={`${styles['header']} grid grid-cols-2 gap-12`}>
            <div className={`${styles['header__animation']} relative flex items-center justify-center`}>
                <Image width={240} height={240} className={styles['main']} alt={'Img'} src={'/courses/course/animation/center.png'}/>
                <Image width={115} height={115} className={`${styles['big']} ${styles['top-left']}`} alt={'Img'} src={'/courses/course/animation/top-left.png'}/>
                <Image width={115} height={115} className={`${styles['big']} ${styles['bottom-right']}`} alt={'Img'} src={'/courses/course/animation/bottom-right.png'}/>
                <Image width={90} height={90} className={`${styles['medium']} ${styles['top-right']}`} alt={'Img'} src={'/courses/course/animation/top-right.png'}/>
                <Image width={90} height={90} className={`${styles['medium']} ${styles['bottom-left']}`} alt={'Img'} src={'/courses/course/animation/bottom-left.png'}/>
                <Image width={70} height={70} className={`${styles['small']} ${styles['aic']}`} alt={'Img'} src={'/courses/course/animation/aic.png'}/>
                <Image width={70} height={70} className={`${styles['small']} ${styles['mail']}`} alt={'Img'} src={'/courses/course/animation/mail.png'}/>
                <Image width={70} height={70} className={`${styles['small']} ${styles['vk']}`} alt={'Img'} src={'/courses/course/animation/vk.png'}/>
                <Image width={70} height={70} className={`${styles['small']} ${styles['youla']}`} alt={'Img'} src={'/courses/course/animation/youla.png'}/>
            </div>
            <div className={`${styles['header__title']} max-w-lg`}>
                <h1 className={'text-5xl font-bold mb-12'}>Employment or money back</h1>
                <p className={'opacity-90 font-medium text-lg'}>You will receive individual support from an HR specialist. Together you will create a resume, prepare a portfolio and develop a career plan that will help you find a job faster. You will be able to choose attractive vacancies and get priority over other applicants.<br/><br/>If you do not show up for work, we will refund your money for the course</p>
            </div>
        </div>
    )
}

export const Header = React.memo(HeaderComponent)
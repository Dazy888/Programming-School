import React from "react"
import styles from "@/styles/Course.module.scss"

const HeaderComponent = () => {
    return(
        <div className={`${styles['employment__header']} grid grid-cols-2 gap-12`}>
            <div className={`${styles['employment__animation']} relative flex items-center justify-center`}>
                <img className={`w-60 h-60 ${styles['main']}`} alt={'Img'} src={'/courses/course/animation/center.png'}/>
                <img className={`absolute ${styles['big']} ${styles['top-left']}`} alt={'Img'} src={'/courses/course/animation/top-left.png'}/>
                <img className={`absolute ${styles['big']} ${styles['bottom-right']}`} alt={'Img'} src={'/courses/course/animation/bottom-right.png'}/>
                <img className={`absolute ${styles['medium']} ${styles['top-right']}`} alt={'Img'} src={'/courses/course/animation/top-right.png'}/>
                <img className={`absolute ${styles['medium']} ${styles['bottom-left']}`} alt={'Img'} src={'/courses/course/animation/bottom-left.png'}/>
                <img className={`absolute ${styles['small']} ${styles['aic']}`} alt={'Img'} src={'/courses/course/animation/aic.png'}/>
                <img className={`absolute ${styles['small']} ${styles['mail']}`} alt={'Img'} src={'/courses/course/animation/mail.png'}/>
                <img className={`absolute ${styles['small']} ${styles['vk']}`} alt={'Img'} src={'/courses/course/animation/vk.png'}/>
                <img className={`absolute ${styles['small']} ${styles['youla']}`} alt={'Img'} src={'/courses/course/animation/youla.png'}/>
            </div>
            <div className={`${styles['employment__title']} max-w-lg`}>
                <h1 className={'text-5xl font-bold mb-12'}>Employment or money back</h1>
                <p className={'opacity-90 font-medium text-lg'}>You will receive individual support from an HR specialist. Together you will create a resume, prepare a portfolio and develop a career plan that will help you find a job faster. You will be able to choose attractive vacancies and get priority over other applicants.<br/><br/>If you do not show up for work, we will refund your money for the course</p>
            </div>
        </div>
    )
}

export const Header = React.memo(HeaderComponent)
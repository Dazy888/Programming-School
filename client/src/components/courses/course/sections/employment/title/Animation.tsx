import React from "react"
import Image from "next/image"
import styles from "@/styles/Course.module.scss"

const AnimationComponent = () => {
    const commonImgPath = '/courses/course/animation'

    return(
        <div className={`${styles['title__animation']} relative flex items-center justify-center`}>
            <Image width={240} height={240} className={styles['main']} alt={'Img'} src={`${commonImgPath}/center.webp`}/>
            <Image width={115} height={115} className={`${styles['big']} ${styles['top-left']}`} alt={'Img'} src={`${commonImgPath}/top-left.webp`}/>
            <Image width={115} height={115} className={`${styles['big']} ${styles['bottom-right']}`} alt={'Img'} src={`${commonImgPath}/bottom-right.webp`}/>
            <Image width={90} height={90} className={`${styles['medium']} ${styles['top-right']}`} alt={'Img'} src={`${commonImgPath}/top-right.webp`}/>
            <Image width={90} height={90} className={`${styles['medium']} ${styles['bottom-left']}`} alt={'Img'} src={`${commonImgPath}/bottom-left.webp`}/>
            <Image width={70} height={70} className={`${styles['small']} ${styles['aic']}`} alt={'Img'} src={`${commonImgPath}/aic.webp`}/>
            <Image width={70} height={70} className={`${styles['small']} ${styles['mail']}`} alt={'Img'} src={`${commonImgPath}/mail.webp`}/>
            <Image width={70} height={70} className={`${styles['small']} ${styles['vk']}`} alt={'Img'} src={`${commonImgPath}/vk.webp`}/>
            <Image width={70} height={70} className={`${styles['small']} ${styles['youla']}`} alt={'Img'} src={`${commonImgPath}/youla.webp`}/>
        </div>
    )
}

export const Animation = React.memo(AnimationComponent)

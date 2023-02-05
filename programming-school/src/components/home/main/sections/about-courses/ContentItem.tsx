import React from "react"
import styles from '@/styles/Home.module.scss'
import Image from "next/image"

interface Props {
    imgPath: string
    subtitle: string
    text: string
    imgAlt: string
}

const ContentItemComponent: React.FC<Props> = ({ imgPath, subtitle, text, imgAlt }) => {
    return(
        <div className={styles['about-courses__item']}>
            <Image className={'m-auto'} width={100} height={100} alt={imgAlt} src={imgPath}/>
            <h3 className={"font-medium text-2xl text-white mt-14 mb-8"}>{subtitle}</h3>
            <p className={"font-base text-white opacity-80 max-w-sm"}>{text}</p>
        </div>
    )
}

export const ContentItem = React.memo(ContentItemComponent)
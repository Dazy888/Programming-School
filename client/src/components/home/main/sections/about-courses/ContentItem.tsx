import React from "react"
import Image from "next/image"
import styles from '@/styles/Home.module.scss'

interface Props {
    imgPath: string
    subtitle: string
    text: string
    imgAlt: string
}

const ContentItemComponent: React.FC<Props> = ({ imgPath, subtitle, text, imgAlt }) => {
    return(
        <div className={styles['content__item']}>
            <Image className={'m-auto'} width={100} height={100} alt={imgAlt} src={imgPath}/>
            <h3 className={'font-medium text-2xl mt-14 mb-8'}>{subtitle}</h3>
            <p className={'max-w-sm opacity-80 mx-auto'}>{text}</p>
        </div>
    )
}

export const ContentItem = React.memo(ContentItemComponent)

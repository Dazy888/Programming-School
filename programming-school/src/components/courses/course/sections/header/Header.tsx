import React from "react"
// Styles
import styles from "@/styles/Course.module.scss"
// Components
import { TitleText } from "@/components/common/TitleText"
import { FeaturesItem } from "@/components/courses/course/sections/header/FeaturesItem"
// Interface
import { ListItemTextI } from "@/interfaces/courses"

interface Props {
    courseAttr: any
    profession: string
    text: string
    imgSrc: string
    columnsAttr: any
    features: ListItemTextI[]
}

const HeaderComponent: React.FC<Props> = ({ courseAttr, text, profession, imgSrc, columnsAttr, features }) => {
    return(
        <section id={styles['header']} className={'mb-32'}>
            <div {...courseAttr} className={`${styles['header__title']} flex justify-between items-center py-16 px-44 rounded-2xl`}>
                <div className={'max-w-2xl'}>
                    <TitleText text={`Profession ${profession}`}/>
                    <p className={'text-xl my-5 font-medium'}>{text}</p>
                    <button className={'w-2/5 h-14 text-white rounded-xl text-lg font-medium'}>Book a course</button>
                </div>
                <img alt={'Logo'} src={imgSrc}/>
            </div>
            <div {...columnsAttr} className={`${styles['header__features']} grid gap-9 mt-20 mx-auto w-fit`}>
                {...features.map((feature, key) => <FeaturesItem styleAttr={courseAttr} key={key} title={feature.title} text={feature.text}/>)}
            </div>
        </section>
    )
}

export const Header = React.memo(HeaderComponent)
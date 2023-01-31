import React from "react"
import styles from '@/styles/Index.module.scss'
import { ParthnersItem } from "@/components/home/ParthnersItem"

interface Props {
    imgAlts: string[]
    imgPaths: string[]
}

const PartnersComponent: React.FC<Props> = ({ imgAlts, imgPaths }) => {
    return(
        <div className={styles['partners__row']}>
            <ParthnersItem imgPath={imgPaths[0]} imgAlt={imgAlts[0]}/>
            <ParthnersItem imgPath={imgPaths[1]} imgAlt={imgAlts[1]}/>
            <ParthnersItem imgPath={imgPaths[2]} imgAlt={imgAlts[2]}/>
            <ParthnersItem imgPath={imgPaths[3]} imgAlt={imgAlts[3]}/>
        </div>
    )
}

export const Partners = React.memo(PartnersComponent)
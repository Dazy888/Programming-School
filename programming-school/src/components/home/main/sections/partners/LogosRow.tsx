import React from "react"
import styles from '@/styles/Home.module.scss'
import { RowItem } from "@/components/home/main/sections/partners/RowItem"

interface Props {
    imgAlts: string[]
    imgPaths: string[]
    borderNone?: boolean
}

const LogosRowComponent: React.FC<Props> = ({ imgAlts, imgPaths, borderNone = false }) => {
    return(
        <div className={`${styles['row']} ${borderNone ? 'border-none' : ''} flex`}>
            <RowItem imgPath={imgPaths[0]} imgAlt={imgAlts[0]}/>
            <RowItem imgPath={imgPaths[1]} imgAlt={imgAlts[1]}/>
            <RowItem imgPath={imgPaths[2]} imgAlt={imgAlts[2]}/>
            <RowItem imgPath={imgPaths[3]} imgAlt={imgAlts[3]}/>
        </div>
    )
}

export const LogosRow = React.memo(LogosRowComponent)
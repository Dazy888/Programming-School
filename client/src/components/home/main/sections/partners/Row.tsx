import React from "react"
import styles from '@/styles/Home.module.scss'
import { RowItem } from "@/components/home/main/sections/partners/RowItem"

interface Props {
    imgAlts: string[]
    imgPaths: string[]
    borderNone?: boolean
}

const RowComponent: React.FC<Props> = ({ imgAlts, imgPaths, borderNone = false }) => (
    <div className={`${styles.row} ${borderNone ? 'border-none' : ''} flex`}>
        {imgAlts.map((value, index) => <RowItem imgPath={imgPaths[index]} imgAlt={value}/>)}
    </div>
)

export const Row = React.memo(RowComponent)

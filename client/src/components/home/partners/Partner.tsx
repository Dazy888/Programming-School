import React from "react"
import styles from '@/styles/Home.module.scss'
import { PartnerLogo } from "@/components/home/partners/PartnerLogo"

interface Props {
    imgAlt: string
    imgPath: string
    borderRightNone?: boolean
    borderBottomNone?: boolean
}

const PartnerComponent: React.FC<Props> = ({ imgAlt, imgPath, borderRightNone = false, borderBottomNone = false }) => (
    <div className={`${styles['partners__partner']} ${borderRightNone ? styles['border-right-none'] : ''} ${borderBottomNone ? styles['border-bottom-none'] : ''} flex-center`}>
        <PartnerLogo imgPath={`/home/logos/${imgPath}.webp`} imgAlt={imgAlt}/>
    </div>
)

export const Partner = React.memo(PartnerComponent)

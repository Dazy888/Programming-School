import React from "react"
import Image from "next/image"
import { IForWho } from "@/models/course"

const ForWhoItemComponent: React.FC<IForWho> = ({ imgSrc, subtitle, text}) => {
    return(
        <div>
            <Image width={160} height={160} alt={'IMG'} src={imgSrc}/>
            <h3 className={'text-xl font-medium mt-6 mb-2'}>{subtitle}</h3>
            <p className={'max-w-sm'}>{text}</p>
        </div>
    )
}

export const ForWhoItem = React.memo(ForWhoItemComponent)
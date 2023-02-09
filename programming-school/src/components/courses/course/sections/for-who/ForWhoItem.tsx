import React from "react"
import { ForWhoI } from "@/interfaces/courses"

const ForWhoItemComponent: React.FC<ForWhoI> = ({ imgSrc, subtitle, text}) => {
    return(
        <div>
            <img className={'w-40 h-40'} alt={'IMG'} src={imgSrc}/>
            <h3 className={'text-xl font-medium mt-6 mb-2'}>{subtitle}</h3>
            <p className={'text-base max-w-sm'}>{text}</p>
        </div>
    )
}

export const ForWhoItem = React.memo(ForWhoItemComponent)
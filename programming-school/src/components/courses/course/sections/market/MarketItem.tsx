import React from "react"
import { ListItemTextI } from "@/interfaces/courses"

const MarketItemComponent: React.FC<ListItemTextI> = ({ text, title }) => {
    return(
        <div>
            <h3 className={'text-2xl font-medium'}>{title}</h3>
            <p className={'text-lg mt-3'}>{text}</p>
        </div>
    )
}

export const MarketItem = React.memo(MarketItemComponent)
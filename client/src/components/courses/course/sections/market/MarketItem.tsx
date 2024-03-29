import React from "react"
import { ListItemText } from "@/models/course.models"

const MarketItemComponent: React.FC<ListItemText> = ({ text, title }) => (
    <div>
        <h3 className={'text-2xl font-medium'}>{title}</h3>
        <p className={'text-lg mt-3'}>{text}.</p>
    </div>
)

export const MarketItem = React.memo(MarketItemComponent)

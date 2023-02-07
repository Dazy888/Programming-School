import React from "react"

interface Props {
    title: string
    text: string
}

const MarketItemComponent: React.FC<Props> = ({ text, title }) => {
    return(
        <div>
            <h3 className={'text-2xl font-medium'}>{title}</h3>
            <p className={'text-lg mt-3'}>{text}</p>
        </div>
    )
}

export const MarketItem = React.memo(MarketItemComponent)
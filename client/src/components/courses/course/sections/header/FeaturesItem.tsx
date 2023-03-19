import React from "react"

interface Props {
    title: string
    text: string
    styleAttr: any
}

const FeaturesItemComponent: React.FC<Props> = ({ title, text, styleAttr }) => {
    return(
        <div {...styleAttr} className={'rounded-xl p-2 text-center'}>
            <h3 className={'text-xl font-bold'}>{title}</h3>
            <p className={'mt-2 opacity-90'}>{text}</p>
        </div>
    )
}

export const FeaturesItem = React.memo(FeaturesItemComponent)

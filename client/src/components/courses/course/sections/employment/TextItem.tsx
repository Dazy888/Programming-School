import React from "react"

interface Props {
    title: string
    text: string
}

const TextItemComponent: React.FC<Props> = ({ text, title }) => {
    return(
        <div className={'mb-8'}>
            <h3 className={'text-xl font-semibold mb-2'}>{title}</h3>
            <p className={'font-medium'}>{text}</p>
        </div>
    )
}

export const TextItem = React.memo(TextItemComponent)

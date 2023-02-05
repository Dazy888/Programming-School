import React from "react"

interface Props {
    text: string
    classNames?: string
}

const GreyTextComponent: React.FC<Props> = ({ text, classNames = '' }) => <p className={`text-base text-white opacity-40 ${classNames}`}>{text}</p>

export const GreyText = React.memo(GreyTextComponent)
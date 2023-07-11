import React from "react"

interface Props {
    text: string
    additionalClassNames?: string
}

const GreyTextComponent: React.FC<Props> = ({ text, additionalClassNames = '' }) => <p className={`opacity-40 ${additionalClassNames}`}>{text}</p>
export const GreyText = React.memo(GreyTextComponent)

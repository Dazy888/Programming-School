import React from "react"

interface Props {
    text: string
    classNames?: string
}

const SubtitleComponent: React.FC<Props> = ({ text, classNames = '' }) => <p className={`opacity-50 ${classNames}`}>{text}</p>
export const Subtitle = React.memo(SubtitleComponent)
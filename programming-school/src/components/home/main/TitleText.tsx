import React from "react";

interface Props {
    text: string
}

const TitleTextComponent: React.FC<Props> = ({ text }) => <h1 className={'text-white font-bold text-5xl'}>{text}</h1>

export const TitleText = React.memo(TitleTextComponent)
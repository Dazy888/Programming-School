import React from "react"

interface Props {
    number: string
}

const NumberComponent: React.FC<Props> = ({ number }) => <p className={'font-bold'}>{number}</p>
export const Number = React.memo(NumberComponent)
import React from "react"
import { GreyText } from "@/components/home/booking/GreyText"
import { Number } from "@/components/home/booking/Number"

interface Props {
    text: string
    amount: string
    isMarginBottom?: boolean
}

const CounterItemComponent: React.FC<Props> = ({ amount, text, isMarginBottom }) => (
    <div className={`flex ${isMarginBottom ? 'mb-3' : ''}`}>
        <GreyText additionalClassNames={'w-72 mr-2'} text={`${text} :`}/>
        <Number number={amount}/>
    </div>
)

export const CounterItem = React.memo(CounterItemComponent)

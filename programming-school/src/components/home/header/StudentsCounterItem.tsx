import React from "react"
import styles from "@/styles/Home.module.scss"
import {GreyText} from "@/components/home/common/GreyText";
import {Number} from "@/components/home/common/Number";

interface Props {
    text: string
    amount: string
    isMarginBottom?: boolean
}

const StudentsCounterItemComponent: React.FC<Props> = ({ amount, text, isMarginBottom }) => {
    return(
        <div className={`flex ${isMarginBottom ? 'mb-3' : ''}`}>
            <GreyText classNames={'w-72 mr-2'} text={text}/>
            <Number number={amount}/>
        </div>
    )
}

export const StudentsCounterItem = React.memo(StudentsCounterItemComponent)
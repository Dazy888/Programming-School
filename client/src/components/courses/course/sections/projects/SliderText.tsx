import React from "react"
import { v4 } from "uuid"
import styles from "@/styles/Course.module.scss"

interface Props {
    title: string
    text: string | undefined
    listItems: string[] | undefined
    firstParagraph: string | undefined
    secondParagraph: string | undefined
}

const SliderTextComponent: React.FC<Props> = ({ text, title, secondParagraph, listItems, firstParagraph }) => (
    <div className={`${styles['slider__text']}`}>
        <h3 className={'text-2xl font-medium mb-2'}>{title}</h3>
        {text && <p>{text}.</p>}
        {firstParagraph && <p>{firstParagraph}.</p>}
        {listItems &&
            <ul className={'my-4'}>
                {listItems.map((item) => <li key={v4()}>{item}.</li>)}
            </ul>
        }
        {secondParagraph && <p className={'mb-4'}>{secondParagraph}.</p>}
    </div>
)

export const SliderText = React.memo(SliderTextComponent)

import React from "react"
import { v4 } from "uuid"
import styles from "@/styles/Course.module.scss"
import { Text } from "@/models/course.models"

interface Props {
    text: string | undefined
    listItems: string[] | undefined
    texts: string[] | undefined
    terms: Text[] | undefined
}

const QuestionTextComponent: React.FC<Props> = ({ text, listItems, texts, terms }) => {
    return(
        <div className={`${styles['content__text']} rounded-xl`}>
            {text}
            {(text && listItems) &&
                <>
                    {text}
                    <ol className={'pl-7'}>
                        {listItems.map((value) => <li key={v4()}>{value}</li>)}
                    </ol>
                </>
            }
            {texts && texts.map((value) => <p key={v4()}>{value}</p>) }
            {terms &&
                <ul>
                    {terms.map((term) => (
                        <li key={v4()}>
                            <strong>{term.text}</strong> — {term.text}
                        </li>
                    ))}
                </ul>
            }
            {listItems &&
                <ul className={styles['simple-list']}>
                    {listItems.map((item) => <li className={'pl-2.5'} key={v4()}>{item}</li>)}
                </ul>
            }
        </div>
    )
}

export const QuestionText = React.memo(QuestionTextComponent)

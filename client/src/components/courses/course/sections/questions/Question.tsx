import React, { useState } from "react"
import styles from '@/styles/Course.module.scss'
import { IQuestion } from "@/models/course"
import { v4 } from "uuid"

const QuestionComponent: React.FC<IQuestion> = ({ title, terms, text, texts, listItems }) => {
    const [isOpened, setOpenedState] = useState(false)
    const clickListener = () => (isOpened) ? setOpenedState(false) : setOpenedState(true)

    return(
        <div className={`${styles['content__question']} ${isOpened ? styles['show-answer'] : ''} mb-1 pb-0.5`}>
            <div className={`${styles['content__title']} flex justify-between items-center cursor-pointer p-5`} onClick={clickListener}>
                <h3 className={'text-lg font-medium'}>{title}</h3>
                <button className={'w-8 h-8 flex justify-center items-center rounded-full'}>
                    <i className={'fa-solid fa-chevron-down'}/>
                </button>
            </div>
            <div className={`${styles['content__text']} rounded-xl`}>
                {text}
                {(text && listItems) &&
                    <>
                        {text}
                        <ol className={'pl-7'}>
                            {listItems.map((item, key) => <li className={''} key={key}>{item}</li>)}
                        </ol>
                    </>
                }
                {texts &&
                    texts.map((text) => <p key={v4()}>{text}</p>)
                }
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
        </div>
    )
}

export const Question = React.memo(QuestionComponent)

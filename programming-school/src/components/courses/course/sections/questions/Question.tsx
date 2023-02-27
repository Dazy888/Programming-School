import React, { useRef } from "react"
import styles from '@/styles/Course.module.scss'
import { QuestionI } from "@/interfaces/course"

const QuestionComponent: React.FC<QuestionI> = ({ title, terms, text, texts, listItems }) => {
    const textRef: any = useRef()

    function openQuestion() {
        const text = textRef.current

        if (text.classList.contains(styles['show-text'])) {
            text.classList.remove(styles['show-text'])
        } else {
            text.classList.add(styles['show-text'])
        }
    }

    return(
        <div className={`${styles['content__question']} mb-1 pb-0.5`}>
            <div className={`${styles['content__title']} flex justify-between items-center cursor-pointer p-5`} onClick={openQuestion}>
                <h3 className={'text-lg font-medium'}>{title}</h3>
                <button className={'w-8 h-8 flex justify-center items-center rounded-full'}>
                    <i className={'fa-solid fa-chevron-down'}/>
                </button>
            </div>
            <div ref={textRef} className={`${styles['content__text']} rounded-xl`}>
                {(text) && text}
                {(text && listItems &&
                    <>
                        {text}
                        <ol className={'pl-7'}>
                            {listItems.map((item, key) => <li className={''} key={key}>{item}</li>)}
                        </ol>
                    </>
                )}
                {texts &&
                    texts.map((text, key) =>
                        <>
                            <p key={key}>{text}</p>
                        </>
                    )
                }
                {terms &&
                    <ul>
                        {terms.map((term, key) =>
                                <>
                                    <li key={key}>
                                        <strong>{term.term}</strong> — {term.text}
                                    </li>
                                </>
                            )
                        }
                    </ul>
                }
                {listItems &&
                    <ul className={styles['simple-list']}>
                        {listItems.map((item, key) => <li className={'pl-2.5'} key={key}>{item}</li>)}
                    </ul>
                }
            </div>
        </div>
    )
}

export const Question = React.memo(QuestionComponent)
import React, { useEffect, useRef, useState } from "react"
import styles from '@/styles/Course.module.scss'
import { CourseAttr } from "@/models/course"

interface Props {
    title: string
    number: number
    listItems?: string[]
    text?: string
    subtitle?: string
    courseAttr: CourseAttr
}

const ProgramItemComponent: React.FC<Props> = ({ title, number, listItems, text, subtitle }) => {
    const titleRef: any = useRef()

    const [buttonClass, setButtonClass] = useState('')
    const [openedClass, setOpenedClass] = useState('hidden')

    const clickListener = () => {
        if (buttonClass === '') {
            setButtonClass(styles['rotate'])
            setOpenedClass('')
        } else {
            setButtonClass('')
            setOpenedClass('hidden')
        }
    }

    useEffect(() => {
        const title = titleRef.current
        const titleBtn = title.querySelector('button')
        if (titleBtn) title.style.cursor = 'pointer'
    })

    return(
        <div className={styles['content__item']}>
            <div ref={titleRef} onClick={clickListener} className={`${styles['content__title']} flex justify-between items-center text-xl font-semibold py-7`}>
                <h1>{number}. {title}</h1>
                {(listItems || text) &&
                    <button className={`${buttonClass} w-8 h-8 flex justify-center items-center rounded-full`}>
                        <i className={"fa-solid fa-plus"}/>
                    </button>
                }
            </div>
            <div className={`${styles['content__item-program']} ${openedClass}`}>
                {listItems &&
                    <>
                        {subtitle && <p className={'text-lg mb-7 w-9/12'}>{subtitle}</p>}
                        <ul className={'pl-5'}>
                            {...listItems.map((text, key) => <li className={'text-lg pl-5 mb-7 relative'} key={key}>{text}</li>)}
                        </ul>
                    </>
                }
                {text && <p className={'text-lg mb-7 w-9/12 pl-5'}>{text}</p>}
            </div>
        </div>
    )
}

export const ProgramItem = React.memo(ProgramItemComponent)

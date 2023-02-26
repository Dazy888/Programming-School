import React from "react"
import styles from "@/styles/Home.module.scss"
// Components
import { ContentColumn } from "@/components/home/main/sections/training-program/ContentColumn"
import { ContentItem } from "@/components/home/main/sections/training-program/ContentItem"
// Interface
import { TrainingProgramItemI } from "@/interfaces/home"

interface Props {
    smallResolution: boolean
    content: TrainingProgramItemI[]
    firstColumnContent: TrainingProgramItemI[]
    secondColumnContent: TrainingProgramItemI[]
}

const ContentComponent: React.FC<Props> = ({ smallResolution, content, secondColumnContent, firstColumnContent }) => {
    return(
        <div className={`${styles['content']} flex justify-center items-center`}>
            {smallResolution
                ?   <>
                        <div className={styles['content__column']}>
                            {...content.map((item, key) => <ContentItem key={key} month={item.month} text={item.text} rightLinePosition={true}/>)}
                        </div>
                        <hr className={styles['content__line']}/>
                    </>
                :   <>
                        <ContentColumn content={firstColumnContent}/>
                        <hr className={`${styles['content__line']} w-1.5`}/>
                        <ContentColumn content={secondColumnContent}/>
                    </>
            }
        </div>
    )
}

export const Content = React.memo(ContentComponent)
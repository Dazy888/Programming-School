import React from "react"
// Styles
import styles from "@/styles/Home.module.scss"
// Components
import { ContentColumn } from "@/components/home/main/sections/training-program/ContentColumn"
import { ContentItem } from "@/components/home/main/sections/training-program/ContentItem"
// Model
import { TrainingProgramItem } from "@/models/home"

interface Props {
    smallResolution: boolean
    content: TrainingProgramItem[]
    firstColumnContent: TrainingProgramItem[]
    secondColumnContent: TrainingProgramItem[]
}

const ContentComponent: React.FC<Props> = ({ smallResolution, content, secondColumnContent, firstColumnContent }) => {
    return(
        <div className={`${styles.content} flex justify-center items-center`}>
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

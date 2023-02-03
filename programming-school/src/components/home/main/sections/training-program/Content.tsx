import React from "react"
import styles from "@/styles/Home.module.scss"
// Components
import { ContentColumn } from "@/components/home/main/sections/training-program/ContentColumn"
import { ColumnItem } from "@/components/home/main/sections/training-program/ColumnItem"
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
        <div className={`${styles['training-program__content']} flex-center`}>
            {smallResolution
                ?   <>
                        <div className={styles['training-program__column']}>
                            {...content.map((item, key) => <ColumnItem key={key} month={item.month} text={item.text} rightLinePosition={true}/>)}
                        </div>
                        <hr className={styles['training-program__line']}/>
                    </>
                :   <>
                        <ContentColumn content={firstColumnContent}/>
                        <hr className={styles['training-program__line']}/>
                        <ContentColumn content={secondColumnContent}/>
                    </>
            }
        </div>
    )
}

export const Content = React.memo(ContentComponent)
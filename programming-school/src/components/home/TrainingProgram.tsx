import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
// Styles
import styles from "@/styles/Index.module.scss"
// Components
import { Title} from "@/components/home/Title"
import { TrainingProgramColumn } from "@/components/home/TrainingProgramColumn"
import { TrainingProgramItem } from "@/components/home/TrainingProgramItem";
// Store
import { getTrainingProgramFirstColumnContent, getTrainingProgramSecondColumnContent } from "@/store/reducers/home/home-selectors"

const TrainingProgramComponent = () => {
    const firstColumnContent = useSelector(getTrainingProgramFirstColumnContent)
    const secondColumnContent = useSelector(getTrainingProgramSecondColumnContent)


    const content = [...firstColumnContent, ...secondColumnContent]
    content.sort((a, b) => a.month > b.month ? 1 : -1);

    const [isPhone, setPhoneStatus] = useState(false)

    useEffect(() => {
        window.onresize = () => {
            if (window.innerWidth <= 427) {
                setPhoneStatus(true)
            } else {
                setPhoneStatus(false)
            }
        }
    }, [])

    return(
        <section id={styles['training-program']}>
            <Title column={true} title={'Training program'} text={'This is our training program developed by the bests teachers'}/>
            {isPhone
                ?   <div className={`${styles['training-program__content']} flex-center`}>
                        <div className={styles['training-program__column']}>
                            {...content.map((item, key) => <TrainingProgramItem key={key} month={item.month} text={item.text} rightLinePosition={true}/>)}
                        </div>
                        <hr className={styles['training-program__line']}/>
                    </div>
                :   <div className={`${styles['training-program__content']} flex-center`}>
                        <TrainingProgramColumn content={firstColumnContent}/>
                        <hr className={styles['training-program__line']}/>
                        <TrainingProgramColumn content={secondColumnContent}/>
                    </div>
            }
        </section>
    )
}

export const TrainingProgram = React.memo(TrainingProgramComponent)
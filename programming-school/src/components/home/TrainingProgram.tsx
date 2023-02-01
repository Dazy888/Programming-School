import React, {useEffect, useState} from "react"
// Styles
import styles from "@/styles/Index.module.scss"
// Components
import { Title} from "@/components/home/Title"
import { TrainingProgramColumn } from "@/components/home/TrainingProgramColumn"
import { TrainingProgramItem } from "@/components/home/TrainingProgramItem";
// Interface
import { TrainingProgramItemI } from "@/interfaces/home"

const TrainingProgramComponent = () => {
    const FirstColumnContent: TrainingProgramItemI[] = [
        {
            month: 1,
            text:  'Meeting teachers and learning the basics of programming',
            rightLinePosition: true
        },
        {
            month: 3,
            text:  'Deepening into programming and building a portfolio',
            rightLinePosition: true
        },
        {
            month: 5,
            text:  'Continue to study complex technologies and create a good portfolio',
            rightLinePosition: true
        },
        {
            month: 7,
            text:  'Writing the final work, obtaining a certificate and the first work',
            rightLinePosition: true
        },
    ]

    const SecondsColumnContent: TrainingProgramItemI[] = [
        {
            month: 2,
            text:  'Thoroughly study the basics of programming and perform simple tasks',
            rightLinePosition: false
        },
        {
            month: 4,
            text:  'Build portfolio and start studying complex technologies',
            rightLinePosition: false
        },
        {
            month: 6,
            text:  'Finish studying programming and build a good portfolio',
            rightLinePosition: false
        },
    ]

    const content = [...FirstColumnContent, ...SecondsColumnContent]
    content.sort((a, b) => a.month > b.month ? 1 : -1);

    const [isPhone, setPhoneStatus] = useState(false)

    useEffect(() => {
        window.onresize = () => {
            console.log(window.innerWidth)

            if (window.innerWidth <= 426) {
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
                        <TrainingProgramColumn content={FirstColumnContent}/>
                        <hr className={styles['training-program__line']}/>
                        <TrainingProgramColumn content={SecondsColumnContent}/>
                    </div>
            }
        </section>
    )
}

export const TrainingProgram = React.memo(TrainingProgramComponent)
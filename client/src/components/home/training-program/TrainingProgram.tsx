import React, { useEffect, useState } from "react"
import styles from "@/styles/Home.module.scss"
import { useAppSelector } from "@/hooks/redux"
import { Title} from "@/components/home/Title"
import { Content } from "@/components/home/training-program/Content"

const TrainingProgramSection = () => {
    const firstColumnContent = useAppSelector(state => state.homeReducer.trainingProgramFirstColumn)
    const secondColumnContent = useAppSelector(state => state.homeReducer.trainingProgramSecondColumn)

    const content = [...firstColumnContent, ...secondColumnContent]
    content.sort((a, b) => (a.month > b.month) ? 1 : -1)

    const [smallResolution, setSmallResolution] = useState(false)
    const checkResolution = (resolution: number) => (window.innerWidth <= resolution) ? setSmallResolution(true) : setSmallResolution(false)

    useEffect(() => {
        checkResolution(515)
        window.onresize = () => checkResolution(470)
    }, [])

    return(
        <section id={styles['training-program']} className={'mt-48'}>
            <Title column={true} title={'Training program'} text={'This is our training program developed by the bests speakers'}/>
            <Content {...{ content, firstColumnContent, secondColumnContent, smallResolution }} />
        </section>
    )
}

export default React.memo(TrainingProgramSection)

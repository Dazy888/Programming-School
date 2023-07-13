import React from "react"
import { v4 } from "uuid"
import styles from '@/styles/Course.module.scss'
import { Swiper, SwiperSlide } from "swiper/react"
import { ISpeaker } from "@/models/course.models"
// Components
import { TitleText } from "@/components/layout/TitleText"
import { Speaker } from "@/components/courses/course/sections/speakers/Speaker"

interface Props {
    speakers: ISpeaker[]
}

const SpeakersSection: React.FC<Props> = ({ speakers }) => {
    const breakpoints = {
        0: { slidesPerView: 1.05 },
        375: { slidesPerView: 1.3 },
        460: { slidesPerView: 1.6 },
        540: { slidesPerView: 1.9 },
        660: { slidesPerView: 2.3 },
        1024: { slidesPerView: 2.9 },
        1440: { slidesPerView: 4 }
    }

    return(
        <div id={styles.speakers} className={'mb-32'}>
            <TitleText text={'Speakers'}/>
            <Swiper grabCursor={true} className={'mt-12'} breakpoints={breakpoints}>
                {speakers.map(({ text, imgSrc, additionalInfo, fullName}, index) =>
                    <SwiperSlide key={v4()}>
                        <Speaker {...{ index, text, imgSrc, fullName, additionalInfo }} />
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default React.memo(SpeakersSection)

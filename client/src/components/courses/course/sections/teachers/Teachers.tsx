import React from "react"
import styles from '@/styles/Course.module.scss'
import { TitleText } from "@/components/layout/TitleText"
import { Teacher } from "@/components/courses/course/sections/teachers/Teacher"
import { Swiper, SwiperSlide } from "swiper/react"
import { ITeacher } from "@/models/course"
import { v4 } from "uuid"

interface Props {
    teachers: ITeacher[]
}

const TeachersSection: React.FC<Props> = ({ teachers }) => {
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
        <div id={styles.teachers} className={'mb-32'}>
            <TitleText text={'Speakers'}/>
            <Swiper grabCursor={true} className={'mt-12'} breakpoints={breakpoints}>
                {teachers.map(({ text, imgSrc, additionalInfo, fullName}, index) =>
                    <SwiperSlide key={v4()}>
                        <Teacher index={index} imgSrc={imgSrc} fullName={fullName} text={text} additionalInf={additionalInfo}/>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default React.memo(TeachersSection)

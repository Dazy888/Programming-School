import React, { useEffect, useState } from "react"
// Styles
import styles from '@/styles/Course.module.scss'
// Component
import { TitleText } from "@/components/common/TitleText"
import { Teacher } from "@/components/courses/course/sections/teachers/Teacher"
// Swiper
import { Swiper, SwiperSlide } from "swiper/react"
// Model
import { ITeacher } from "@/models/course"

interface Props {
    teachers: ITeacher[]
}

const TeachersSection: React.FC<Props> = ({ teachers }) => {
    const [slidesPerView, setSlidesPerView] = useState(4)

    const SlidesPerViewListener = () => {
        if (window.innerWidth <= 375) {
            setSlidesPerView(1.05)
        } else if (window.innerWidth <= 460) {
            setSlidesPerView(1.3)
        } else if (window.innerWidth <= 540) {
            setSlidesPerView(1.6)
        } else if (window.innerWidth <= 660) {
            setSlidesPerView(1.9)
        } else if (window.innerWidth <= 1024) {
            setSlidesPerView(2.3)
        } else if (window.innerWidth <= 1440) {
            setSlidesPerView(2.9)
        } else {
            setSlidesPerView(4)
        }
    }

    useEffect(() => {
        SlidesPerViewListener()
        window.onresize = SlidesPerViewListener
    })

    return(
        <div id={styles.teachers} className={'mb-32'}>
            <TitleText text={'Speakers'}/>
            <Swiper className={'mt-12'} slidesPerView={slidesPerView}>
                {teachers.map((teacher, key) =>
                    <SwiperSlide>
                        <Teacher key={key} imgSrc={teacher.imgSrc} fullName={teacher.fullName} text={teacher.text} additionalInf={teacher.additionalInfo}/>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export const Teachers = React.memo(TeachersSection)

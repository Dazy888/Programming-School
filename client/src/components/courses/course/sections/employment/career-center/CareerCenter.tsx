import React from "react"
import styles from "@/styles/Course.module.scss"
import { CareerCenterSlide } from "@/components/courses/course/sections/employment/career-center/CareerCenterSlide"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'

const CareerCenterComponent = () => {
    const breakpoints = {
        0: { slidesPerView: 2.7 },
        1150: { slidesPerView: 3 },
        1300: { slidesPerView: 3.5 },
        1440: { slidesPerView: 3.9 }
    }

    return(
        <div className={`${styles['career-center']} mt-24 mb-16 w-full`}>
            <h1 className={'text-3xl font-bold mb-10'}>How the Career Center can help you:</h1>
            <Swiper grabCursor={true} breakpoints={breakpoints}>
                <SwiperSlide>
                    <CareerCenterSlide margin={styles['first-slide']} number={1} title={'CV'} subtitle={'We present you to employers from a profitable side.'}
                                       hiddenText={'We will hold an online meeting where we will evaluate your strengths, skills and professional experience. We will help you create a profile on job sites and develop an attractive resume that will definitely impress employers.'} />
                </SwiperSlide>
                <SwiperSlide>
                    <CareerCenterSlide bgColor={styles['second']} number={2} title={'Individual career plan'} subtitle={'We will tell you how to start and develop a career.'}
                                       hiddenText={"We will conduct an online consultation, define your goals and tell you how to achieve them. We will form an individual path of your development in the profession. You will learn where to look for work and what skills to develop to advance in your career."} />
                </SwiperSlide>
                <SwiperSlide>
                    <CareerCenterSlide bgColor={styles['third']} number={3} title={'Partner vacancies'} subtitle={'We will recommend your candidacy to partners'}
                                       hiddenText={'You will have access to a private chat with vacancies of our partners. You will be able to select suitable offers, and the consultant will help you write a cover letter and prepare for an interview. Your candidacy will be considered among the first.'} />
                </SwiperSlide>
                <SwiperSlide>
                    <CareerCenterSlide bgColor={styles['fourth']} number={4} title={'Portfolio design'} subtitle={'Let us help you present your projects effectively'}
                                       hiddenText={'We will tell you how to create a selling portfolio. Together we will select attractive works and submit them to an expert for review. We will help you design projects in such a way that employers will appreciate them.'} />
                </SwiperSlide>
                <SwiperSlide>
                    <CareerCenterSlide margin={styles['last-slide']} bgColor={styles['fifth']} number={5} title={'Career advice'} subtitle={'Prepare you to start your career'}
                                       hiddenText={'Consultants will answer your career questions, prepare you for interviews and collect feedback from employers. You will learn how to behave in an interview and avoid mistakes when looking for a job. Participate in career workshops and webinars.'} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export const CareerCenter = React.memo(CareerCenterComponent)

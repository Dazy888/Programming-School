import React, { useEffect, useState } from "react"
// Styles
import styles from "@/styles/Course.module.scss"
// Slider
import { Swiper, SwiperSlide } from "swiper/react"
import { Slide } from "@/components/courses/course/sections/employment/Slide"
import 'swiper/css'

const CareerCenterComponent = () => {
    const [isSlider, setSlider] = useState(true)
    const [slidesPerView, setSlidesPerView] = useState(3.9)

    useEffect(() => {
        window.onresize = () => {
            if (window.innerWidth <= 1024) {
                setSlider(false)
            } else if (window.innerWidth <= 1440) {
                setSlidesPerView(2.8)
                setSlider(true)
            }
        }
    }, [])

    return(
        <div className={`${styles['employment__career-center']} mt-24 mb-16 w-full`}>
            <h1 className={'text-3xl font-bold mb-10'}>How the Career Center can help you:</h1>
            {isSlider
                ?   <Swiper slidesPerView={slidesPerView} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
                    <SwiperSlide>
                        <Slide margin={styles['first-slide']} number={1} hiddenText={'We will hold an online meeting where we will evaluate your strengths, skills and professional experience. We will help you create a profile on job sites and develop an attractive resume that will definitely impress employers'} title={'CV'} subtitle={'We present you to employers from a profitable side'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slide bgColor={styles['second']} number={2} hiddenText={"We will conduct an online consultation, define your goals and tell you how to achieve them. We will form an individual path of your development in the profession. You will learn where to look for work and what skills to develop to advance in your career"} title={'Individual career plan'} subtitle={'We will tell you how to start and develop a career'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slide bgColor={styles['third']} number={3} hiddenText={'You will have access to a private chat with vacancies of our partners. You will be able to select suitable offers, and the consultant will help you write a cover letter and prepare for an interview. Your candidacy will be considered among the first'} title={'Partner vacancies'} subtitle={'We will recommend your candidacy to partners'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slide bgColor={styles['fourth']} number={4} hiddenText={'We will tell you how to create a selling portfolio. Together we will select attractive works and submit them to an expert for review. We will help you design projects in such a way that employers will appreciate them'} title={'Portfolio design'} subtitle={'Let us help you present your projects effectively'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slide margin={styles['last-slide']} bgColor={styles['fifth']} number={5} hiddenText={'Consultants will answer your career questions, prepare you for interviews and collect feedback from employers. You will learn how to behave in an interview and avoid mistakes when looking for a job. Participate in career workshops and webinars'} title={'Career advice'} subtitle={'Prepare you to start your career'}/>
                    </SwiperSlide>
                </Swiper>
                :   <div>
                    <Slide isSlider={false} margin={styles['first-slide']} number={1} hiddenText={'We will hold an online meeting where we will evaluate your strengths, skills and professional experience. We will help you create a profile on job sites and develop an attractive resume that will definitely impress employers'} title={'CV'} subtitle={'We present you to employers from a profitable side'}/>
                    <Slide isSlider={false} bgColor={styles['second']} number={2} hiddenText={"We will conduct an online consultation, define your goals and tell you how to achieve them. We will form an individual path of your development in the profession. You will learn where to look for work and what skills to develop to advance in your career"} title={'Individual career plan'} subtitle={'We will tell you how to start and develop a career'}/>
                    <Slide isSlider={false} bgColor={styles['third']} number={3} hiddenText={'You will have access to a private chat with vacancies of our partners. You will be able to select suitable offers, and the consultant will help you write a cover letter and prepare for an interview. Your candidacy will be considered among the first'} title={'Partner vacancies'} subtitle={'We will recommend your candidacy to partners'}/>
                    <Slide isSlider={false} bgColor={styles['fourth']} number={4} hiddenText={'We will tell you how to create a selling portfolio. Together we will select attractive works and submit them to an expert for review. We will help you design projects in such a way that employers will appreciate them'} title={'Portfolio design'} subtitle={'Let us help you present your projects effectively'}/>
                    <Slide isSlider={false} margin={styles['last-slide']} bgColor={styles['fifth']} number={5} hiddenText={'Consultants will answer your career questions, prepare you for interviews and collect feedback from employers. You will learn how to behave in an interview and avoid mistakes when looking for a job. Participate in career workshops and webinars'} title={'Career advice'} subtitle={'Prepare you to start your career'}/>
                </div>
            }
        </div>
    )
}

export const CareerCenter = React.memo(CareerCenterComponent)
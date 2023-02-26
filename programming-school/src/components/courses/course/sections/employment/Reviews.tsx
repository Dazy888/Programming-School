import React, { useEffect, useState } from "react"
// Styles
import styles from '@/styles/Course.module.scss'
// Swiper
import { Swiper, SwiperSlide } from "swiper/react"
import { ReviewsSlide } from "@/components/courses/course/sections/employment/ReviewsSlide"
// Interface
import { SliderProps } from "@/interfaces/course"

const ReviewsComponent: React.FC<SliderProps> = ({ isSlider }) => {
    const [slidesPerView, setSlidesPerView] = useState(2.7)

    useEffect(() => {
        (window.innerWidth <= 1440) ? setSlidesPerView(2) : setSlidesPerView(2.7)
        window.onresize = () => (window.innerWidth <= 1440) ? setSlidesPerView(2) : setSlidesPerView(2.7)
    }, [])

    return(
        <div className={`${styles['employment__reviews']} mt-16`}>
            <h1 className={'text-3xl font-bold mb-9'}>Feedback from employers</h1>
            {isSlider
                ?   <Swiper slidesPerView={slidesPerView}>
                        <SwiperSlide>
                            <ReviewsSlide imgSrc={'/courses/course/reviews/yulia-manager.png'} name={'Yulia Iliaeva'} profession={'Development director Team for Dream'} text={'Candidates are always distinguished by their high motivation, so we are happy to invite them for internships and job offers. For several times already, we have accepted participants in the course "Profession Event Manager" for Junior positions'}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReviewsSlide imgSrc={'/courses/course/reviews/max.png'} name={'Max Zubcov'} profession={'Marketing director at Checkroi'} text={'This school select candidates with burning eyes and a desire to develop. For example, the head of our SEO department was once a newbie whom we met through the Career Center'}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReviewsSlide imgSrc={'/courses/course/reviews/roman.png'} name={'Roman Gorbachev'} profession={'Founder of Logomashina Design Studio'} text={'When we were invited as speakers to this school, we decided that this was a great chance to replenish the team with talented specialists. Now we have several designers working for us, and we are very pleased with them'}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReviewsSlide imgSrc={'/courses/course/reviews/olga.png'} name={'Olga Novodvorskaya'} profession={'HR BP in Nauka'} text={'Cooperation with them is a guarantee that we will get future employees with certain knowledge. The beginners who came to us grew up and approached the Middle level after 8 months'}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReviewsSlide imgSrc={'/courses/course/reviews/bogdan.png'} name={'Bogdan Pilipenko'} profession={'Account manager at Appollo Digital'} text={'This school helps you find enterprising beginners who are interested in simple but valuable tasks. After completing the courses, the guys leave with structured, fresh knowledge in the disciplines'}/>
                        </SwiperSlide>
                    </Swiper>
                :   <div>
                        <ReviewsSlide imgSrc={'/courses/course/reviews/yulia-manager.png'} name={'Yulia Iliaeva'} profession={'Development director Team for Dream'} text={'Candidates are always distinguished by their high motivation, so we are happy to invite them for internships and job offers. For several times already, we have accepted participants in the course "Profession Event Manager" for Junior positions'}/>
                        <ReviewsSlide imgSrc={'/courses/course/reviews/max.png'} name={'Max Zubcov'} profession={'Marketing director at Checkroi'} text={'This school select candidates with burning eyes and a desire to develop. For example, the head of our SEO department was once a newbie whom we met through the Career Center'}/>
                        <ReviewsSlide imgSrc={'/courses/course/reviews/roman.png'} name={'Roman Gorbachev'} profession={'Founder of Logomashina Design Studio'} text={'When we were invited as speakers to this school, we decided that this was a great chance to replenish the team with talented specialists. Now we have several designers working for us, and we are very pleased with them'}/>
                        <ReviewsSlide imgSrc={'/courses/course/reviews/olga.png'} name={'Olga Novodvorskaya'} profession={'HR BP in Nauka'} text={'Cooperation with them is a guarantee that we will get future employees with certain knowledge. The beginners who came to us grew up and approached the Middle level after 8 months'}/>
                        <ReviewsSlide imgSrc={'/courses/course/reviews/bogdan.png'} name={'Bogdan Pilipenko'} profession={'Account manager at Appollo Digital'} text={'This school helps you find enterprising beginners who are interested in simple but valuable tasks. After completing the courses, the guys leave with structured, fresh knowledge in the disciplines'}/>
                    </div>
            }
        </div>
    )
}

export const Reviews = React.memo(ReviewsComponent)
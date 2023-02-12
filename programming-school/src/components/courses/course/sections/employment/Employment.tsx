import React from "react"
// Styles
import styles from '@/styles/Course.module.scss'
// Components
import { Header } from "@/components/courses/course/sections/employment/Header"
import { CareerCenter } from "@/components/courses/course/sections/employment/CareerCenter"
import {Guarantees} from "@/components/courses/course/sections/employment/Guarantees";

interface Props {
    courseAttr: any
}

const EmploymentComponent: React.FC<Props> = ({ courseAttr }) => {

    return(
        <section id={styles['employment']} className={'rounded-xl'}>
            <div className={`${styles['employment__container']} max-w-7xl mx-auto`}>
                <Header/>
            </div>
            <CareerCenter/>
            <div className={`${styles['employment__container']} max-w-7xl mx-auto`}>
                <Guarantees/>
            </div>
            {/*<div className={'employment__reviews'} ref={reviewsRef}>
                <h1 className={'title'}>Feedback from employers</h1>
                <Swiper slidesPerView={3}>
                    <SwiperSlide>
                        <div className={'item__title flex-property-set_between'}>
                            <img alt={'Avatar'} src={'https://248006.selcdn.ru/LandGen/c327a71b570e945f4b1c2ec8aca6c559bc81b0d6.png'}/>
                            <div className={'title__text'}>
                                <h3 className={'subtitle'}>Yulia Iliaeva</h3>
                                <p className={'light-grey-txt'}>Development director Team for Dream</p>
                            </div>
                        </div>
                        <p className={'light-grey-txt'}>Candidates are always distinguished by their high motivation, so we are happy to invite them for internships and job offers. For several times already, we have accepted participants in the course "Profession Event Manager" for Junior positions</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={'item__title flex-property-set_between'}>
                            <img alt={'Avatar'} src={'https://248006.selcdn.ru/LandGen/3e574a760e482658dd9e52c39903f369233e0297.png'}/>
                            <div className={'title__text'}>
                                <h3 className={'subtitle'}>Max Zubcov</h3>
                                <p className={'light-grey-txt'}>Marketing director at Checkroi</p>
                            </div>
                        </div>
                        <p className={'light-grey-txt'}>Skillbox select candidates with burning eyes and a desire to develop. For example, the head of our SEO department was once a newbie whom we met through the Career Center</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={'item__title flex-property-set_between'}>
                            <img alt={'Avatar'} src={'https://248006.selcdn.ru/LandGen/ae9a2170705a4b6510d8d02a43c811ce23d7191c.jpeg'}/>
                            <div className={'title__text'}>
                                <h3 className={'subtitle'}>Roman Gorbachev</h3>
                                <p className={'light-grey-txt'}>Founder of Logomashina Design Studio</p>
                            </div>
                        </div>
                        <p className={'light-grey-txt'}>When we were invited as speakers to Skillbox, we decided that this was a great chance to replenish the team with talented specialists. Now we have several designers working for us, and we are very pleased with them</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={'item__title flex-property-set_between'}>
                            <img alt={'Avatar'} src={'https://248006.selcdn.ru/LandGen/8c4789ef5438268b23a77155558dbc9dc6d8ab9a.jpg'}/>
                            <div className={'title__text'}>
                                <h3 className={'subtitle'}>Olga Novodvorskaya</h3>
                                <p className={'light-grey-txt'}> HR BP in Nauka</p>
                            </div>
                        </div>
                        <p className={'light-grey-txt'}>Cooperation with Skillbox is a guarantee that we will get future employees with certain knowledge. The beginners who came to us grew up and approached the Middle level after 8 months</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={'item__title flex-property-set_between'}>
                            <img alt={'Avatar'} src={'https://248006.selcdn.ru/LandGen/10b85ae059c5aba05bcfa23cc0bccba071bb6255.png'}/>
                            <div className={'title__text'}>
                                <h3 className={'subtitle'}>Bogdan Pilipenko</h3>
                                <p className={'light-grey-txt'}>Account manager at Appollo Digital</p>
                            </div>
                        </div>
                        <p className={'light-grey-txt'}>Skillbox helps you find enterprising beginners who are interested in simple but valuable tasks. After completing the courses, the guys leave with structured, fresh knowledge in the disciplines</p>
                    </SwiperSlide>
                </Swiper>
                <SliderControls className={classNames[2]} length={3} id={reviewsId} changeId={changeReviewsId}/>
            </div>*/}
        </section>
    )
}

export const Employment = React.memo(EmploymentComponent)
import {SliderControls} from "../Projects/Projects";
import React, {useEffect, useState} from "react";

type PropsType = {
    classNames?: Array<string>
}

let marginLeft: any = 0

export function Employment({classNames = ['']}: PropsType) {
    const [guaranteesId, changeGuaranteesId] = useState(0)
    const [reviewsId, changeReviewsId] = useState(0)
    const careerCenterRef: any = React.createRef()
    const reviewsRef: any = React.createRef()

    useEffect(() => {
        const careerCenter = careerCenterRef.current
        const reviews = reviewsRef.current

        const careerCenterButtons = careerCenter.querySelectorAll('.controls__btn')
        const careerCenterSlider = careerCenter.querySelector('.slider__list')

        careerCenterButtons[0].onclick = () => careerCenterSlider.classList.remove('moveRight')
        careerCenterButtons[1].onclick = () => careerCenterSlider.classList.add('moveRight')

        const reviewsButtons = reviews.querySelectorAll('.controls__btn')
        const reviewsSlider = reviews.querySelector('.slider__list')

        reviewsButtons[0].onclick = () => {
            (reviewsId === 2) ? marginLeft = marginLeft + 300 : marginLeft = marginLeft + 500
            reviewsSlider.style.marginLeft = marginLeft + 'px'
        }

        reviewsButtons[1].onclick = () => {
            (reviewsId === 2) ? marginLeft = marginLeft - 300 : marginLeft = marginLeft - 500
            reviewsSlider.style.marginLeft = marginLeft + 'px'
        }
    }, [reviewsId])

    return(
        <div className={'employment'}>
            <div className={'employment__wrapper'}>
                <div className={'employment__header flex-property-set_between'}>
                    <div className={'header__text'}>
                        <h1 className={'title'}>Employment or money back</h1>
                        <p className={'light-grey-txt'}>You will receive individual support from an HR specialist. Together you will create a resume, prepare a portfolio and develop a career plan that will help you find a job faster. You will be able to choose attractive vacancies and get priority over other applicants.<br/><br/>If you do not show up for work, we will refund your money for the course</p>
                    </div>
                    <div className={'header__photographs flex-property-set_center'}>
                        <img className={'photographs__main'} alt={'Img'} src={'https://248006.selcdn.ru/LandGen/blocks/work/v4/center-sm.png'}/>
                        <img className={'photographs__medium top-left'} alt={'Img'} src={'https://248006.selcdn.ru/LandGen/blocks/work/v4/top-left-sm.png'}/>
                        <img className={'photographs__medium bottom-right'} alt={'Img'} src={'https://248006.selcdn.ru/LandGen/blocks/work/v4/bottom-right-sm.png'}/>
                        <img className={'photographs__small top-right'} alt={'Img'} src={'https://248006.selcdn.ru/LandGen/blocks/work/v4/top-right-sm.png'}/>
                        <img className={'photographs__small bottom-left'} alt={'Img'} src={'https://248006.selcdn.ru/LandGen/blocks/work/v4/bottom-left-sm.png'}/>
                        <img className={'photographs__very-small aic'} alt={'Img'} src={'https://248006.selcdn.ru/LandGen/blocks/work/v4/logo-aic-sm.png'}/>
                        <img className={'photographs__very-small mailru'} alt={'Img'} src={'https://248006.selcdn.ru/LandGen/blocks/work/v4/logo-mailru-sm.png'}/>
                        <img className={'photographs__very-small vk'} alt={'Img'} src={'https://248006.selcdn.ru/LandGen/blocks/work/v4/logo-vk-sm.png'}/>
                        <img className={'photographs__very-small youla'} alt={'Img'} src={'https://248006.selcdn.ru/LandGen/blocks/work/v4/logo-youla-sm.png'}/>
                    </div>
                </div>
                <div className={'employment__career-center'} ref={careerCenterRef}>
                    <h1 className={'title'}>How the Career Center can help you:</h1>
                    <div className={'career-center__slider'}>
                        <ul className={'slider__list'}>
                            <li className={'list__item'}>
                                <span className={'item__circle flex-property-set_center'}>
                                    <p className={'circle__number'}>1</p>
                                </span>
                                <p className={'invisible-text'}>We will hold an online meeting where we will evaluate your strengths, skills and professional experience. We will help you create a profile on job sites and develop an attractive resume that will definitely impress employers</p>
                                <div className={'item__txt'}>
                                    <h3 className={'small-title'}>Resume</h3>
                                    <p className={'light-grey-txt'}>We present you to employers from a profitable side</p>
                                </div>
                            </li>
                            <li className={'list__item'}>
                                <span className={'item__circle flex-property-set_center'}>
                                    <p className={'circle__number'}>2</p>
                                </span>
                                <p className={'invisible-text'}>We will conduct an online consultation, define your goals and tell you how to achieve them. We will form an individual path of your development in the profession. You will learn where to look for work and what skills to develop to advance in your career</p>
                                <div className={'item__txt'}>
                                    <h3 className={'small-title'}>Individual career plan</h3>
                                    <p className={'light-grey-txt'}>We will tell you how to start and develop a career</p>
                                </div>
                            </li>
                            <li className={'list__item'}>
                                <span className={'item__circle flex-property-set_center'}>
                                    <p className={'circle__number'}>3</p>
                                </span>
                                <p className={'invisible-text'}>You will have access to a private chat with vacancies of our partners. You will be able to select suitable offers, and the consultant will help you write a cover letter and prepare for an interview. Your candidacy will be considered among the first</p>
                                <div className={'item__txt'}>
                                    <h3 className={'small-title'}>Partner vacancies</h3>
                                    <p className={'light-grey-txt'}>We will recommend your candidacy to partners</p>
                                </div>
                            </li>
                            <li className={'list__item'}>
                                <span className={'item__circle flex-property-set_center'}>
                                    <p className={'circle__number'}>4</p>
                                </span>
                                <p className={'invisible-text'}>We will tell you how to create a selling portfolio. Together we will select attractive works and submit them to an expert for review. We will help you design projects in such a way that employers will appreciate them</p>
                                <div className={'item__txt'}>
                                    <h3 className={'small-title'}>Portfolio design</h3>
                                    <p className={'light-grey-txt'}>Let us help you present your projects effectively</p>
                                </div>
                            </li>
                            <li className={'list__item'}>
                                <span className={'item__circle flex-property-set_center'}>
                                    <p className={'circle__number'}>5</p>
                                </span>
                                <p className={'invisible-text'}>Consultants will answer your career questions, prepare you for interviews and collect feedback from employers. You will learn how to behave in an interview and avoid mistakes when looking for a job. Participate in career workshops and webinars</p>
                                <div className={'item__txt'}>
                                    <h3 className={'small-title'}>Career advice</h3>
                                    <p className={'light-grey-txt'}>Prepare you to start your career</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <SliderControls className={classNames[2]} length={2} id={guaranteesId} changeId={changeGuaranteesId}/>
                </div>
                <div className={'employment__guarantees'}>
                    <div className={`guarantees__users ${classNames[0]}`}>
                        <div className={'users__title'}>
                            <h1 className={'title'}>1300</h1>
                            <h3 className={'small-title'}>users already employed in 2022</h3>
                        </div>
                        <div className={'users__item flex-property-set_between'}>
                            <h1 className={'subtitle'}>88%</h1>
                            <p className={'light-grey-txt'}>users find jobs after <br/> applying to the CRC</p>
                        </div>
                        <div className={'users__item flex-property-set_between'}>
                            <h1 className={'subtitle'}>100%</h1>
                            <p className={'light-grey-txt'}>join the company <br/> after an internship</p>
                        </div>
                    </div>
                    <div className={'guarantees__text'}>
                        <h1 className={'title'}>Why are we confident in your employment?</h1>
                        <div className={'text__item'}>
                            <h3 className={'small-title'}>Determine the needs of the market</h3>
                            <p className={'light-grey-txt'}>We carefully analyze the professions in which we help with employment: we interview specialists, evaluate vacancies, the need for candidates and the availability of the profession for beginners</p>
                        </div>
                        <div className={'text__item'}>
                            <h3 className={'small-title'}>We provide quality knowledge</h3>
                            <p className={'light-grey-txt'}>We help you get the skills you need here and now. All speakers are practitioners, and their knowledge is in demand in the market</p>
                        </div>
                        <div className={'text__item'}>
                            <h3 className={'small-title'}>Support at the start of a career</h3>
                            <p className={'light-grey-txt'}>Our consultants control every step of the way to your career. They help to avoid mistakes and plan a professional path</p>
                        </div>
                    </div>
                </div>
                <div className={'employment__reviews'} ref={reviewsRef}>
                    <h1 className={'title'}>Feedback from employers</h1>
                    <div className={'reviews__slider'}>
                        <ul className={'slider__list'}>
                            <div className={'list__item'}>
                                <div className={'item__title flex-property-set_between'}>
                                    <img alt={'Avatar'} src={'https://248006.selcdn.ru/LandGen/c327a71b570e945f4b1c2ec8aca6c559bc81b0d6.png'}/>
                                    <div className={'title__text'}>
                                        <h3 className={'subtitle'}>Yulia Iliaeva</h3>
                                        <p className={'light-grey-txt'}>Development director Team for Dream</p>
                                    </div>
                                </div>
                                <p className={'light-grey-txt'}>Candidates are always distinguished by their high motivation, so we are happy to invite them for internships and job offers. For several times already, we have accepted participants in the course "Profession Event Manager" for Junior positions</p>
                            </div>
                            <div className={'list__item'}>
                                <div className={'item__title flex-property-set_between'}>
                                    <img alt={'Avatar'} src={'https://248006.selcdn.ru/LandGen/3e574a760e482658dd9e52c39903f369233e0297.png'}/>
                                    <div className={'title__text'}>
                                        <h3 className={'subtitle'}>Max Zubcov</h3>
                                        <p className={'light-grey-txt'}>Marketing director at Checkroi</p>
                                    </div>
                                </div>
                                <p className={'light-grey-txt'}>Skillbox select candidates with burning eyes and a desire to develop. For example, the head of our SEO department was once a newbie whom we met through the Career Center</p>
                            </div>
                            <div className={'list__item'}>
                                <div className={'item__title flex-property-set_between'}>
                                    <img alt={'Avatar'} src={'https://248006.selcdn.ru/LandGen/ae9a2170705a4b6510d8d02a43c811ce23d7191c.jpeg'}/>
                                    <div className={'title__text'}>
                                        <h3 className={'subtitle'}>Roman Gorbachev</h3>
                                        <p className={'light-grey-txt'}>Founder of Logomashina Design Studio</p>
                                    </div>
                                </div>
                                <p className={'light-grey-txt'}>When we were invited as speakers to Skillbox, we decided that this was a great chance to replenish the team with talented specialists. Now we have several designers working for us, and we are very pleased with them</p>
                            </div>
                            <div className={'list__item'}>
                                <div className={'item__title flex-property-set_between'}>
                                    <img alt={'Avatar'} src={'https://248006.selcdn.ru/LandGen/8c4789ef5438268b23a77155558dbc9dc6d8ab9a.jpg'}/>
                                    <div className={'title__text'}>
                                        <h3 className={'subtitle'}>Olga Novodvorskaya</h3>
                                        <p className={'light-grey-txt'}> HR BP in Nauka</p>
                                    </div>
                                </div>
                                <p className={'light-grey-txt'}>Cooperation with Skillbox is a guarantee that we will get future employees with certain knowledge. The beginners who came to us grew up and approached the Middle level after 8 months</p>
                            </div>
                            <div className={'list__item'}>
                                <div className={'item__title flex-property-set_between'}>
                                    <img alt={'Avatar'} src={'https://248006.selcdn.ru/LandGen/10b85ae059c5aba05bcfa23cc0bccba071bb6255.png'}/>
                                    <div className={'title__text'}>
                                        <h3 className={'subtitle'}>Bogdan Pilipenko</h3>
                                        <p className={'light-grey-txt'}>Account manager at Appollo Digital</p>
                                    </div>
                                </div>
                                <p className={'light-grey-txt'}>Skillbox helps you find enterprising beginners who are interested in simple but valuable tasks. After completing the courses, the guys leave with structured, fresh knowledge in the disciplines</p>
                            </div>
                        </ul>
                    </div>
                    <SliderControls className={classNames[3]} length={4} id={reviewsId} changeId={changeReviewsId}/>
                </div>
            </div>
        </div>
    )
}
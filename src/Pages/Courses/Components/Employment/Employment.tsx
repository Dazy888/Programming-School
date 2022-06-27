import {SliderControls} from "../Projects/Projects";
import React, {useEffect, useState} from "react";

type PropsType = {
    className?: string
}

export function Employment({className = ''}: PropsType) {
    const [id, changeId] = useState(0)
    const employmentRef: any = React.createRef()

    useEffect(() => {
        const buttons = employmentRef.current.querySelectorAll('.controls__btn')
        const slider = employmentRef.current.querySelector('.slider__list')

        buttons[0].onclick = () => {
            slider.classList.remove('moveRight')
        }

        buttons[1].onclick = () => {
            slider.classList.add('moveRight')
        }
    }, [])

    return(
        <div className={'employment'} ref={employmentRef}>
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
                <div className={'employment__career-center'}>
                    <h2 className={'small-title'}>How the Career Center can help you:</h2>
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
                    <SliderControls className={className} length={2} id={id} changeId={changeId}/>
                </div>
            </div>
        </div>
    )
}
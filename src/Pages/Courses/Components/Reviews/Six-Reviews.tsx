import {ReviewsItem} from "./Reviews-Item"
import {SliderControls} from "../Projects/Projects"
import React, {useEffect} from "react"
import Swiper from "swiper"
import 'swiper/css'

export type ReviewsPropsType = {
    letters: Array<string>
    user_data: Array<string>
    course: string
    texts: Array<string>
    classNames?: Array<string>
    id: number
    changeId: (id: number) => void
    left: number
    changeLeft: (left: number) => void
}

export function SixReviews({user_data, course, texts, letters, classNames = [''], changeLeft, left, id, changeId}: ReviewsPropsType) {
    const reviewsRef: any = React.createRef()

    useEffect(() => {
         new Swiper('.reviews-swiper', {
            slidesPerView: 1.8
        })

        let newLeft = left

        const reviews = reviewsRef.current

        const slider = reviews.querySelector('.swiper-wrapper')
        const sliderButtons = reviews.querySelectorAll('.controls__btn')

        setInterval(() => {
            if (slider.style.transform.match(/-\d+/)) {
                if (Number(slider.style.transform.match(/-\d+/)[0]) < -3400) {
                    changeId(5)
                } else if (Number(slider.style.transform.match(/-\d+/)[0]) < -2799) {
                    changeId(4)
                } else if (Number(slider.style.transform.match(/-\d+/)[0]) < -1999) {
                    changeId(3)
                } else if (Number(slider.style.transform.match(/-\d+/)[0]) < -1199) {
                    changeId(2)
                } else {
                    changeId(1)
                }
            } else {
                changeId(0)
            }
        }, 100)

        sliderButtons[0].onclick = () => {
            (id === 5) ? newLeft = Number(slider.style.transform.match(/-\d+/)[0]) + 170 : newLeft = Number(slider.style.transform.match(/-\d+/)[0]) + 833
            changeLeft(newLeft)
            slider.style.transform = `translate3d(${newLeft}px, 0, 0)`
            slider.style.transitionDuration = `300ms`
        }

        sliderButtons[1].onclick = () => {
            (id === 4) ? newLeft -= 170 : newLeft -= 830
            changeLeft(newLeft)
            slider.style.transform = `translate3d(${newLeft}px, 0, 0)`
            slider.style.transitionDuration = `300ms`
        }
    }, [id])

    return(
        <div className={'reviews'} ref={reviewsRef}>
            <h1 className={'title'}>Participant feedback</h1>
            <div className={'swiper reviews-swiper'}>
                <div className={'swiper-wrapper'}>
                    <ReviewsItem className={classNames[0]} letter={letters[0]} user_data={user_data[0]} course={course} text={texts[0]}/>
                    <ReviewsItem className={classNames[0]} letter={letters[1]} user_data={user_data[1]} course={course} text={texts[1]}/>
                    <ReviewsItem className={classNames[0]} letter={letters[2]} user_data={user_data[2]} course={course} text={texts[2]}/>
                    <ReviewsItem className={classNames[0]} letter={letters[3]} user_data={user_data[3]} course={course} text={texts[3]}/>
                    <ReviewsItem className={classNames[0]} letter={letters[4]} user_data={user_data[4]} course={course} text={texts[4]}/>
                    <ReviewsItem className={classNames[0]} letter={letters[5]} user_data={user_data[5]} course={course} text={texts[5]}/>
                </div>
            </div>
            <SliderControls className={classNames[2]} length={6} id={id} changeId={changeId}/>
        </div>
    )
}
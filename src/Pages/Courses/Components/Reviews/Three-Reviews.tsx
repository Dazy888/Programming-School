import {ReviewsItem} from "./Reviews-Item"
import {SliderControls} from "../Projects/Projects"
import React, {useEffect} from "react"
import {ReviewsPropsType} from "./Six-Reviews";
import Swiper from "swiper";

export function ThreeReviews({user_data, course, texts, letters, id, changeId, classNames =[''], changeLeft, left}: ReviewsPropsType) {
    const reviewsRef: any = React.createRef()

    useEffect(() => {
        new Swiper('.swiper', {
            slidesPerView: 1.8
        })

        let newLeft = left

        const reviews = reviewsRef.current

        const slider = reviews.querySelector('.swiper-wrapper')
        const sliderButtons = reviews.querySelectorAll('.controls__btn')

        setInterval(() => {
            if (slider.style.transform.match(/-\d+/)) {
                if (Number(slider.style.transform.match(/-\d+/)[0]) < -900) {
                    changeId(2)
                } else {
                    changeId(1)
                }
            } else {
                changeId(0)
            }
        }, 100)

        sliderButtons[0].onclick = () => {
            (id === 2) ? newLeft += 170 : newLeft += 830
            changeLeft(newLeft)
            slider.style.transform = `translate3d(${newLeft}px, 0, 0)`
            slider.style.transitionDuration = `300ms`
        }

        sliderButtons[1].onclick = () => {
            (id === 1) ? newLeft -= 170 : newLeft -= 830
            changeLeft(newLeft)
            slider.style.transform = `translate3d(${newLeft}px, 0, 0)`
            slider.style.transitionDuration = `300ms`
        }
    }, [id])

    return(
        <div className={'reviews'} ref={reviewsRef}>
            <h1 className={'title'}>Participant feedback</h1>
            <div className={'swiper'}>
                <div className={'swiper-wrapper'}>
                    <ReviewsItem className={classNames[0]} letter={letters[0]} user_data={user_data[0]} course={course} text={texts[0]}/>
                    <ReviewsItem className={classNames[0]} letter={letters[1]} user_data={user_data[1]} course={course} text={texts[1]}/>
                    <ReviewsItem className={classNames[0]} letter={letters[2]} user_data={user_data[2]} course={course} text={texts[2]}/>
                </div>
            </div>
            <SliderControls className={classNames[2]} length={3} id={id} changeId={changeId}/>
        </div>
    )
}
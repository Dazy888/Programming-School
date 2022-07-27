import {ReviewsItem} from "./Reviews-Item"
import {SliderControls} from "../Projects/Projects"
import React from "react"
import {ReviewsPropsType} from "./Six-Reviews";

export function ThreeReviews({user_data, course, texts, letters, id, changeId}: ReviewsPropsType) {
    return(
        <div className={'reviews'}>
            <h1 className={'title'}>Participant feedback</h1>
            <div className={'reviews__row'}>
                <ul className={'row__list'}>
                    <ReviewsItem letter={letters[0]} user_data={user_data[0]} course={course} text={texts[0]}/>
                    <ReviewsItem letter={letters[1]} user_data={user_data[1]} course={course} text={texts[1]}/>
                    <ReviewsItem letter={letters[2]} user_data={user_data[2]} course={course} text={texts[2]}/>
                </ul>
            </div>
            <SliderControls length={3} id={id} changeId={changeId}/>
        </div>
    )
}
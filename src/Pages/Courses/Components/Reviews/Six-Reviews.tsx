import {ReviewsItem} from "./Reviews-Item"
import {SliderControls} from "../Projects/Projects"
import React from "react"

export type ReviewsPropsType = {
    letters: Array<string>
    user_data: Array<string>
    course: string
    texts: Array<string>
    id: number
    changeId: (arg1: number) => void
}

export function SixReviews({user_data, course, texts, letters, id, changeId}: ReviewsPropsType) {
    return(
        <div className={'reviews'}>
            <h1 className={'title'}>Participant feedback</h1>
            <div className={'reviews__row'}>
                <ul className={'row__list'}>
                    <ReviewsItem letter={letters[0]} user_data={user_data[0]} course={course} text={texts[0]}/>
                    <ReviewsItem letter={letters[1]} user_data={user_data[1]} course={course} text={texts[1]}/>
                    <ReviewsItem letter={letters[2]} user_data={user_data[2]} course={course} text={texts[2]}/>
                    <ReviewsItem letter={letters[3]} user_data={user_data[3]} course={course} text={texts[3]}/>
                    <ReviewsItem letter={letters[4]} user_data={user_data[4]} course={course} text={texts[4]}/>
                    <ReviewsItem letter={letters[5]} user_data={user_data[5]} course={course} text={texts[5]}/>
                </ul>
            </div>
            <SliderControls length={6} id={id} changeId={changeId}/>
        </div>
    )
}
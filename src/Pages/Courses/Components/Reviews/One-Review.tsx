import {ReviewsItem, ReviewsItemPropsType} from "./Reviews-Item"
import React from "react"

export function OneReview({user_data, course, text, letter, className}: ReviewsItemPropsType) {
    return(
        <div className={'reviews'}>
            <h1 className={'title'}>Participant feedback</h1>
            <div className={'reviews__row reviews__row_solo flex-property-set_center'}>
                <ReviewsItem className={className} letter={letter} user_data={user_data} course={course} text={text}/>
            </div>
        </div>
    )
}
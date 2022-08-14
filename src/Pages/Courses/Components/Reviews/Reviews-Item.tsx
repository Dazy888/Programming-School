export type ReviewsItemPropsType = {
    letter: string
    user_data: string
    course: string
    text: string
    className?: string
}

export function ReviewsItem({course, user_data, text, letter, className}: ReviewsItemPropsType) {
    return (
        <div className={'reviews__item swiper-slide'}>
            <div className={`item__circle flex-property-set_center ${className}`}>
                <p className={'small-title'}>{letter}</p>
            </div>
            <div className={'item__content'}>
                <p className={'light-grey-txt data'}>{user_data}</p>
                <p className={'light-grey-txt course'}>{course}</p>
                <span className={'content__stars flex-property-set_between'}>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </span>
                <p className={'light-grey-txt'}>{text}</p>
            </div>
        </div>
    )
}
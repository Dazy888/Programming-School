type PropsType = {
    title: string
    isButton?: boolean
}

function openList(e: any) {
    if (e.target.closest('.courses__item')) {
        e.target.closest('.courses__item').classList.toggle('open-list')
        e.target.closest('.item__title').querySelector('i').classList.toggle('change-sign')
    }
}

export function CourseTitle({title, isButton = false}: PropsType) {
    return(
        <div className={'item__title item__title_extended flex-property-set_between'} onClick={openList}>
            <h2 className={'small-title'}>{title}</h2>
            {isButton ? <button className={'title__btn flex-property-set_center'}><i className="fa-solid fa-plus"></i></button> : null}
        </div>
    )
}
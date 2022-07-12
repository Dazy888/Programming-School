type PropsType = {
    title: string
    className?: string
}

export function CourseTitleSmall({title, className = ''}: PropsType) {
    return(
        <div className={`courses__item ${className}`}>
            <div className={'item__title flex-property-set_between'}>
                <h2 className={'small-title'}>{title}</h2>
            </div>
        </div>
    )
}
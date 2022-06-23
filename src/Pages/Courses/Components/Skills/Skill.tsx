type PropsType = {
    title?: string
    text: string
    className?: string
}

export function Skill({title, text, className = ''}: PropsType) {
    return(
        <div className={`skills__item ${className}`}>
            <i className="fa-solid fa-circle-check"></i>
            {(title) ? <h2 className={'small-title'}>{title}</h2> : null}
            <p className={'light-grey-txt'}>{text}</p>
        </div>
    )
}
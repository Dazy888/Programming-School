type PropsType = {
    title: string
    text?: string
}

export function CoursesTitle({title, text}: PropsType) {
    return(
        <div className={'courses__title'}>
            <h1 className={'subtitle'}>{title}</h1>
            {text ? <p className={'text'}>{text}</p> : null}
        </div>
    )
}
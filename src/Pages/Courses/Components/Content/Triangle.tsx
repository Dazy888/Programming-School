type PropsType = {
    className?: string
}

export function Triangle({className = ''}: PropsType) {
    return(
        <div className={'rectangle'}>
            <div className={`triangle ${className}`}></div>
        </div>
    )
}
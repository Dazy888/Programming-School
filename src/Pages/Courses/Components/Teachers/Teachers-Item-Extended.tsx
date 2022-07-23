import React from "react"

type PropsType = {
    img: string
    name: string
    surname: string
    description: string
    text: string
}

export function TeachersItemExtended({description, name, surname, img, text}: PropsType) {
    return(
        <div className={'teacher-big'}>
            <img className={'teacher-big__img'} alt={'Teacher'} src={img}/>
            <h2 className={'teacher-big__names'}>{name}<br/>{surname}</h2>
            <hr className={'teacher-big__line'}/>
            <p className={'light-grey-txt'}>{description}</p>
            <p className={'small-title'}>{text}</p>
        </div>
    )
}
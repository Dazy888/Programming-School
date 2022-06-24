import React from "react"

type PropsType = {
    img: string
    name: string
    surname: string
    description: string
}

export function TeachersItem({description, name, surname, img}: PropsType) {
    return(
        <div className={'content__teacher'}>
            <img className={'teacher__img'} alt={'Teacher'} src={img}/>
            <h2 className={'subtitle'}>{name}<br/>{surname}</h2>
            <hr className={'teacher__line'}/>
            <p className={'light-grey-txt'}>{description}</p>
        </div>
    )
}
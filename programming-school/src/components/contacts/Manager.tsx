import React from "react";

interface Props {
    imgSrc: string
    name: string
    occupation: string
    mail: string
}

const ManagerComponent: React.FC<Props> = ({ mail, name, occupation, imgSrc }) => {
    return(
        <div>
            <img className={'mx-auto'} alt={`${name} Manager`} src={imgSrc}/>
            <h3 className={'text-xl text-normal my-2.5'}>{name}</h3>
            <p className={'text-lg opacity-80'}>{`${occupation} manager`}</p>
            <p className={'text-base opacity-60 mt-2.5'}>{`${mail}@gmail.com`}</p>
        </div>
    )
}

export const Manager = React.memo(ManagerComponent)
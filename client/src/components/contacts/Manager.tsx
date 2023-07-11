import React from "react"
import Image from "next/image"

interface Props {
    imgSrc: string
    name: string
    occupation: string
    mail: string
}

const ManagerComponent: React.FC<Props> = ({ mail, name, occupation, imgSrc }) => (
    <div>
        <Image width={200} height={200} className={'mx-auto'} alt={`${name} Manager`} src={`/contacts/managers/${imgSrc}.webp`}/>
        <h3 className={'text-xl my-2.5'}>{name}</h3>
        <p className={'text-lg opacity-80'}>{`${occupation} manager`}</p>
        <p className={'opacity-60 mt-2.5'}>{`${mail}@gmail.com`}</p>
    </div>
)

export const Manager = React.memo(ManagerComponent)

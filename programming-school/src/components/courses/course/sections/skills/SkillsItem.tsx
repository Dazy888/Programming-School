import React from "react"
import { SkillI } from "@/interfaces/course"

const SkillsItemComponent: React.FC<SkillI> = ({ title, text }) => {
    return(
        <div className={'p-2.5 rounded-xl'}>
            <i className={"fa-solid fa-circle-check mb-4"}/>
            {title && <h3 className={'mb-2 text-xl font-bold'}>{title}</h3>}
            <p>{text}</p>
        </div>
    )
}

export const SkillsItem = React.memo(SkillsItemComponent)
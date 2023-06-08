import React from "react"
import { ISkill } from "@/models/course"

const SkillComponent: React.FC<ISkill> = ({ title, text }) => (
    <div className={'p-2.5 rounded-xl'}>
        <i className={'fa-solid fa-circle-check mb-4'}/>
        {title && <h3 className={'mb-2 text-xl font-bold'}>{title}</h3>}
        <p>{text}</p>
    </div>
)

export const Skill = React.memo(SkillComponent)

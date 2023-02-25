import React from "react"
import styles from '@/styles/Course.module.scss'
import { TitleText } from "@/components/common/TitleText"
import { Tool } from "@/components/courses/course/sections/cv/Tool"

interface Props {
    title: string
    salary: string
    skills: string[]
    projects: string[]
    tools: string[]
}

const CVComponent: React.FC<Props> = ({ projects, salary, skills, tools, title }) => {
    return(
        <div id={styles['cv']} className={'mb-32'}>
            <TitleText text={'Your CV after completing the course'}/>
            <div className={`${styles['cv__content']} mt-14 rounded-xl p-12`}>
                <div className={`${styles['cv__title']} flex justify-between items-center mb-12`}>
                    <div className={'flex items-center'}>
                        <img alt={'Your photo'} src={'/courses/course/cv/avatar.png'} className={'w-16 h-16 mr-6'}/>
                        <h2 className={'text-2xl font-medium'}>{title}</h2>
                    </div>
                    <h2 className={'text-2xl font-medium'}>{salary}</h2>
                </div>
                <div className={`${styles['cv__tools']} flex`}>
                    <h3 className={'text-lg font-medium w-56 mr-14'}>I own tools:</h3>
                    <div className={'flex'}>
                        {tools.map((tool, key) => <Tool title={tool} key={key}/>)}
                    </div>
                </div>
                <div className={`${styles['cv__skills']} flex my-12`}>
                    <h3 className={'text-lg font-medium w-56 mr-14'}>My skills:</h3>
                    <ul>
                        {skills.map((skill, key) => <li className={'relative'} key={key}>{skill}</li>)}
                    </ul>
                </div>
                <div className={`${styles['cv__projects']} flex`}>
                    <h3 className={'text-lg font-medium w-56 mr-14'}>My projects:</h3>
                    <ul>
                        {projects.map((project, key) => <li key={key}>{project}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const CV = React.memo(CVComponent)
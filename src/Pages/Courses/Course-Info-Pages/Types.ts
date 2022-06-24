import {ForWhoType, HeaderType, ProjectsType, SkillsType} from "../../../Redux/Courses-Reducer/Courses-Reducer"

export type CourseProjectsPropsType = {
    header: HeaderType
    for_who: ForWhoType
    skills: SkillsType
    projects: ProjectsType
    job_name: string
    img: string
    time: string
    classNames?: Array<string>
}

export type CoursePropsType = {
    header: HeaderType
    for_who: ForWhoType
    skills: SkillsType
    job_name: string
    img: string
    time: string
    classNames?: Array<string>
}
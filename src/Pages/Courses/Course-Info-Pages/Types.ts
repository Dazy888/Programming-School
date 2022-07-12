import {
    ContentType,
    ForWhoType,
    HeaderType,
    ProjectsType,
    SkillsType
} from "../../../Redux/Courses-Reducer/Courses-Reducer"

export type CourseProjectsPropsType = {
    header: HeaderType
    for_who: ForWhoType
    skills: SkillsType
    projects: ProjectsType
    content: ContentType
    job_name: string
    img: string
    time: string
    classNames?: Array<string>
}

export type CoursePropsType = {
    header: HeaderType
    for_who: ForWhoType
    skills: SkillsType
    content: ContentType
    job_name: string
    img: string
    time: string
    classNames?: Array<string>
}
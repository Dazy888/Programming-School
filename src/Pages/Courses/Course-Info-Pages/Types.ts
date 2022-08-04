import {
    ContentType,
    ForWhoType,
    HeaderType,
    ProjectsType, QuestionsType, ResumeType, ReviewsType,
    SkillsType
} from "../../../Redux/Courses-Reducer/Courses-Reducer"
import {TeachersType} from "../../../Redux/Teachers-Reducer/Teachers-Reducer";

export type CourseProjectsPropsType = {
    header: HeaderType
    for_who: ForWhoType
    skills: SkillsType
    projects: ProjectsType
    content: ContentType
    teachers: any
    reviews?: ReviewsType | any
    resume: ResumeType
    questions: QuestionsType
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
    teachers: any
    reviews?: ReviewsType | any
    resume: ResumeType
    questions: QuestionsType
    job_name: string
    img: string
    time: string
    classNames?: Array<string>
}
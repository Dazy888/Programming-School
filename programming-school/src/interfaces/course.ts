import {AppStateType} from "@/store/store";

export interface SliderProps {
    isSlider: boolean
}

export interface PreviewI {
    profession: string
    time: string
    imgSrc: string
    path: string
}

export interface ListItemTextI {
    title: string
    text: string
}

interface HeaderI {
    text: string
    features: ListItemTextI[]
    imgSrc: string
}

interface MarketI {
    titleText: string
    list: ListItemTextI[]
}

export interface ForWhoI {
    imgSrc: string
    subtitle: string
    text: string
}

interface SkillI {
    title?: string
    text: string
}

export interface ProjectI {
    imgSrc: string
    title: string
    text?: string
    firstParagraph?: string
    listItems?: string[]
    secondParagraph?: string
}

export interface CountI {
    number: string
    text: string
}

export interface ProgramItemI {
    title: string
    number: number
    listItems?: string[]
    text?: string
    subtitle?: string
}

interface ProgramI {
    title: {
        text: string
        counts: CountI[]
    }
    programItems: ProgramItemI[]
}

export interface TeacherI {
    imgSrc: string
    fullName: string
    text: string
    additionalInfo?: string[]
}

export interface CvI {
    salary: string
    skills: string[]
    projects: string[]
    tools: string[]
}

export interface TermI {
    term: string
    text: string
}

export interface QuestionI {
    title: string
    text?: string
    texts?: string[],
    terms?: TermI[]
    listItems?: string[]
}

export interface CourseI {
    preview: PreviewI
    course: {
        logoSrc: string
        header: HeaderI
        market: MarketI
        for_who: ForWhoI[]
        skills: SkillI[]
        program: ProgramI
        projects: ProjectI[]
        teachers: TeacherI[]
        cv: CvI
        questions: QuestionI[]
    }
}

export type PreviewsResponse = (state: AppStateType) => PreviewI[]

export interface FormI {
    name: string
    phoneNumber: string
    mail: string
}
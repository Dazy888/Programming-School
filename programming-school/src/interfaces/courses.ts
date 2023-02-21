import { AppStateType } from "@/store/store"

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

export interface SkillI {
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

export interface ContentI {
    title: {
        text: string
        counts: CountI[]
    }
    programItems: ProgramItemI[]
}

export interface ReviewsI {
    user_data: Array<string>
    course: string
    texts: Array<string>
    letters: Array<string>
}

export interface CvI {
    salary: string
    texts: Array<string>
    certificate: string
}

export interface QuestionsI {
    titles: Array<string>
    texts: Array<string>
}

export interface CourseI {
    preview: PreviewI
    course: {
        logoSrc: string
        header: HeaderI
        market: MarketI
        for_who: ForWhoI[]
        skills: SkillI[]
        projects: ProjectI[]
        content: ContentI
        reviews: ReviewsI
        resume: CvI
        questions: QuestionsI
    }
}

export type PreviewsResponse = (state: AppStateType) => PreviewI[]

export interface FormI {
    name: string
    phoneNumber: string
    mail: string
}
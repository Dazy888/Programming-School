import { AppStateType } from "@/store/store"

export interface PreviewI {
    occupation: string
    time: string
    imgSrc: string
    path: string
}

interface FeaturesI {
    title: string
    text: string
}

interface HeaderI {
    text: string
    features: FeaturesI[]
    imgSrc: string
}

export interface ForWhoI {
    photographs: Array<string>,
    texts: Array<string>,
    titles: Array<string>
}

export interface SkillsI {
    titles: Array<string>
    texts: Array<string>
}

export interface ProjectsI {
    photographs: Array<string>
    titles: Array<string>
    texts: Array<string>
    className?: string
}

export interface ContentI {
    title: {
        text: string
        numbers: Array<string>
        descriptions: Array<string>
    }
    courses: {
        titles: Array<string>
    }
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
        for_who: ForWhoI
        skills: SkillsI
        projects: ProjectsI
        content: ContentI
        reviews: ReviewsI
        resume: CvI
        questions: QuestionsI
    }
}

export type PreviewsResponse = (state: AppStateType) => PreviewI[]
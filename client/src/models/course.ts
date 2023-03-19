export interface CourseAttr {
    course: string
}

export interface SliderProps {
    isSlider: boolean
}

export interface IPreview {
    profession: string
    time: string
    imgSrc: string
    path: string
}

export interface IListItemText {
    title: string
    text: string
}

interface IHeader {
    text: string
    features: IListItemText[]
    imgSrc: string
}

interface IMarket {
    titleText: string
    list: IListItemText[]
}

export interface IForWho {
    imgSrc: string
    subtitle: string
    text: string
}

export interface ISkill {
    title?: string
    text: string
}

export interface IProject {
    imgSrc: string
    title: string
    text?: string
    firstParagraph?: string
    listItems?: string[]
    secondParagraph?: string
}

export interface ICount {
    number: string
    text: string
}

export interface IProgramItem {
    title: string
    number: number
    listItems?: string[]
    text?: string
    subtitle?: string
}

interface IProgram {
    title: {
        text: string
        counts: ICount[]
    }
    programItems: IProgramItem[]
}

export interface ITeacher {
    imgSrc: string
    fullName: string
    text: string
    additionalInfo?: string[]
}

export interface ICV {
    salary: string
    skills: string[]
    projects: string[]
    tools: string[]
}

export interface ITerm {
    term: string
    text: string
}

export interface IQuestion {
    title: string
    text?: string
    texts?: string[],
    terms?: ITerm[]
    listItems?: string[]
}

export interface ICourse {
    preview: IPreview
    course: {
        logoSrc: string
        header: IHeader
        market: IMarket
        for_who: IForWho[]
        skills: ISkill[]
        program: IProgram
        projects: IProject[]
        teachers: ITeacher[]
        cv: ICV
        questions: IQuestion[]
    }
}

export interface CourseForm {
    name: string
    phoneNumber: string
    mail: string
}

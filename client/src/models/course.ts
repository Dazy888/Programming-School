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

export interface ITeacher {
    imgSrc: string
    fullName: string
    text: string
    additionalInfo?: string[]
}

interface Text {
    title: string
    text: string
}

export interface IQuestion {
    title: string
    text?: string
    texts?: string[],
    terms?: Text[]
    listItems?: string[]
}

interface CV {
    salary: string
    skills: string[]
    projects: string[]
    tools: string[]
}

export interface ICourse {
    preview: IPreview
    course: {
        logoSrc: string
        header: {
            text: string
            features: IListItemText[]
        }
        market: {
            titleText: string
            list: IListItemText[]
        }
        for_who?: IForWho[]
        skills: ISkill[]
        program: {
            title: {
                text: string
                counts: ICount[]
            }
            programItems: IProgramItem[]
        }
        projects?: IProject[]
        teachers: ITeacher[]
        cv?: CV
        questions: IQuestion[]
    }
}

export interface CourseForm {
    name: string
    phoneNumber: string
    mail: string
}

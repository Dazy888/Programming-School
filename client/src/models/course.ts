export interface CourseAttr {
    course: string
}

export interface SliderProps {
    isSlider: boolean
}

export interface Preview {
    profession: string
    time: string
    path: string
}

export interface ListItemText {
    title: string
    text: string
}

export interface ForWho {
    subtitle: string
    text: string
}

export interface ISkill {
    title?: string
    text: string
}

export interface Project {
    title: string
    imgSrc?: string
    text?: string
    firstParagraph?: string
    listItems?: string[]
    secondParagraph?: string
}

export interface Count {
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
    fullName: string
    text: string
    imgSrc?: string
    additionalInfo?: string[]
}

export interface Text {
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
    preview: Preview
    course: {
        header: {
            text: string
            features: ListItemText[]
        }
        market: {
            title: string
            list: ListItemText[]
        }
        for_who?: ForWho[]
        skills: ISkill[]
        program: {
            title: {
                text: string
                counts: Count[]
            }
            programItems: IProgramItem[]
        }
        projects?: Project[]
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

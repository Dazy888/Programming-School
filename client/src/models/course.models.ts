export interface CourseAttr {
    course: string
}

export interface IntroProps {
    courseAttr: CourseAttr
    profession: string
    text: string
    columnsAttr: any
    features: ListItemText[]
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

export interface ProgramProps {
    courseAttr: CourseAttr
    countItems: Count[]
    titleText: string
    programItems: IProgramItem[]
}

export interface IProgramItem {
    title: string
    listItems?: string[]
    text?: string
    subtitle?: string
}

export interface ISpeaker {
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

export interface CVProps extends CV {
    title: string
}

export interface QuestionsProps {
    questions: IQuestion[]
}

export interface ICourse {
    preview: Preview
    course: {
        title: {
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
        speakers: ISpeaker[]
        cv?: CV
        questions: IQuestion[]
    }
}

export interface CourseForm {
    name: string
    phoneNumber: string
    email: string
}

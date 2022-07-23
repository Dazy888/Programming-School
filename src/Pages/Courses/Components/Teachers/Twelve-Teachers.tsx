import {TeachersRow} from "./Teachers-Row"

export type TeachersPropsType = {
    avatars: Array<string>
    names: Array<string>
    surnames: Array<string>
    descriptions: Array<string>
}

export function TwelveTeachers({avatars, surnames, names, descriptions}: TeachersPropsType) {
    return(
        <div className={'teachers'}>
            <h1 className={'title'}>Teachers</h1>
            <TeachersRow avatars={avatars} names={names} surnames={surnames} descriptions={descriptions}/>
            <TeachersRow avatars={avatars.slice(6)} names={names.slice(6)} surnames={surnames.slice(6)} descriptions={descriptions.slice(6)}/>
        </div>
    )
}
import {TeachersItem} from "../../../Teachers/Components/TeachersItem"
import {TeachersRow} from "./Teachers-Row"

export type TeachersPropsType = {
    avatars: Array<string>
    names: Array<string>
    surnames: Array<string>
    descriptions: Array<string>
    texts?: Array<string>
}

export function EightTeachers({avatars, surnames, names, descriptions, texts = ['']}: TeachersPropsType) {
    return(
        <div className={'teachers'}>
            <h1 className={'title'}>Teachers</h1>
            <TeachersRow avatars={avatars.slice(0, 6)} names={names.slice(0, 6)} surnames={surnames.slice(0, 6)} descriptions={descriptions.slice(0, 6)}/>
            <div className={'teachers__row teachers__row_small flex-property-set_between'}>
                <TeachersItem img={avatars[6]} name={names[6]} surname={surnames[6]} description={descriptions[6]}/>
                <TeachersItem img={avatars[7]} name={names[7]} surname={surnames[7]} description={descriptions[7]}/>
            </div>
        </div>
    )
}
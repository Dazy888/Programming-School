import {TeachersItemExtended} from "./Teachers-Item-Extended"

export type TeachersPropsType = {
    avatars: Array<string>
    names: Array<string>
    surnames: Array<string>
    descriptions: Array<string>
    texts: Array<string>
}

export function TwoTeachers({avatars, surnames, names, descriptions, texts = ['']}: TeachersPropsType) {
    return(
        <div className={'teachers'}>
            <h1 className={'title'}>Teachers</h1>
            <div className={'teachers__row flex-property-set_between'}>
                <TeachersItemExtended img={avatars[0]} name={names[0]} surname={surnames[0]} description={descriptions[0]} text={texts[0]}/>
                <TeachersItemExtended img={avatars[1]} name={names[1]} surname={surnames[1]} description={descriptions[1]} text={texts[1]}/>            </div>
        </div>
    )
}
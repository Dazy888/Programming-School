import {TeachersItem} from "../../../Teachers/Components/TeachersItem"
import {TeachersPropsType} from "./Twelve-Teachers"

export function TeachersRow({avatars, surnames, names, descriptions}: TeachersPropsType) {
    return(
        <div className={'teachers__row flex-property-set_between'}>
            <TeachersItem img={avatars[0]} name={names[0]} surname={surnames[0]} description={descriptions[0]}/>
            <TeachersItem img={avatars[1]} name={names[1]} surname={surnames[1]} description={descriptions[1]}/>
            <TeachersItem img={avatars[2]} name={names[2]} surname={surnames[2]} description={descriptions[2]}/>
            <TeachersItem img={avatars[3]} name={names[3]} surname={surnames[3]} description={descriptions[3]}/>
            <TeachersItem img={avatars[4]} name={names[4]} surname={surnames[4]} description={descriptions[4]}/>
            <TeachersItem img={avatars[5]} name={names[5]} surname={surnames[5]} description={descriptions[5]}/>
        </div>
    )
}
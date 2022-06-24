import React from "react"
import {RowType} from "../Types"
import {TeachersItem} from "./TeachersItem"

export function TeachersBigRow({language, handler, descriptions, avatars, names, surnames}: RowType) {
    return(
        <div className={'teachers flex-property-set_between'}>
            <button onClick={handler} className={'teachers__btn'}>{language}</button>
            <div className={'teachers__content-wrapper teachers__content-wrapper_big flex-property-set_center'}>
                <div className={'teachers__content_big teachers__content flex-property-set_between'}>
                    <TeachersItem img={avatars[0]} name={names[0]} surname={surnames[0]} description={descriptions[0]}/>
                    <TeachersItem img={avatars[1]} name={names[1]} surname={surnames[1]} description={descriptions[1]}/>
                    <TeachersItem img={avatars[2]} name={names[2]} surname={surnames[2]} description={descriptions[2]}/>
                    <TeachersItem img={avatars[3]} name={names[3]} surname={surnames[3]} description={descriptions[3]}/>
                    <TeachersItem img={avatars[4]} name={names[4]} surname={surnames[4]} description={descriptions[4]}/>
                </div>
            </div>
        </div>
    )
}
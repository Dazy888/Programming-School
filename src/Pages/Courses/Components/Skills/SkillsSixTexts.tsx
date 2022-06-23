import {Skill} from "./Skill";
import {SkillsTextsType} from "./SkillsTypes";

export function SkillsSixTexts({texts, className}: SkillsTextsType) {
    return(
        <div className={'skills'}>
            <h1 className={'title'}>What will you learn</h1>
            <div className={'skills__row flex-property-set_between'}>
                <Skill className={className} text={texts[0]}/>
                <Skill className={className} text={texts[1]}/>
                <Skill className={className} text={texts[2]}/>
            </div>
            <div className={'skills__row flex-property-set_between'}>
                <Skill className={className} text={texts[3]}/>
                <Skill className={className} text={texts[4]}/>
                <Skill className={className} text={texts[5]}/>
            </div>
        </div>
    )
}
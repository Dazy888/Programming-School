import {Skill} from "./Skill";
import {SkillsTitlesType} from "./SkillsTypes";

export function SkillsSixTitles({titles, className, texts}: SkillsTitlesType) {
    return (
        <div className={'skills'}>
            <h1 className={'title'}>What will you learn</h1>
            <div className={'skills__row flex-property-set_between'}>
                <Skill className={className} title={titles[0]} text={texts[0]}/>
                <Skill className={className} title={titles[1]} text={texts[1]}/>
                <Skill className={className} title={titles[2]} text={texts[2]}/>
            </div>
            <div className={'skills__row flex-property-set_between'}>
                <Skill className={className} title={titles[3]} text={texts[3]}/>
                <Skill className={className} title={titles[4]} text={texts[4]}/>
                <Skill className={className} title={titles[5]} text={texts[5]}/>
            </div>
        </div>
    )
}
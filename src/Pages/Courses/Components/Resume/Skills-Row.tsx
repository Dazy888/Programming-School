type SkillsRowPropsType = {
    texts: Array<string>
}

export function SkillsRow({texts}: SkillsRowPropsType) {
    return(
        <ul className={'skills__list flex-property-set_between'}>
            <li className={'list__block flex-property-set_between'}>
                <li className={'light-grey-txt'}>{texts[0]}</li>
                <li className={'light-grey-txt'}>{texts[1]}</li>
            </li>
            <li className={'list__block flex-property-set_between'}>
                <li className={'light-grey-txt'}>{texts[2]}</li>
                <li className={'light-grey-txt'}>{texts[3]}</li>
            </li>
        </ul>
    )
}
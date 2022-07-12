type PropsType = {
    text: string
    numbers: Array<string>
    descriptions: Array<string>
}

export function Title({text, numbers, descriptions}: PropsType) {
    return(
        <div className={'content__title flex-property-set_between'}>
            <h1 className={'title'}>Program</h1>
            <div className={'title__text'}>
                <p className={'text'}>{text}</p>
                <div className={'text__descriptions flex-property-set_between'}>
                    <div className={'text__description flex-property-set_between'}>
                        <div className={'description__count flex-property-set_center'}>
                            <p className={'number'}>{numbers[0]}</p>
                        </div>
                        <p className={'light-grey-txt'}>{descriptions[0]}</p>
                    </div>
                    <div className={'text__description flex-property-set_between'}>
                        <div className={'description__count flex-property-set_center'}>
                            <p className={'number'}>{numbers[1]}</p>
                        </div>
                        <p className={'light-grey-txt'}>{descriptions[1]}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
type PropsType = {
    photographs: Array<string>
    titles: Array<string>
    texts: Array<string>
}

export function ForWho({photographs, titles, texts}: PropsType) {
    return(
        <div className={`for-who`}>
            <h1 className={'title'}>Who is this course for</h1>
            {(photographs.length > 2)
                ? (
                    <div className={'for-who__content flex-property-set_between'}>
                        <div className={`content__item`}>
                            <img alt={'Img'} src={photographs[0]}/>
                            <h3 className={'small-title'}>{titles[0]}</h3>
                            <p className={'light-grey-txt'}>{texts[0]}</p>
                        </div>
                        <div className={`content__item`}>
                            <img alt={'Img'} src={photographs[1]}/>
                            <h3 className={'small-title'}>{titles[1]}</h3>
                            <p className={'light-grey-txt'}>{texts[1]}</p>
                        </div>
                        <div className={`content__item`}>
                            <img alt={'Img'} src={photographs[2]}/>
                            <h3 className={'small-title'}>{titles[2]}</h3>
                            <p className={'light-grey-txt'}>{texts[2]}</p>
                        </div>
                    </div>
                )
                : (
                    <div className={'for-who__content_small flex-property-set_between'}>
                        <div className={'content__item flex-property-set_between'}>
                            <img alt={'Img'} src={photographs[0]}/>
                            <div className={'item__txt'}>
                                <h3 className={'small-title'}>{titles[0]}</h3>
                                <p className={'light-grey-txt'}>{texts[0]}</p>
                            </div>
                        </div>
                        <div className={'content__item flex-property-set_between'}>
                            <img alt={'Img'} src={photographs[1]}/>
                            <div className={'item__txt'}>
                                <h3 className={'small-title'}>{titles[1]}</h3>
                                <p className={'light-grey-txt'}>{texts[1]}</p>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}
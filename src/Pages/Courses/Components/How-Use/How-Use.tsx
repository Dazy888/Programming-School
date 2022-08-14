type PropsType = {
    classNames?: Array<string>
}

export function HowUse({classNames = ['', '']}: PropsType) {
    return(
        <div className={'how-use'}>
            <h1 className={'title'}>How to use the platform</h1>
            <div className={'how-use__content flex-property-set_between'}>
                <div className={'content__block flex-property-set_between'}>
                    <div className={`block__item ${classNames[1]}`}>
                        <div className={'item__text'}>
                        <span className={`text__circle flex-property-set_center ${classNames[0]}`}>
                            <p className={'circle__number'}>1</p>
                        </span>
                            <h3 className={'small-title'}>Watch content at your convenience</h3>
                            <p className={'light-grey-txt'}>Structured theory and practice on tasks close to real ones. Practice after each module</p>
                        </div>
                        <div className={'item__img flex-property-set_center'}>
                            <img alt={'Photo'} src={'https://248006.selcdn.ru/LandGen/blocks/process/pic-theme.webp'}/>
                        </div>
                    </div>
                    <div className={`block__item ${classNames[1]}`}>
                        <div className={'item__text'}>
                        <span className={`text__circle flex-property-set_center ${classNames[0]}`}>
                            <p className={'circle__number'}>2</p>
                        </span>
                            <h3 className={'small-title'}>Get feedback</h3>
                            <p className={'light-grey-txt'}>Experienced curators-programmers will check practical work within 1-3 working days and answer questions</p>
                        </div>
                        <div className={'item__img flex-property-set_center'}>
                            <img alt={'Photo'} src={'https://248006.selcdn.ru/LandGen/blocks/process/pic-homework.webp'}/>
                        </div>
                    </div>
                </div>
                <div className={'content__block flex-property-set_between'}>
                    <div className={`block__item ${classNames[1]}`}>
                        <div className={'item__text'}>
                        <span className={`text__circle flex-property-set_center ${classNames[0]}`}>
                            <p className={'circle__number'}>3</p>
                        </span>
                            <h3 className={'small-title'}>Develop the final project</h3>
                            <p className={'light-grey-txt'}>Present your work to experts from the field and replenish your portfolio with cool projects</p>
                        </div>
                        <div className={'item__img flex-property-set_center'}>
                            <img alt={'Photo'} src={'https://248006.selcdn.ru/LandGen/blocks/process/pic-mentor.png'}/>
                        </div>
                    </div>
                    <div className={`block__item ${classNames[1]}`}>
                        <div className={'item__text'}>
                         <span className={`text__circle flex-property-set_center ${classNames[0]}`}>
                            <p className={'circle__number'}>4</p>
                         </span>
                            <h3 className={'small-title'}>Find a job in your specialty</h3>
                            <p className={'light-grey-txt'}>A career consultant will find out your preferences, help you prepare your resume and prepare for interviews</p>
                        </div>
                        <div className={'item__img flex-property-set_center'}>
                            <img alt={'Photo'} src={'https://248006.selcdn.ru/LandGen/blocks/process/pic-diploma.png'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
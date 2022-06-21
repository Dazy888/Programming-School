type PropsType = {
    profession: string
    titleTxt: string
    imgUrl: string
    time: string
    projects: string
}

export function CourseHeader({projects, imgUrl, profession, titleTxt, time}: PropsType) {
    return(
        <div className={'course-header'}>
            <div className={'header__title flex-property-set_between'}>
                <div className={'title__txt'}>
                    <h1 className={'title'}>Profession {profession}</h1>
                    <p className={'light-grey-txt'}>{titleTxt}</p>
                    <button className={'txt__btn flex-property-set_center'}>Book a course</button>
                </div>
                <div className={'title__img'}>
                    <img alt={'Logo'} src={imgUrl}/>
                </div>
            </div>
            <div className={'header__inf flex-property-set_between'}>
                <div className={'inf__item'}>
                    <div className={'item__txt'}>
                        <h3 className={'txt__title small-title'}>Duration</h3>
                        <p className={'txt__text light-grey-txt'}>{time}</p>
                    </div>
                </div>
                <div className={'inf__item'}>
                    <div className={'item__txt'}>
                        <h3 className={'txt__title small-title'}>{projects} projects</h3>
                        <p className={'txt__text light-grey-txt'}>in portfolio on GitHub</p>
                    </div>
                </div>
                <div className={'inf__item'}>
                    <div className={'item__txt'}>
                        <h3 className={'txt__title small-title'}>Team internship</h3>
                        <p className={'txt__text light-grey-txt'}>under the leadership of a team leader</p>
                    </div>
                </div>
                <div className={'inf__item'}>
                    <div className={'item__txt'}>
                        <h3 className={'txt__title small-title'}>We guarantee employment</h3>
                        <p className={'txt__text light-grey-txt'}>or refund money</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
type PropsType = {
    profession: string
    titleTxt: string
    imgUrl: string
    time: string
    projects: string
    classNames?: Array<string>
    text?: string
    companies: string
    salary: string
}

export function CourseHeader({projects, imgUrl, profession, titleTxt, time, classNames = [''], salary, text, companies}: PropsType) {
    return(
        <div className={'course-header'}>
            <div className={`header__title flex-property-set_between ${classNames[0]}`}>
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
                <div className={`inf__item ${classNames[1]}`}>
                    <h3 className={'small-title'}>Duration</h3>
                    <p className={'light-grey-txt'}>{time}</p>
                </div>
                <div className={`inf__item ${classNames[1]}`}>
                    <h3 className={'small-title'}>{projects} projects</h3>
                    <p className={'light-grey-txt'}>in portfolio on GitHub</p>
                </div>
                <div className={`inf__item ${classNames[1]}`}>
                    <h3 className={'small-title'}>Team internship</h3>
                    <p className={'light-grey-txt'}>under the leadership of a team leader</p>
                </div>
                <div className={`inf__item ${classNames[1]}`}>
                    <h3 className={'small-title'}>We guarantee employment</h3>
                    <p className={'light-grey-txt'}>or refund money</p>
                </div>
            </div>
            {(text)
                ? (
                    <div className={`header-text ${classNames[1]}`}>
                        <p className={'text'}>{text}</p>
                        <div className={'job-inf-container flex-property-set_between'}>
                            <div className={`job-inf__item ${classNames[1]}`}>
                                <h3 className={'small-title'}>{companies} companies</h3>
                                <p className={'light-grey-txt'}>Are looking for a {profession}</p>
                            </div>
                            <div className={`job-inf__item ${classNames[1]}`}>
                                <h3 className={'small-title'}>{salary} usd</h3>
                                <p className={'light-grey-txt'}>Average salary</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={`header-job-inf job-inf-container flex-property-set_between ${classNames[1]}`}>
                        <h2 className={`text ${classNames[1]}`}>There is not enough staff in the development market</h2>
                        <div className={'job-inf'}>
                            <div className={`job-inf__item ${classNames[1]}`}>
                                <h3 className={'small-title'}>{companies} companies</h3>
                                <p className={'light-grey-txt'}>Are looking for a {profession}</p>
                            </div>
                            <div className={`job-inf__item ${classNames[1]}`}>
                                <h3 className={'small-title'}>{salary} usd</h3>
                                <p className={'light-grey-txt'}>Average salary</p>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}
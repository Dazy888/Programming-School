type ResumeTitlePropsType = {
    job: string
    salary: string
}

export function ResumeTitle({job, salary}: ResumeTitlePropsType) {
    return(
        <div className={'resume__title flex-property-set_between'}>
            <div className={'title__job'}>
                <img alt={'Avatar'} src={'https://248006.selcdn.ru/LandGen/blocks/resume/man.png'}/>
                <div className={'job__text'}>
                    <p className={'small-title'}>Job:</p>
                    <h1 className={'title'}>{job}</h1>
                </div>
            </div>
            <div className={'title__salary'}>
                <p className={'small-title'}>Minimal salary:</p>
                <h1 className={'title'}>{salary}</h1>
            </div>
        </div>
    )
}
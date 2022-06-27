import {useState} from "react";
import {ProjectsType} from "../../../../Redux/Courses-Reducer/Courses-Reducer"

type SliderControlsPropsType = {
    className: string
    length: number
    id: number
    changeId: (id: number) => void
}

export function SliderControls({className, length, changeId, id}: SliderControlsPropsType) {
    return(
        <div className={'text__controls flex-property-set_between'}>
            <button onClick={() => changeId(id - 1)} disabled={(id === 0)} className={'controls__btn'}><i className={`fa - solid fa-circle-arrow-left ${className}`}></i></button>
            <span className={'controls__count'}>
                            <span className={'count__current'}>{id + 1}</span>
                            <span className={'count__line'}>/</span>
                            <span className={'count__max'}>{length}</span>
                        </span>
            <button onClick={() => changeId(id + 1)} disabled={(id + 1 === length)} className={'controls__btn'}><i className={`fa - solid fa-circle-arrow-right ${className}`}></i></button>
        </div>
    )
}


export function Projects({photographs, texts, titles, className = ''}: ProjectsType) {
    const [id, changeId] = useState(0)

    return (
        <div className={'projects'}>
            <h1 className={'title'}>Graduation projects</h1>
            <div className={'projects__content flex-property-set_between'}>
                <div className={'content__img'}>
                    <img alt={'Photo'} src={photographs[id]}/>
                </div>
                <div className={'content__text'}>
                    <h3 className={'small-title'}>{titles[id]}</h3>
                    <p className={'light-grey-txt'}>{texts[id]}</p>
                    <SliderControls id={id} length={photographs.length} changeId={changeId} className={className}/>
                </div>
            </div>
        </div>
    )
}
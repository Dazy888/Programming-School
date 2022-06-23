import {useState} from "react";
import {ProjectsType} from "../../../Redux/Courses-Reducer/Courses-Reducer";

export function Projects({photographs, texts, titles, className}: ProjectsType) {
    const [id, changeId] = useState(0);

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
                    <div className={'text__controls flex-property-set_between'}>
                        <button onClick={() => changeId(id - 1)} disabled={(id === 0)} className={'controls__btn'}><i className={`fa - solid fa-circle-arrow-left ${className}`}></i></button>
                        <span className={'controls__count'}>
                            <span className={'count__current'}>{id + 1}</span>
                            <span className={'count__line'}>/</span>
                            <span className={'count__max'}>{photographs.length}</span>
                        </span>
                        <button onClick={() => changeId(id + 1)} disabled={(id + 1 === photographs.length)} className={'controls__btn'}><i className={`fa - solid fa-circle-arrow-right ${className}`}></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
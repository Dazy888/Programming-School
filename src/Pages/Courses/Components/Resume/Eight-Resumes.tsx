import {ResumeTitle} from "./Resume-Title"
import {SkillsRow} from "./Skills-Row"
import {Certificate} from "./Certificate"
import {ResumeType} from "../../../../Redux/Courses-Reducer/Courses-Reducer"
import {ResumePropsType} from "./Twelve-Resumes"

export function EightResumes({job, salary, texts, certificate, classNames = ['']}: ResumePropsType & ResumeType) {
    return(
        <div className={`resume ${classNames[1]}`}>
            <ResumeTitle job={job} salary={salary}/>
            <div className={'resume__skills'}>
                <h3 className={'skills__title'}>Professionals skills:</h3>
                <SkillsRow texts={texts.slice(0,4)}/>
                <SkillsRow texts={texts.slice(4,9)}/>
            </div>
            <span className={`line ${classNames[0]}`}/>
            <Certificate img={certificate}/>
        </div>
    )
}
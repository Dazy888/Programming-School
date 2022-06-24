import {CourseHeader} from "../Components/Header/Course-Header"
import {ForWho} from "../Components/For-Who/For-Who"
import {SkillsSixTitles} from "../Components/Skills/SkillsSixTitles"
import {CoursePropsType} from "./Types";
import {HowUse} from "../Components/How-Use/How-Use";

export function JavaPro({img, header, time, for_who, job_name, skills, classNames = ['']}: CoursePropsType) {
    return(
        <div className={'course-container'}>
            <CourseHeader companies={header.companies} salary={header.salary} classNames={classNames} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts}/>
            <SkillsSixTitles titles={skills.titles} texts={skills.texts} className={classNames[1]}/>
            <HowUse classNames={classNames} />
        </div>
    )
}
import {CourseHeader} from "../Components/Header/Course-Header"
import {ForWho} from "../Components/For-Who/For-Who"
import {SkillsNineTexts} from "../Components/Skills/SkillsNineTexts"
import {Projects} from "../Components/Projects/Projects"
import {CourseProjectsPropsType} from "./Types"
import {HowUse} from "../Components/How-Use/How-Use";

export function PythonFullstack({time, img, header, for_who, job_name, skills, projects, classNames = ['']}: CourseProjectsPropsType) {
    return(
        <div className={'course-container'}>
            <CourseHeader companies={header.companies} salary={header.salary} classNames={classNames} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts}/>
            <SkillsNineTexts texts={skills.texts} className={classNames[1]}/>
            <Projects className={classNames[2]} photographs={projects.photographs} titles={projects.titles} texts={projects.texts}/>
            <HowUse classNames={classNames} />
        </div>
    )
}
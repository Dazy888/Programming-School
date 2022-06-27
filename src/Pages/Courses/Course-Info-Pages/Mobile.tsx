import {CourseHeader} from "../Components/Header/Course-Header"
import {ForWho} from "../Components/For-Who/For-Who"
import {SkillsSixTitles} from "../Components/Skills/SkillsSixTitles"
import {Projects} from "../Components/Projects/Projects"
import {CourseProjectsPropsType} from "./Types"
import {HowUse} from "../Components/How-Use/How-Use";
import {Employment} from "../Components/Employment/Employment";

export type ExtraProjectPropsType = {
    projects_photographs: Array<string>
    projects_texts: Array<string>
    projects_titles?: Array<string>
}

export function Mobile({header, time, img, for_who, job_name, skills, projects, projects_texts, projects_photographs, classNames = ['']}: CourseProjectsPropsType & ExtraProjectPropsType) {
    return(
        <div className={'course-container'}>
            <CourseHeader text={header.textAboutJob} companies={header.companies} salary={header.salary} classNames={classNames} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts}/>
            <SkillsSixTitles titles={skills.titles} texts={skills.texts} className={classNames[1]}/>
            <Projects className={classNames[2]} photographs={projects_photographs} titles={projects.titles} texts={projects_texts}/>
            <HowUse classNames={classNames} />
            <Employment classNames={classNames}/>
        </div>
    )
}
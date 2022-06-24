import {CourseHeader} from "../Components/Header/Course-Header"
import {ForWho} from "../Components/For-Who/For-Who"
import {SkillsNineTexts} from "../Components/Skills/SkillsNineTexts"
import {Projects} from "../Components/Projects/Projects"
import {CourseProjectsPropsType} from "./Types";
import {HowUse} from "../Components/How-Use/How-Use";

export function Python({job_name, for_who, header, img, time, skills, projects}: CourseProjectsPropsType) {
    return(
        <div className={'course-container'}>
            <CourseHeader text={header.textAboutJob} companies={header.companies} salary={header.salary} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts}/>
            <SkillsNineTexts texts={skills.texts}/>
            <Projects photographs={projects.photographs} titles={projects.titles} texts={projects.texts}/>
            <HowUse/>
        </div>
    )
}
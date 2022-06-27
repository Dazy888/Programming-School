import {CourseHeader} from "../Components/Header/Course-Header"
import {ForWho} from "../Components/For-Who/For-Who"
import {SkillsFiveTitles} from "../Components/Skills/SkillsFiveTitles"
import {Projects} from "../Components/Projects/Projects"
import {CourseProjectsPropsType} from "./Types"
import {HowUse} from "../Components/How-Use/How-Use";
import {Employment} from "../Components/Employment/Employment";

export function Web({for_who, time, img, header, job_name, skills, projects, classNames = ['']}: CourseProjectsPropsType) {
    return(
        <div className={'course-container'}>
            <CourseHeader text={header.textAboutJob} salary={header.salary} companies={header.companies} classNames={classNames} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts} />
            <SkillsFiveTitles titles={skills.titles} texts={skills.texts} className={classNames[1]}/>
            <Projects className={classNames[2]} photographs={projects.photographs} titles={projects.titles} texts={projects.texts}/>
            <HowUse classNames={classNames} />
            <Employment className={classNames[2]}/>
        </div>
    )
}
import {CourseHeader} from "./Components/Course-Header"
import {ForWho} from "./Components/For-Who"
import {CourseProjectsPropsType, CoursePropsType} from "./Python"
import {SkillsFiveTitles} from "./Components/Skills/SkillsFiveTitles";
import {Projects} from "./Components/Projects";

export function Web({for_who, time, img, header, job_name, skills, projects}: CourseProjectsPropsType) {
    return(
        <div className={'course-container'}>
            <CourseHeader text={header.textAboutJob} salary={header.salary} companies={header.companies} classNames={header.classNames} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts} />
            <SkillsFiveTitles titles={skills.titles} texts={skills.texts} className={header.classNames[1]}/>
            <Projects className={projects.className} photographs={projects.photographs} titles={projects.titles} texts={projects.texts}/>
        </div>
    )
}
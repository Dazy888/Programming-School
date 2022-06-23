import {CourseHeader} from "./Components/Course-Header";
import {ForWho} from "./Components/For-Who";
import {ForWhoType, HeaderType, ProjectsType, SkillsType} from "../../Redux/Courses-Reducer/Courses-Reducer";
import {SkillsNineTexts} from "./Components/Skills/SkillsNineTexts";
import {Projects} from "./Components/Projects";

export type CourseProjectsPropsType = {
    header: HeaderType
    for_who: ForWhoType
    skills: SkillsType
    projects: ProjectsType
    job_name: string
    img: string
    time: string
}

export type CoursePropsType = {
    header: HeaderType
    for_who: ForWhoType
    skills: SkillsType
    job_name: string
    img: string
    time: string
}

export function Python({job_name, for_who, header, img, time, skills, projects}: CourseProjectsPropsType) {
    return(
        <div className={'course-container'}>
            <CourseHeader text={header.textAboutJob} companies={header.companies} salary={header.salary} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts}/>
            <SkillsNineTexts texts={skills.texts}/>
            <Projects photographs={projects.photographs} titles={projects.titles} texts={projects.texts}/>
        </div>
    )
}
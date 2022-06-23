import {CourseHeader} from "./Components/Course-Header"
import {ForWho} from "./Components/For-Who";
import {CourseProjectsPropsType} from "./Python";
import {SkillsFiveTitles} from "./Components/Skills/SkillsFiveTitles";
import {Projects} from "./Components/Projects";
import {ExtraProjectPropsType} from "./Mobile";

export function FrontendPro({header, time, img, for_who, job_name, skills, projects, projects_texts, projects_photographs, projects_titles}: CourseProjectsPropsType & ExtraProjectPropsType) {
    return(
        <div className={'course-container'}>
            <CourseHeader companies={header.companies} salary={header.salary} classNames={header.classNames} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts}/>
            <SkillsFiveTitles titles={skills.titles} texts={skills.texts} className={header.classNames[1]}/>
            <Projects className={projects.className} photographs={projects_photographs} titles={(projects_titles) ? projects_titles : []} texts={projects_texts}/>
        </div>
    )
}
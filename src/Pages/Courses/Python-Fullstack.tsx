import {CourseHeader} from "./Components/Course-Header"
import {ForWho} from "./Components/For-Who"
import {CoursePropsType} from "./Python"
import {SkillsNineTexts} from "./Components/Skills/SkillsNineTexts";

export function PythonFullstack({time, img, header, for_who, job_name, skills}: CoursePropsType) {
    return(
        <div className={'course-container'}>
            <CourseHeader companies={header.companies} salary={header.salary} classNames={header.classNames} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts}/>
            <div className={'course-container'}>
                <CourseHeader text={header.textAboutJob} companies={header.companies} salary={header.salary} classNames={header.classNames} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
                <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts}/>
                <SkillsNineTexts texts={skills.texts} className={header.classNames[1]}/>
            </div>
        </div>
    )
}
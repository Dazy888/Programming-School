import {CourseHeader} from "./Components/Course-Header"
import {ForWho} from "./Components/For-Who";
import {CoursePropsType} from "./Python";
import {SkillsSixTitles} from "./Components/Skills/SkillsSixTitles";

export function Android({header, time, img, for_who, job_name, skills}: CoursePropsType) {
    return(
        <div className={'course-container'}>
            <CourseHeader text={header.textAboutJob} salary={header.salary} companies={header.companies} classNames={header.classNames} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts}/>
            <SkillsSixTitles titles={skills.titles} texts={skills.texts} className={header.classNames[1]}/>
        </div>
    )
}
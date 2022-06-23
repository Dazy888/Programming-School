import {CourseHeader} from "./Components/Course-Header"
import {ForWho} from "./Components/For-Who"
import {CoursePropsType} from "./Python";
import {SkillsSixTexts} from "./Components/Skills/SkillsSixTexts";

export function Java({header, time, img, for_who, job_name, skills}: CoursePropsType) {
    return(
        <div className={'course-container'}>
            <CourseHeader companies={header.companies} salary={header.salary} classNames={header.classNames} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts}/>
            <SkillsSixTexts texts={skills.texts} className={header.classNames[1]}/>
        </div>
    )
}
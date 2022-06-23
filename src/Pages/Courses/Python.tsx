import {CourseHeader} from "./Components/Course-Header";
import {ForWho} from "./Components/For-Who";
import {ForWhoType, HeaderType, SkillsType} from "../../Redux/Courses-Reducer/Courses-Reducer";
import {SkillsNineTexts} from "./Components/Skills/SkillsNineTexts";

export type CoursePropsType = {
    header: HeaderType
    for_who: ForWhoType
    skills: SkillsType
    job_name: string
    img: string
    time: string
}

export function Python({job_name, for_who, header, img, time, skills}: CoursePropsType) {
    return(
        <div className={'course-container'}>
            <CourseHeader text={header.textAboutJob} companies={header.companies} salary={header.salary} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts}/>
            <SkillsNineTexts texts={skills.texts}/>
        </div>
    )
}
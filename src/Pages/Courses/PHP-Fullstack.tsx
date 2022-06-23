import {CourseHeader} from "./Components/Course-Header"
import {ForWho} from "./Components/For-Who"
import {CourseProjectsPropsType, CoursePropsType} from "./Python"
import {Skill} from "./Components/Skills/Skill";
import {Projects} from "./Components/Projects";

export function PHPFullstack({header, time, img, for_who, job_name, skills, projects}: CourseProjectsPropsType) {
    return(
        <div className={'course-container'}>
            <CourseHeader companies={header.companies} salary={header.salary} classNames={header.classNames} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts}/>
            <div className={'skills'}>
                <h1 className={'title'}>What will you learn</h1>
                <div className={'skills__row flex-property-set_between'}>
                    <Skill className={header.classNames[1]} text={skills.texts[0]}/>
                    <Skill className={header.classNames[1]} text={skills.texts[1]}/>
                    <Skill className={header.classNames[1]} text={skills.texts[2]}/>
                </div>
                <div className={'skills__row flex-property-set_between'}>
                    <Skill className={header.classNames[1]} text={skills.texts[3]}/>
                    <Skill className={header.classNames[1]} text={skills.texts[4]}/>
                    <Skill className={header.classNames[1]} text={skills.texts[5]}/>
                </div>
                <div className={'skills__row flex-property-set_between'}>
                    <Skill className={header.classNames[1]} text={skills.texts[6]}/>
                    <Skill className={header.classNames[1]} text={skills.texts[7]}/>
                </div>
            </div>
            <Projects className={projects.className} photographs={projects.photographs} titles={projects.titles} texts={projects.texts}/>
        </div>
    )
}
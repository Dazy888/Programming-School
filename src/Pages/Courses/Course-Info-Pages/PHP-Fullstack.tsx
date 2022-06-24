import {CourseHeader} from "../Components/Header/Course-Header"
import {ForWho} from "../Components/For-Who/For-Who"
import {Skill} from "../Components/Skills/Skill"
import {Projects} from "../Components/Projects/Projects"
import {CourseProjectsPropsType} from "./Types";
import {HowUse} from "../Components/How-Use/How-Use";
import {Employment} from "../Components/Employment/Employment";

export function PHPFullstack({header, time, img, for_who, job_name, skills, projects, classNames = ['']}: CourseProjectsPropsType) {
    return(
        <div className={'course-container'}>
            <CourseHeader companies={header.companies} salary={header.salary} classNames={classNames} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts}/>
            <div className={'skills'}>
                <h1 className={'title'}>What will you learn</h1>
                <div className={'skills__row flex-property-set_between'}>
                    <Skill className={classNames[1]} text={skills.texts[0]}/>
                    <Skill className={classNames[1]} text={skills.texts[1]}/>
                    <Skill className={classNames[1]} text={skills.texts[2]}/>
                </div>
                <div className={'skills__row flex-property-set_between'}>
                    <Skill className={classNames[1]} text={skills.texts[3]}/>
                    <Skill className={classNames[1]} text={skills.texts[4]}/>
                    <Skill className={classNames[1]} text={skills.texts[5]}/>
                </div>
                <div className={'skills__row flex-property-set_between'}>
                    <Skill className={classNames[1]} text={skills.texts[6]}/>
                    <Skill className={classNames[1]} text={skills.texts[7]}/>
                </div>
            </div>
            <Projects className={classNames[2]} photographs={projects.photographs} titles={projects.titles} texts={projects.texts}/>
            <HowUse classNames={classNames} />
            <Employment/>
        </div>
    )
}
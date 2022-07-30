import {CourseHeader} from "../Components/Header/Course-Header"
import {ForWho} from "../Components/For-Who/For-Who"
import {Skill} from "../Components/Skills/Skill"
import {Projects} from "../Components/Projects/Projects"
import {CourseProjectsPropsType} from "./Types"
import {HowUse} from "../Components/How-Use/How-Use"
import {Employment} from "../Components/Employment/Employment"
import {Title} from "../Components/Content/Title"
import {CourseTitle} from "../Components/Content/Course-Title"
import {Note} from "../Components/Content/Note"
import {MarkupBasic} from "../Components/Content/Courses/Markup-Basic"
import {JSBasic} from "../Components/Content/Courses/JS-Basic"
import {Node} from "../Components/Content/Courses/Node"
import {Vue} from "../Components/Content/Courses/Vue"
import {ReactFramework} from "../Components/Content/Courses/React-Framework"
import {Angular} from "../Components/Content/Courses/Angular"
import {MarkupAdvanced} from "../Components/Content/Courses/Markup-Advanced"
import {JSAdvanced} from "../Components/Content/Courses/JS-Advanced"
import {Bash} from "../Components/Content/Courses/Bash"
import {FigmaPro} from "../Components/Content/Courses/Figma-Pro"
import {Photoshop} from "../Components/Content/Courses/Photoshop"
import {Knowledge} from "../Components/Content/Courses/Knowledges"
import {Career} from "../Components/Content/Courses/Career"
import {English} from "../Components/Content/Courses/English"
import {Git} from "../Components/Content/Courses/Git"
import {Triangle} from "../Components/Content/Triangle"
import {CoursesTitle} from "../Components/Content/Courses-Title"
import {TwelveTeachers} from "../Components/Teachers/Twelve-Teachers"
import {OneReview} from "../Components/Reviews/One-Review"
import {ResumeTitle} from "../Components/Resume/Resume-Title";
import {SkillsRow} from "../Components/Resume/Skills-Row";
import {Certificate} from "../Components/Resume/Certificate";
import React from "react";

export function FrontendFull({header, time, img, for_who, job_name, skills, projects, classNames = [''], content, teachers, reviews, resume}: CourseProjectsPropsType) {
    return (
        <div className={'course-container'}>
            <CourseHeader text={header.textAboutJob} salary={header.salary} companies={header.companies} classNames={classNames} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
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
                </div>
            </div>
            <Projects className={classNames[2]} photographs={projects.photographs} titles={projects.titles} texts={projects.texts}/>
            <HowUse classNames={classNames}/>
            <Employment classNames={classNames}/>
            <div className={`content`}>
                <Triangle/>
                <div className={`content__container`}>
                    <Title text={content.title.text} numbers={content.title.numbers} descriptions={content.title.descriptions}/>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Main Courses'}/>
                        <MarkupBasic/>
                        <JSBasic/>
                        <Node/>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[0]} isButton={true}/>
                            <ul className={'item__list'}>
                                <li className={'text'}>Introduction</li>
                                <li className={'text'}>Compilation and primitive types</li>
                                <li className={'text'}>Applying Types</li>
                                <li className={'text'}>OOP typing</li>
                                <li className={'text'}>Generics</li>
                                <li className={'text'}>Utility types</li>
                                <li className={'text'}>Additional types</li>
                            </ul>
                        </div>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Choice of direction'}/>
                        <Vue/>
                        <ReactFramework/>
                        <Angular/>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Additional courses'}/>
                        <MarkupAdvanced/>
                        <JSAdvanced/>
                        <Git/>
                        <Bash/>
                        <FigmaPro/>
                        <Photoshop/>
                        <English/>
                        <Knowledge/>
                        <Career/>
                    </div>
                    <Note/>
                </div>
            </div>
            <TwelveTeachers avatars={[teachers.mixeev.img, teachers.tiunov.img, teachers.kornienko.img, teachers.vasiyanovich.img, teachers.avdeev.img, teachers.bondarovich.img, teachers.savchenko.img, teachers.mirotin.img, teachers.pozdnyakov.img, teachers.klimonova.img, teachers.kuznetsov.img, teachers.borzunov.img]}
                            names={[teachers.mixeev.name, teachers.tiunov.name, teachers.kornienko.name, teachers.vasiyanovich.name, teachers.avdeev.name, teachers.bondarovich.name, teachers.savchenko.name, teachers.mirotin.name, teachers.pozdnyakov.name, teachers.klimonova.name, teachers.kuznetsov.name, teachers.borzunov.name]}
                            surnames={[teachers.mixeev.surname, teachers.tiunov.surname, teachers.kornienko.surname, teachers.vasiyanovich.surname, teachers.avdeev.surname, teachers.bondarovich.surname, teachers.savchenko.surname, teachers.mirotin.surname, teachers.pozdnyakov.surname, teachers.klimonova.surname, teachers.kuznetsov.surname, teachers.borzunov.surname]}
                            descriptions={[teachers.mixeev.description, teachers.tiunov.description, teachers.kornienko.description, teachers.vasiyanovich.description, teachers.avdeev.description, teachers.bondarovich.description, teachers.savchenko.description, teachers.mirotin.description, teachers.pozdnyakov.description, teachers.klimonova.description, teachers.kuznetsov.description, teachers.borzunov.description]}/>
            <OneReview letter={reviews.letters[0]} user_data={reviews.user_data[0]} course={reviews.course} text={reviews.texts[0]}/>
            <div className={`resume ${classNames[1]}`}>
                <ResumeTitle job={job_name} salary={resume.salary}/>
                <div className={'resume__skills'}>
                    <SkillsRow texts={resume.texts.slice(0,4)}/>
                    <ul className={'skills__list flex-property-set_between'}>
                        <li className={'light-grey-txt'}>{resume.texts[4]}</li>
                        <li className={'light-grey-txt'}>{resume.texts[5]}</li>
                        <li className={'light-grey-txt'}>{resume.texts[6]}</li>
                    </ul>
                </div>
                <span className={`line ${classNames[0]}`}/>
                <Certificate img={resume.certificate}/>
            </div>
        </div>
    )
}
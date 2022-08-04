import {CourseHeader} from "../Components/Header/Course-Header"
import {ForWho} from "../Components/For-Who/For-Who"
import {SkillsFiveTitles} from "../Components/Skills/SkillsFiveTitles"
import {Projects} from "../Components/Projects/Projects"
import {CourseProjectsPropsType} from "./Types"
import {HowUse} from "../Components/How-Use/How-Use"
import {Employment} from "../Components/Employment/Employment"
import {Title} from "../Components/Content/Title"
import {Note} from "../Components/Content/Note"
import {CourseSmall} from "../Components/Content/Course-Small"
import {Triangle} from "../Components/Content/Triangle"
import {CoursesTitle} from "../Components/Content/Courses-Title"
import {CourseTitleSmall} from "../Components/Content/Course-Title-Small";
import {TeachersRow} from "../Components/Teachers/Teachers-Row";
import {TeachersItem} from "../../Teachers/Components/TeachersItem";
import {TwelveResumes} from "../Components/Resume/Twelve-Resumes";
import {FiveQuestions} from "../Components/Questions/Five-Question";

export function FrontendPro({header, time, img, for_who, job_name, skills, projects, classNames = [''], content, teachers, resume, questions}: CourseProjectsPropsType) {
    return(
        <div className={'course-container'}>
            <CourseHeader companies={header.companies} salary={header.salary} classNames={classNames} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts}/>
            <SkillsFiveTitles titles={skills.titles} texts={skills.texts} className={classNames[1]}/>
            <Projects className={classNames[2]} photographs={projects.photographs} titles={projects.titles} texts={projects.texts}/>
            <HowUse classNames={classNames} />
            <Employment/>
            <div className={`content`}>
                <Triangle/>
                <div className={`content__container`}>
                    <Title text={content.title.text} numbers={content.title.numbers} descriptions={content.title.descriptions}/>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Basic Skills'}/>
                        <CourseSmall title={content.courses.titles[0]} text={'You will get acquainted with HTML and CSS, cross-browser and adaptive layout. Learn to work with animation and hosting. Designing a site for an art gallery according to ready-made layouts'}/>
                        <CourseSmall title={content.courses.titles[1]} text={'Learn to work with variables and numbers, explore arrays, loops, objects and functions. Get familiar with constants, const and var keywords, scopes, closures and learn how to use them in your work'}/>
                        <CourseSmall title={content.courses.titles[2]} text={'Expand your professional knowledge and skills as a developer by learning how to use the ReactFramework.js framework in your work'}/>
                        <CourseSmall title={content.courses.titles[3]} text={'Course for practicing web and frontend developers. Expand your skills by learning the Vue.js trending framework'}/>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Additional courses'}/>
                        <CourseTitleSmall title={content.courses.titles[4]}/>
                        <CourseTitleSmall title={content.courses.titles[5]}/>
                        <CourseTitleSmall title={content.courses.titles[6]}/>
                        <CourseTitleSmall title={content.courses.titles[7]}/>
                        <CourseTitleSmall title={content.courses.titles[8]}/>
                        <CourseTitleSmall title={content.courses.titles[9]}/>
                        <CourseTitleSmall title={content.courses.titles[10]}/>
                        <CourseTitleSmall title={content.courses.titles[11]}/>
                        <CourseTitleSmall title={content.courses.titles[12]}/>
                        <CourseTitleSmall title={content.courses.titles[13]}/>
                        <CourseTitleSmall title={content.courses.titles[14]}/>
                    </div>
                    <Note/>
                </div>
            </div>
            <div className={'teachers'}>
                <h1 className={'title'}>Teachers</h1>
                <TeachersRow avatars={[teachers.mixeev.img, teachers.tiunov.img, teachers.kornienko.img, teachers.vasiyanovich.img, teachers.klimonova.img, teachers.bondarovich.img, teachers.mixeev.img]}
                             names={[teachers.mixeev.name, teachers.tiunov.name, teachers.kornienko.name, teachers.vasiyanovich.name, teachers.klimonova.name, teachers.bondarovich.name, teachers.mixeev.name]}
                             surnames={[teachers.mixeev.surname, teachers.tiunov.surname, teachers.kornienko.surname, teachers.vasiyanovich.surname, teachers.klimonova.surname, teachers.bondarovich.surname, teachers.mixeev.surname]}
                             descriptions={[teachers.mixeev.description, teachers.tiunov.description, teachers.kornienko.description, teachers.vasiyanovich.description, teachers.klimonova.description, teachers.bondarovich.description, teachers.mixeev.description]}/>
                <div className={'teachers__row-four teachers__row-four flex-property-set_between'}>
                    <TeachersItem img={teachers.savchenko.img} name={teachers.savchenko.name} surname={teachers.savchenko.surname} description={teachers.savchenko.description}/>
                    <TeachersItem img={teachers.avdeev.img} name={teachers.avdeev.name} surname={teachers.avdeev.surname} description={teachers.avdeev.description}/>
                    <TeachersItem img={teachers.borzunov.img} name={teachers.borzunov.name} surname={teachers.borzunov.surname} description={teachers.borzunov.description}/>
                    <TeachersItem img={teachers.kuznetsov.img} name={teachers.kuznetsov.name} surname={teachers.kuznetsov.surname} description={teachers.kuznetsov.description}/>
                </div>
            </div>
            <TwelveResumes job={job_name} salary={resume.salary} texts={resume.texts} certificate={resume.certificate} classNames={classNames}/>
            <FiveQuestions classNames={[`${classNames[4]}`, '', '', '', '', '']} titles={questions.titles} texts={questions.texts}/>
        </div>
    )
}
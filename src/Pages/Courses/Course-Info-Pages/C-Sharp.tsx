import {CourseHeader} from "../Components/Header/Course-Header"
import {ForWho} from "../Components/For-Who/For-Who"
import {SkillsSixTexts} from "../Components/Skills/SkillsSixTexts"
import {Projects} from "../Components/Projects/Projects"
import {CourseProjectsPropsType} from "./Types"
import {HowUse} from "../Components/How-Use/How-Use"
import {Employment} from "../Components/Employment/Employment"
import {Title} from "../Components/Content/Title"
import {CourseTitle} from "../Components/Content/Course-Title"
import {MarkupBasic} from "../Components/Content/Courses/Markup-Basic"
import {MarkupAdvanced} from "../Components/Content/Courses/Markup-Advanced"
import {EnglishSmall} from "../Components/Content/Courses/English-Small"
import {Knowledge} from "../Components/Content/Courses/Knowledges"
import {SQL} from "../Components/Content/Courses/SQL"
import {Career} from "../Components/Content/Courses/Career"
import {Note} from "../Components/Content/Note"
import {Git} from "../Components/Content/Courses/Git"
import {Triangle} from "../Components/Content/Triangle"
import {TwoTeachers} from "../Components/Teachers/Two-Teachers";
import {TenResumes} from "../Components/Resume/Ten-Resumes";

export function CSharp({header, for_who, img, time, job_name, skills, projects, classNames = [''], content, teachers, resume}: CourseProjectsPropsType) {
    return (
        <div className={'course-container'}>
            <CourseHeader companies={header.companies} salary={header.salary} text={header.textAboutJob} classNames={classNames} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts}/>
            <SkillsSixTexts texts={skills.texts} className={classNames[1]}/>
            <Projects className={classNames[2]} photographs={projects.photographs} titles={projects.titles} texts={projects.texts}/>
            <HowUse classNames={classNames}/>
            <Employment classNames={classNames}/>
            <div className={`content ${classNames[1]}`}>
                <Triangle className={classNames[3]}/>
                <div className={`content__container ${classNames[4]}`}>
                    <Title text={content.title.text} numbers={content.title.numbers} descriptions={content.title.descriptions}/>
                    <div className={'content__courses'}>
                        <div className={'courses__item big-item'}>
                            <CourseTitle title={content.courses.titles[0]} isButton={true}/>
                            <ul className={'item__list'}>
                                <li className={'text'}>Introduction to the .NET Developer Profession</li>
                                <li className={'text'}>Basic C# features</li>
                                <li className={'text'}>Control Structures: Branching and Loops</li>
                                <li className={'text'}>Arrays</li>
                                <li className={'text'}>Methods</li>
                                <li className={'text'}>Files</li>
                                <li className={'text'}>Structures and Introduction to OOP</li>
                                <li className={'text'}>Collections</li>
                                <li className={'text'}>Networking</li>
                                <li className={'text'}>Visual programming. Fundamentals of Windows Presentation Technology</li>
                                <li className={'text'}>Deep dive into OOP</li>
                                <li className={'text'}>Delegates</li>
                                <li className={'text'}>Additional material</li>
                                <li className={'text'}>Multithreading</li>
                                <li className={'text'}>ADO</li>
                                <li className={'text'}>Entity Framework</li>
                                <li className={'text'}>Patterns</li>
                                <li className={'text'}>ASP.NET Core</li>
                                <li className={'text'}>Web-API ASP.NET Core</li>
                                <li className={'text'}>What's next?</li>
                            </ul>
                        </div>
                        <MarkupBasic/>
                        <MarkupAdvanced/>
                        <Git/>
                        <EnglishSmall/>
                        <Knowledge/>
                        <SQL/>
                        <Career/>
                    </div>
                    <Note/>
                </div>
            </div>
            <TwoTeachers avatars={[teachers.avatars[0], teachers.img]} names={[teachers.names[0], teachers.name]} surnames={[teachers.surnames[0], teachers.surname]} descriptions={[teachers.descriptions[0], teachers.description]} texts={[teachers.texts[0], teachers.text]}/>
            <TenResumes job={job_name} salary={resume.salary} texts={resume.texts} certificate={resume.certificate} classNames={classNames}/>
        </div>
    )
}
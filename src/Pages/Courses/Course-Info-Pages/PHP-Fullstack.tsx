import {CourseHeader} from "../Components/Header/Course-Header"
import {ForWho} from "../Components/For-Who/For-Who"
import {Projects} from "../Components/Projects/Projects"
import {CourseProjectsPropsType} from "./Types"
import {HowUse} from "../Components/How-Use/How-Use"
import {Employment} from "../Components/Employment/Employment"
import {Title} from "../Components/Content/Title"
import {CourseTitle} from "../Components/Content/Course-Title"
import {MarkupBasic} from "../Components/Content/Courses/Markup-Basic"
import {MarkupAdvanced} from "../Components/Content/Courses/Markup-Advanced"
import {JSBasic} from "../Components/Content/Courses/JS-Basic"
import {JSAdvanced} from "../Components/Content/Courses/JS-Advanced"
import {Vue} from "../Components/Content/Courses/Vue"
import {ReactFramework} from "../Components/Content/Courses/React-Framework"
import {Angular} from "../Components/Content/Courses/Angular"
import {TouchTyping} from "../Components/Content/Courses/Touch-Typing"
import {Photoshop} from "../Components/Content/Courses/Photoshop"
import {Figma} from "../Components/Content/Courses/Figma"
import {Knowledge} from "../Components/Content/Courses/Knowledges"
import {Bash} from "../Components/Content/Courses/Bash"
import {Git} from "../Components/Content/Courses/Git"
import {EnglishBig} from "../Components/Content/Courses/English-Big"
import {Career} from "../Components/Content/Courses/Career"
import {Note} from "../Components/Content/Note"
import {SkillsEightTexts} from "../Components/Skills/SkillsEightTexts"
import {Triangle} from "../Components/Content/Triangle"
import {CoursesTitle} from "../Components/Content/Courses-Title"
import {CourseTitleSmall} from "../Components/Content/Course-Title-Small"
import {TeachersItem} from "../../Teachers/Components/TeachersItem"
import {OneReview} from "../Components/Reviews/One-Review"

export function PHPFullstack({header, time, img, for_who, job_name, skills, projects, classNames = [''], content, teachers, reviews}: CourseProjectsPropsType) {
    return(
        <div className={'course-container'}>
            <CourseHeader companies={header.companies} salary={header.salary} classNames={classNames} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts}/>
            <SkillsEightTexts className={classNames[1]} texts={skills.texts}/>
            <Projects className={classNames[2]} photographs={projects.photographs} titles={projects.titles} texts={projects.texts}/>
            <HowUse classNames={classNames} />
            <Employment classNames={classNames}/>
            <div className={`content ${classNames[1]}`}>
                <Triangle className={classNames[3]}/>
                <div className={`content__container ${classNames[4]}`}>
                    <Title text={content.title.text} numbers={content.title.numbers} descriptions={content.title.descriptions}/>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Main courses'}/>
                        <MarkupBasic/>
                        <MarkupAdvanced/>
                        <JSBasic/>
                        <JSAdvanced/>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[0]} isButton={true}/>
                            <ul className={'item__list'}>
                                <li className={'text'}>Introduction to programming</li>
                                <li className={'text'}>Data management structure. PHP 7 basic concepts</li>
                                <li className={'text'}>Protocol HTTP/HTTPS</li>
                                <li className={'text'}>Custom functions</li>
                                <li className={'text'}>Files and directories</li>
                                <li className={'text'}>Cookie/Session</li>
                                <li className={'text'}>MySQL database</li>
                                <li className={'text'}>Course work</li>
                            </ul>
                        </div>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[1]} isButton={true}/>
                            <ul className={'item__list'}>
                                <li className={'text'}>Objects (basic concepts)</li>
                                <li className={'text'}>Principles</li>
                                <li className={'text'}>Objects (advanced concepts)</li>
                                <li className={'text'}>Functions and standards for working with classes</li>
                                <li className={'text'}>Exceptions and other built-in classes</li>
                                <li className={'text'}>OOP. Templates</li>
                                <li className={'text'}>Course work</li>
                            </ul>
                        </div>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Choice course'}/>
                        <Vue/>
                        <ReactFramework/>
                        <Angular/>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Additional courses'}/>
                        <TouchTyping/>
                        <Photoshop/>
                        <Figma/>
                        <Knowledge/>
                        <Bash/>
                        <Git/>
                        <EnglishBig/>
                        <Career/>
                        <CourseTitleSmall title={'Soft skills for a programmer'}/>
                        <CourseTitleSmall title={'Algorithms and data structures'}/>
                    </div>
                    <Note/>
                </div>
            </div>
            <div className={'teachers'}>
                <h1 className={'title'}>Teachers</h1>
                <div className={'teachers__row flex-property-set_between'}>
                    <TeachersItem img={teachers.avatars[0]} name={teachers.names[0]} surname={teachers.surnames[0]} description={teachers.descriptions[0]}/>
                    <TeachersItem img={teachers.avatars[1]} name={teachers.names[1]} surname={teachers.surnames[1]} description={teachers.descriptions[1]}/>
                    <TeachersItem img={teachers.pilipenko.img} name={teachers.pilipenko.name} surname={teachers.pilipenko.surname} description={teachers.pilipenko.description}/>
                    <TeachersItem img={teachers.yakovushen.img} name={teachers.yakovushen.name} surname={teachers.yakovushen.surname} description={teachers.yakovushen.description}/>
                </div>
            </div>
            <OneReview letter={reviews.letters[0]} user_data={reviews.user_data[0]} course={reviews.course} text={reviews.texts[0]}/>
        </div>
    )
}
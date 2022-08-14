import {CourseHeader} from "../Components/Header/Course-Header"
import {ForWho} from "../Components/For-Who/For-Who"
import {SkillsSixTitles} from "../Components/Skills/SkillsSixTitles"
import {Projects} from "../Components/Projects/Projects"
import {CourseProjectsPropsType} from "./Types"
import {HowUse} from "../Components/How-Use/How-Use"
import {Employment} from "../Components/Employment/Employment"
import {Title} from "../Components/Content/Title"
import {CourseTitle} from "../Components/Content/Course-Title"
import {Note} from "../Components/Content/Note"
import {SQL} from "../Components/Content/Courses/SQL"
import {EnglishBig} from "../Components/Content/Courses/English-Big"
import {Career} from "../Components/Content/Courses/Career"
import {Figma} from "../Components/Content/Courses/Figma"
import {Testing} from "../Components/Content/Courses/Testing"
import {Git} from "../Components/Content/Courses/Git"
import {Triangle} from "../Components/Content/Triangle"
import {CoursesTitle} from "../Components/Content/Courses-Title"
import {TeachersItem} from "../../Teachers/Components/TeachersItem"
import {TeachersRow} from "../Components/Teachers/Teachers-Row"
import {OneReview} from "../Components/Reviews/One-Review"
import {TwelveResumes} from "../Components/Resume/Twelve-Resumes"
import {CourseSmall} from "../Components/Content/Course-Small";
import React, {useState} from "react";
import {Registration} from "../Components/Registration/Registration";

export function Android({header, time, img, for_who, job_name, skills, projects, classNames = [''], content, teachers, reviews, resume, questions}: CourseProjectsPropsType) {
    const [employers_feedback_margin, changeEmployersFeedbackMargin] = useState(0)
    const [careerCenterId, changeCareerCenterId] = useState(0)
    const [reviewsId, changeReviewsId] = useState(0)

    return(
        <div className={'course-container'}>
            <CourseHeader text={header.textAboutJob} salary={header.salary} companies={header.companies} classNames={classNames} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts}/>
            <SkillsSixTitles titles={skills.titles} texts={skills.texts} className={classNames[1]}/>
            <Projects className={classNames[2]} photographs={projects.photographs} titles={projects.titles} texts={projects.texts}/>
            <HowUse classNames={classNames} />
            <Employment changeMargin={changeEmployersFeedbackMargin} margin={employers_feedback_margin} reviewsId={reviewsId} changeCareerCenterId={changeCareerCenterId} changeReviewsId={changeReviewsId} careerCenterId={careerCenterId} classNames={classNames}/>
            <div className={`content ${classNames[1]}`}>
                <Triangle className={classNames[3]}/>
                <div className={`content__container ${classNames[4]}`}>
                    <Title text={content.title.text} numbers={content.title.numbers} descriptions={content.title.descriptions}/>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Main unit'}/>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[0]} isButton={true}/>
                            <p className={'text'}>Earn to code in Kotlin and handle errors. Get to know the principles of OOP, asynchronous and reactive programming</p>
                            <div className={'item__txt'}>
                                <ul className={'item__list'}>
                                    <li className={'text'}>Variables</li>
                                    <li className={'text'}>Functions</li>
                                    <li className={'text'}>Conditions and cycles</li>
                                    <li className={'text'}>Collections</li>
                                    <li className={'text'}>Objects</li>
                                    <li className={'text'}>OOP</li>
                                    <li className={'text'}>Type Comparison</li>
                                    <li className={'text'}>Exceptions</li>
                                    <li className={'text'}>Coroutines</li>
                                    <li className={'text'}>Streams</li>
                                </ul>
                            </div>
                        </div>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[1]} isButton={true}/>
                            <p className={'text'}>You will go through the basics of Android development: learn how to make screens, animate interfaces, program logic, work with data and the network. Develop an app similar to Unsplash, Reddit or Strava of your choice</p>
                            <div className={'item__txt'}>
                                <ul className={'item__list'}>
                                    <li className={'text'}>Introduction to the profession</li>
                                    <li className={'text'}>Beginning of work</li>
                                    <li className={'text'}>Markup</li>
                                    <li className={'text'}>Components</li>
                                    <li className={'text'}>ConstraintLayout</li>
                                    <li className={'text'}>Project resources</li>
                                    <li className={'text'}>Application Screens</li>
                                    <li className={'text'}>Animation</li>
                                    <li className={'text'}>Application localization</li>
                                    <li className={'text'}>Life cycle</li>
                                    <li className={'text'}>Storage Basics</li>
                                    <li className={'text'}>Presentation Layer Architecture</li>
                                    <li className={'text'}>Networking (Retrofit)</li>
                                    <li className={'text'}>Working with the database (Room)</li>
                                    <li className={'text'}>Working with data arrays</li>
                                    <li className={'text'}>Working with protected OS partitions</li>
                                    <li className={'text'}>Location work</li>
                                    <li className={'text'}>Firebase</li>
                                </ul>
                            </div>
                        </div>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[2]} isButton={true}/>
                            <p className={'text'}>Learn advanced development techniques - customize the UI, optimize performance, get acquainted with design patterns and immerse yourself in the concept of reactive programming. At the end of the module - work on the application in a team</p>
                            <div className={'item__txt'}>
                                <ul className={'item__list'}>
                                    <li className={'text'}>Creating our own Views and animations</li>
                                    <li className={'text'}>Working with Lists</li>
                                    <li className={'text'}>Declarative UI</li>
                                    <li className={'text'}>Running Tasks in the Background: Practice</li>
                                    <li className={'text'}>Advanced dependency injection. Dagger 2</li>
                                    <li className={'text'}>Application building patterns</li>
                                    <li className={'text'}>Presentation Layer Patterns</li>
                                    <li className={'text'}>Testing</li>
                                    <li className={'text'}>Application Exit</li>
                                    <li className={'text'}>Memory leaks and static analyzers</li>
                                    <li className={'text'}>Code review at an advanced level</li>
                                    <li className={'text'}>RxJava. Basics</li>
                                    <li className={'text'}>RxJava. Part 2. Operators</li>
                                </ul>
                            </div>
                        </div>
                        <Git text={'Learn basic Git commands and learn how teams organize work into branches'}/>
                        <SQL text={'Learn the SQL query language at a deep level. Learn to write database queries and modify data'}/>
                        <EnglishBig text={'Learn to communicate and search for information in English'}/>
                        <Career text={'Get useful tips for further career development'}/>
                        <Figma text={'You will navigate the interface of the graphic editor and create design layouts for future applications'}/>
                        <Testing text={'You will navigate the interface of the graphic editor and create design layouts for future applications'}/>
                    </div>
                    <Note/>
                </div>
            </div>
            <div className={'teachers'}>
                <h1 className={'title'}>Teachers</h1>
                <TeachersRow avatars={[...teachers.avatars, teachers.malyx.img, teachers.pilipenko.img]}
                             names={[...teachers.names, teachers.malyx.name, teachers.pilipenko.name]}
                             surnames={[...teachers.surnames, teachers.malyx.surname, teachers.pilipenko.surname]}
                             descriptions={[...teachers.descriptions, teachers.malyx.description, teachers.pilipenko.description]}/>
                <div className={'teachers__row teachers__row_medium flex-property-set_between'}>
                    <TeachersItem img={teachers.ageychenko.img} name={teachers.ageychenko.name} surname={teachers.ageychenko.surname} description={teachers.ageychenko.description}/>
                    <TeachersItem img={teachers.ovchinnikov.img} name={teachers.ovchinnikov.name} surname={teachers.ovchinnikov.surname} description={teachers.ovchinnikov.description}/>
                    <TeachersItem img={teachers.rybakov.img} name={teachers.rybakov.name} surname={teachers.rybakov.surname} description={teachers.rybakov.description}/>
                </div>
            </div>
            <OneReview className={classNames[0]} letter={reviews.letters[0]} user_data={reviews.user_data[0]} course={reviews.course} text={reviews.texts[0]}/>
            <TwelveResumes job={job_name} salary={resume.salary} texts={resume.texts} certificate={resume.certificate} classNames={classNames}/>
            <Registration className={classNames[0]}/>
            <div className={`questions flex-property-set_between ${classNames[4]}`}>
                <h1 className={'title'}>Frequently asked Questions</h1>
                <div className={'questions__column'}>
                    <CourseSmall title={questions.titles[0]} text={questions.texts[0]}/>
                    <CourseSmall title={questions.titles[1]} text={questions.texts[1]}/>
                    <CourseSmall title={questions.titles[2]} text={questions.texts[2]}/>
                    <CourseSmall title={questions.titles[3]} text={questions.texts[3]}/>
                    <CourseSmall title={questions.titles[4]} text={questions.texts[4]}/>
                    <CourseSmall title={questions.titles[5]} text={questions.texts[5]}/>
                </div>
            </div>
        </div>
    )
}
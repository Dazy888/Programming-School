import {CourseHeader} from "../Components/Header/Course-Header"
import {ForWho} from "../Components/For-Who/For-Who"
import {SkillsSixTitles} from "../Components/Skills/SkillsSixTitles"
import {Projects} from "../Components/Projects/Projects"
import {CourseProjectsPropsType} from "./Types"
import {HowUse} from "../Components/How-Use/How-Use"
import {Employment} from "../Components/Employment/Employment"
import {Title} from "../Components/Content/Title"
import {CourseTitle} from "../Components/Content/Course-Title"
import {SQL} from "../Components/Content/Courses/SQL"
import {EnglishBig} from "../Components/Content/Courses/English-Big"
import {Career} from "../Components/Content/Courses/Career"
import {Figma} from "../Components/Content/Courses/Figma"
import {Testing} from "../Components/Content/Courses/Testing"
import {Note} from "../Components/Content/Note"
import {Git} from "../Components/Content/Courses/Git"
import {Triangle} from "../Components/Content/Triangle"
import {TeachersItem} from "../../Teachers/Components/TeachersItem"
import {OneReview} from "../Components/Reviews/One-Review";
import {TwelveResumes} from "../Components/Resume/Twelve-Resumes";
import {FiveQuestions} from "../Components/Questions/Five-Question";
import React, {useState} from "react";
import {Registration} from "../Components/Registration/Registration";

export function IOS({header, time, img, for_who, job_name, skills, projects, classNames = [''], content, teachers, reviews, resume, questions}: CourseProjectsPropsType) {
    const [employers_feedback_margin, changeEmployersFeedbackMargin] = useState(0)
    const [careerCenterId, changeCareerCenterId] = useState(0)
    const [reviewsId, changeReviewsId] = useState(0)

    return(
        <div className={'course-container'}>
            <CourseHeader text={header.textAboutJob} companies={header.companies} salary={header.salary} classNames={classNames} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts} />
            <SkillsSixTitles titles={skills.titles} texts={skills.texts} className={classNames[1]}/>
            <Projects className={classNames[2]} photographs={projects.photographs} titles={projects.titles} texts={projects.texts}/>
            <HowUse classNames={classNames} />
            <Employment changeMargin={changeEmployersFeedbackMargin} margin={employers_feedback_margin} reviewsId={reviewsId} changeCareerCenterId={changeCareerCenterId} changeReviewsId={changeReviewsId} careerCenterId={careerCenterId} classNames={classNames}/>
            <div className={`content ${classNames[1]}`}>
                <Triangle className={classNames[3]}/>
                <div className={`content__container ${classNames[4]}`}>
                    <Title text={content.title.text} numbers={content.title.numbers} descriptions={content.title.descriptions}/>
                    <div className={'content__courses'}>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[0]} isButton={true}/>
                            <div className={'item__txt'}>
                                <ul className={'item__list'}>
                                    <li className={'text'}>Development environment</li>
                                    <li className={'text'}>Swift development basics. Part 1. Variables and Numeric Types</li>
                                    <li className={'text'}>Swift development basics. Part 2. Working with strings</li>
                                    <li className={'text'}>Swift development basics. Part 3. Boolean types and flow control</li>
                                    <li className={'text'}>Swift development basics. Part 4. Working with arrays. Methods</li>
                                    <li className={'text'}>Swift development basics. Part 5. Working with dictionaries</li>
                                    <li className={'text'}>UI development basics</li>
                                    <li className={'text'}>Classes and structures in Swift</li>
                                    <li className={'text'}>OOP</li>
                                    <li className={'text'}>Protocols</li>
                                    <li className={'text'}>The layout of UI elements. Using Enum</li>
                                    <li className={'text'}>Working with layouts</li>
                                    <li className={'text'}>Life cycle and navigation</li>
                                    <li className={'text'}>Lists</li>
                                    <li className={'text'}>Libraries. Access Modifiers</li>
                                    <li className={'text'}>Version control</li>
                                    <li className={'text'}>Multithreading</li>
                                    <li className={'text'}>Network requests. Part 1</li>
                                    <li className={'text'}>Network requests. Part 2</li>
                                    <li className={'text'}>User data storage</li>
                                    <li className={'text'}>Animations</li>
                                    <li className={'text'}>Modern approaches to development</li>
                                    <li className={'text'}>Creating navigation in code</li>
                                    <li className={'text'}>Publishing an App to the AppStore</li>
                                </ul>
                            </div>
                        </div>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[1]} isButton={true}/>
                            <div className={'item__txt'}>
                                <ul className={'item__list'}>
                                    <li className={'text'}>Generics, native operators</li>
                                    <li className={'text'}>Application architecture</li>
                                    <li className={'text'}>Testing</li>
                                    <li className={'text'}>Asynchronous programming</li>
                                    <li className={'text'}>Xcode Optimization and Tools</li>
                                    <li className={'text'}>Algorithms and data structures</li>
                                    <li className={'text'}>Design patterns</li>
                                    <li className={'text'}>Push-notifications</li>
                                    <li className={'text'}>Frameworks/Modularization</li>
                                    <li className={'text'}>SwiftUI + Combine</li>
                                    <li className={'text'}>Multithreading</li>
                                    <li className={'text'}>Networking</li>
                                    <li className={'text'}>Specific tools</li>
                                    <li className={'text'}>Data storage</li>
                                </ul>
                            </div>
                        </div>
                        <Git/>
                        <SQL/>
                        <EnglishBig/>
                        <Career/>
                        <Figma/>
                        <Testing/>
                    </div>
                    <Note/>
                </div>
            </div>
            <div className={'teachers'}>
                <h1 className={'title'}>Teachers</h1>
                <div className={'teachers__row flex-property-set_between'}>
                    <TeachersItem img={teachers.avatars[0]} name={teachers.names[0]} surname={teachers.surnames[0]} description={teachers.descriptions[0]}/>
                    <TeachersItem img={teachers.nikolaev.img} name={teachers.nikolaev.name} surname={teachers.nikolaev.surname} description={teachers.nikolaev.description}/>
                    <TeachersItem img={teachers.pilipenko.img} name={teachers.pilipenko.name} surname={teachers.pilipenko.surname} description={teachers.pilipenko.description}/>
                    <TeachersItem img={teachers.rybakov.img} name={teachers.rybakov.name} surname={teachers.rybakov.surname} description={teachers.rybakov.description}/>
                    <TeachersItem img={teachers.malyx.img} name={teachers.malyx.name} surname={teachers.malyx.surname} description={teachers.malyx.description}/>
                </div>
            </div>
            <OneReview className={classNames[0]} letter={reviews.letters[0]} user_data={reviews.user_data[0]} course={reviews.course} text={reviews.texts[0]}/>
            <TwelveResumes job={job_name} salary={resume.salary} texts={resume.texts} certificate={resume.certificate} classNames={classNames}/>
            <Registration className={classNames[0]}/>
            <FiveQuestions classNames={[`${classNames[4]}`, '', '', '', '', '']} titles={questions.titles} texts={questions.texts}/>
        </div>
    )
}
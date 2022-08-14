import {CoursePropsType} from "./Types"
import {CourseHeader} from "../Components/Header/Course-Header"
import {ForWho} from "../Components/For-Who/For-Who"
import {HowUse} from "../Components/How-Use/How-Use"
import {Employment} from "../Components/Employment/Employment"
import {Triangle} from "../Components/Content/Triangle"
import {Title} from "../Components/Content/Title"
import {CoursesTitle} from "../Components/Content/Courses-Title"
import {CourseTitle} from "../Components/Content/Course-Title"
import {Note} from "../Components/Content/Note"
import {SkillsEightTexts} from "../Components/Skills/SkillsEightTexts"
import {Figma} from "../Components/Content/Courses/Figma"
import {Testing} from "../Components/Content/Courses/Testing"
import {Git} from "../Components/Content/Courses/Git"
import {SQL} from "../Components/Content/Courses/SQL"
import {EnglishBig} from "../Components/Content/Courses/English-Big"
import {Career} from "../Components/Content/Courses/Career"
import {TwelveTeachers} from "../Components/Teachers/Twelve-Teachers";
import {TwelveResumes} from "../Components/Resume/Twelve-Resumes";
import {EightQuestions} from "../Components/Questions/Eight-Questions";
import React, {useState} from "react";
import {Registration} from "../Components/Registration/Registration";

export function Flutter({img, header, time, for_who, job_name, skills, classNames = [''], content, teachers, resume, questions}: CoursePropsType) {
    const [employers_feedback_margin, changeEmployersFeedbackMargin] = useState(0)
    const [careerCenterId, changeCareerCenterId] = useState(0)
    const [reviewsId, changeReviewsId] = useState(0)

    return(
        <div className={'course-container'}>
            <CourseHeader companies={header.companies} salary={header.salary} classNames={classNames} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts}/>
            <SkillsEightTexts texts={skills.texts} className={classNames[1]}/>
            <HowUse classNames={classNames}/>
            <Employment changeMargin={changeEmployersFeedbackMargin} margin={employers_feedback_margin} reviewsId={reviewsId} changeCareerCenterId={changeCareerCenterId} changeReviewsId={changeReviewsId} careerCenterId={careerCenterId}/>
            <div className={'content'}>
                <Triangle/>
                <div className={`content__container`}>
                    <Title text={content.title.text} numbers={content.title.numbers} descriptions={content.title.descriptions}/>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Main courses'}/>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[0]} isButton={true}/>
                            <div className={'item__txt'}>
                                <ul className={'item__list'}>
                                    <li className={'text'}>Introduction</li>
                                    <li className={'text'}>Fundamentals of Dart. (EPAM)</li>
                                    <li className={'text'}>Flutter</li>
                                    <li className={'text'}>Stateful/Stateless Widget.</li>
                                    <li className={'text'}>Material/Cupertino</li>
                                    <li className={'text'}>Layout</li>
                                    <li className={'text'}>Navigation. (EPAM)</li>
                                    <li className={'text'}>Asynchrony. (EPAM)</li>
                                    <li className={'text'}>Working with Forms</li>
                                    <li className={'text'}>Testing/Advanced Testing. (EPAM)</li>
                                    <li className={'text'}>Firebase. (EPAM)</li>
                                    <li className={'text'}>Flutter project architecture. (EPAM)</li>
                                    <li className={'text'}>State Management. (EPAM)</li>
                                    <li className={'text'}>Advanced Widgets. (EPAM)</li>
                                    <li className={'text'}>Multiplatform solutions. (EPAM)</li>
                                    <li className={'text'}>Application theme</li>
                                    <li className={'text'}>Animations</li>
                                    <li className={'text'}>Working with media, maps and Web View. (EPAM)</li>
                                    <li className={'text'}>Integration with native. (EPAM)</li>
                                    <li className={'text'}>Persistance data. (EPAM)</li>
                                    <li className={'text'}>DevTools. (EPAM)</li>
                                    <li className={'text'}>Flutter под капотом. (EPAM)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Specialization. Choice course'}/>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[1]} isButton={true}/>
                            <div className={'item__txt'}>
                                <ul className={'item__list'}>
                                    <li className={'text'}>Introduction</li>
                                    <li className={'text'}>Variables</li>
                                    <li className={'text'}>Functions</li>
                                    <li className={'text'}>Conditions and cycles</li>
                                    <li className={'text'}>Collections</li>
                                    <li className={'text'}>Objects</li>
                                    <li className={'text'}>OOP. Part 1</li>
                                    <li className={'text'}>OOP. Part 2</li>
                                    <li className={'text'}>OOP. Part 3</li>
                                    <li className={'text'}>Type comparison</li>
                                    <li className={'text'}>Exceptions</li>
                                    <li className={'text'}>Coroutines</li>
                                    <li className={'text'}>Streams</li>
                                    <li className={'text'}>Introduction to the profession</li>
                                    <li className={'text'}>Beginning of work</li>
                                    <li className={'text'}>Markup</li>
                                    <li className={'text'}>Components</li>
                                    <li className={'text'}>ConstraintLayout</li>
                                    <li className={'text'}>Project resources</li>
                                    <li className={'text'}>Application screens</li>
                                    <li className={'text'}>Animation</li>
                                    <li className={'text'}>Application localization</li>
                                    <li className={'text'}>Life cycle</li>
                                    <li className={'text'}>Storage basics</li>
                                    <li className={'text'}>Presentation layer architecture</li>
                                    <li className={'text'}>Networking. retrofit</li>
                                    <li className={'text'}>Working with DB. room</li>
                                    <li className={'text'}>Working with data arrays</li>
                                    <li className={'text'}>Working with protected OS partitions</li>
                                    <li className={'text'}>Location work</li>
                                    <li className={'text'}>Firebase</li>
                                    <li className={'text'}>Preparing for release</li>
                                </ul>
                            </div>
                        </div>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[2]} isButton={true}/>
                            <div className={'item__txt'}>
                                <ul className={'item__list'}>
                                    <li className={'text'}>Introduction to iOS Development</li>
                                    <li className={'text'}>Data flow control: conditions, cycles</li>
                                    <li className={'text'}>Functions and options</li>
                                    <li className={'text'}>Classes, structures, enums</li>
                                    <li className={'text'}>Object Oriented Programming</li>
                                    <li className={'text'}>Working in Xcode</li>
                                    <li className={'text'}>Screen transitions and interaction</li>
                                    <li className={'text'}>Standard UI components and working with them</li>
                                    <li className={'text'}>Autolayout, Constrains, StakViews</li>
                                    <li className={'text'}>Tables and collections</li>
                                    <li className={'text'}>Creating Your Own UI Components</li>
                                    <li className={'text'}>Interaction with the server, json parsing. Standard tools and libraries</li>
                                    <li className={'text'}>Animation from A to Z</li>
                                    <li className={'text'}>Data storage: Realm, CoreData, UserDefaults, version control</li>
                                    <li className={'text'}>Functional programming</li>
                                    <li className={'text'}>Signing and submitting apps to the App Store. iTunes connect overview</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Additional courses'}/>
                        <Figma/>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[3]} isButton={true}/>
                            <div className={'item__txt'}></div>
                        </div>
                        <Testing/>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Bonus courses'}/>
                        <Git/>
                        <SQL/>
                        <EnglishBig/>
                        <Career/>
                    </div>
                    <Note/>
                </div>
            </div>
            <TwelveTeachers avatars={[...teachers.avatars, teachers.pilipenko.img, teachers.ovchinnikov.img, teachers.alexandrov.img, teachers.rybakov.img, teachers.malyx.img]}
                            names={[...teachers.names, teachers.pilipenko.name, teachers.ovchinnikov.name, teachers.alexandrov.name, teachers.rybakov.name, teachers.malyx.name]}
                            surnames={[...teachers.surnames, teachers.pilipenko.surnames, teachers.ovchinnikov.surnames, teachers.alexandrov.surnames, teachers.rybakov.surnames, teachers.malyx.surnames]}
                            descriptions={[...teachers.descriptions, teachers.pilipenko.description, teachers.ovchinnikov.description, teachers.alexandrov.description, teachers.rybakov.description, teachers.malyx.description]}/>
            <TwelveResumes job={job_name} salary={resume.salary} texts={resume.texts} certificate={resume.certificate} classNames={classNames}/>
            <Registration className={classNames[0]}/>
            <EightQuestions classNames={[``, '', '', '', '', '', '', '', '']} titles={questions.titles} texts={questions.texts}/>
        </div>
    )
}
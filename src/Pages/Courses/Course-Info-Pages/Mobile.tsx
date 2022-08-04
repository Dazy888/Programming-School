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
import {Git} from "../Components/Content/Courses/Git"
import {Triangle} from "../Components/Content/Triangle"
import {CoursesTitle} from "../Components/Content/Courses-Title"
import {EightTeachers} from "../Components/Teachers/Eight-Teachers"
import {CourseSmall} from "../Components/Content/Course-Small";

export type ExtraProjectPropsType = {
    projects_photographs: Array<string>
    projects_texts: Array<string>
    projects_titles?: Array<string>
}

export function Mobile({header, time, img, for_who, job_name, skills, projects, projects_texts, projects_photographs, classNames = [''], content, teachers, questions}: CourseProjectsPropsType & ExtraProjectPropsType) {
    return(
        <div className={'course-container'}>
            <CourseHeader text={header.textAboutJob} companies={header.companies} salary={header.salary} classNames={classNames} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts}/>
            <SkillsSixTitles titles={skills.titles} texts={skills.texts} className={classNames[1]}/>
            <Projects className={classNames[2]} photographs={projects_photographs} titles={projects.titles} texts={projects_texts}/>
            <HowUse classNames={classNames} />
            <Employment/>
            <div className={`content`}>
                <Triangle/>
                <div className={`content__container`}>
                    <Title text={content.title.text} numbers={content.title.numbers} descriptions={content.title.descriptions}/>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Profession iOS developer'}/>
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
                                    <li className={'text'}>Animation</li>
                                    <li className={'text'}>Modern approaches to development</li>
                                    <li className={'text'}>Creating navigation in code</li>
                                    <li className={'text'}>Publishing an App to the App Store</li>
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
                                    <li className={'text'}>Specific Tools</li>
                                    <li className={'text'}>Data storage</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Profession Android developer'}/>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[2]} isButton={true}/>
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
                            <CourseTitle title={content.courses.titles[3]} isButton={true}/>
                            <div className={'item__txt'}>
                                <ul className={'item__list'}>
                                    <li className={'text'}>Introduction to Android Development</li>
                                    <li className={'text'}>Assembly and resources</li>
                                    <li className={'text'}>Markup, views</li>
                                    <li className={'text'}>Layout with ConstraintLayout</li>
                                    <li className={'text'}>Activity life cycle</li>
                                    <li className={'text'}>Opening new screens</li>
                                    <li className={'text'}>Fragments</li>
                                    <li className={'text'}>Working with ViewPager and Dialogs</li>
                                    <li className={'text'}>Lists</li>
                                    <li className={'text'}>Lists. Best practices</li>
                                    <li className={'text'}>Permissions, working with date and time</li>
                                    <li className={'text'}>Android jetpack: ViewModel, Navigation</li>
                                    <li className={'text'}>Multithreading</li>
                                    <li className={'text'}>Networking</li>
                                    <li className={'text'}>Network data exchange. Retrofit Library</li>
                                    <li className={'text'}>Working with files</li>
                                    <li className={'text'}>ContentProvider</li>
                                    <li className={'text'}>Introduction to Databases</li>
                                    <li className={'text'}>Databases in Android</li>
                                    <li className={'text'}>Scoped storage</li>
                                    <li className={'text'}>Alerts (push notifications)</li>
                                    <li className={'text'}>Flow</li>
                                    <li className={'text'}>Running tasks in the background</li>
                                    <li className={'text'}>Material design concept</li>
                                    <li className={'text'}>Dependency Injection Basics</li>
                                    <li className={'text'}>Preparing the app for release</li>
                                </ul>
                            </div>
                        </div>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[4]} isButton={true}/>
                            <div className={'item__txt'}>
                                <ul className={'item__list'}>
                                    <li className={'text'}>Creating our own views and animations</li>
                                    <li className={'text'}>Working with lists</li>
                                    <li className={'text'}>Declarative UI</li>
                                    <li className={'text'}>Running tasks in the background: practice</li>
                                    <li className={'text'}>Advanced dependency injection. Dagger 2</li>
                                    <li className={'text'}>Application building patterns</li>
                                    <li className={'text'}>Presentation layer patterns</li>
                                    <li className={'text'}>Testing</li>
                                    <li className={'text'}>Application exit</li>
                                    <li className={'text'}>Memory leaks and static analyzers</li>
                                    <li className={'text'}>Code review at an advanced level</li>
                                    <li className={'text'}>RxJava. Basics</li>
                                    <li className={'text'}>RxJava. Part 2. Operators</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Additional courses'}/>
                        <Git/>
                        <SQL/>
                        <EnglishBig/>
                        <Career/>
                        <Figma/>
                        <Testing/>
                    </div>
                </div>
            </div>
            <EightTeachers avatars={[teachers.nikolaev.img, teachers.lisakov.img, teachers.nikolaev.img, teachers.alexandrov.img, teachers.ageychenko.img, teachers.ovchinnikov.img, teachers.rybakov.img, teachers.malyx.img, teachers.pilipenko.img]}
                           names={[teachers.nikolaev.name, teachers.lisakov.name, teachers.nikolaev.name, teachers.alexandrov.name, teachers.ageychenko.name, teachers.ovchinnikov.name, teachers.rybakov.name, teachers.malyx.name, teachers.pilipenko.name]}
                           surnames={[teachers.nikolaev.surname, teachers.lisakov.surname, teachers.nikolaev.surname, teachers.alexandrov.surname, teachers.ageychenko.surname, teachers.ovchinnikov.surname, teachers.rybakov.surname, teachers.malyx.surname, teachers.pilipenko.surname]}
                           descriptions={[teachers.nikolaev.description, teachers.lisakov.description, teachers.nikolaev.description, teachers.alexandrov.description, teachers.ageychenko.description, teachers.ovchinnikov.description, teachers.rybakov.description, teachers.malyx.description, teachers.pilipenko.description]}/>
            <div className={`questions flex-property-set_between ${classNames[4]}`}>
                <h1 className={'title'}>Frequently asked Questions</h1>
                <div className={'questions__column'}>
                    <CourseSmall title={questions.titles[0]} text={questions.texts[0]}/>
                    <CourseSmall title={questions.titles[1]} text={questions.texts[1]}/>
                    <CourseSmall title={questions.titles[2]} text={questions.texts[2]}/>
                    <CourseSmall title={questions.titles[3]} text={questions.texts[3]}/>
                    <CourseSmall title={questions.titles[4]} text={questions.texts[4]}/>
                    <CourseSmall title={questions.titles[5]} text={questions.texts[5]}/>
                    <CourseSmall title={questions.titles[6]} text={questions.texts[6]}/>
                    <CourseSmall title={questions.titles[7]} text={questions.texts[7]}/>
                    <CourseSmall title={questions.titles[8]} text={questions.texts[8]}/>
                </div>
            </div>
        </div>
    )
}
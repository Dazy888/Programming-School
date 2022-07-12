import {CourseHeader} from "../Components/Header/Course-Header"
import {ForWho} from "../Components/For-Who/For-Who"
import {SkillsNineTexts} from "../Components/Skills/SkillsNineTexts"
import {Projects} from "../Components/Projects/Projects"
import {CourseProjectsPropsType} from "./Types"
import {HowUse} from "../Components/How-Use/How-Use"
import {Employment} from "../Components/Employment/Employment"
import {Title} from "../Components/Content/Title"
import {CourseTitle} from "../Components/Content/Course-Title"
import {Note} from "../Components/Content/Note"
import {MarkupBasic} from "../Components/Content/Courses/Markup-Basic"
import {SQL} from "../Components/Content/Courses/SQL"
import {EnglishSmall} from "../Components/Content/Courses/English-Small"
import {Knowledge} from "../Components/Content/Courses/Knowledges"
import {Career} from "../Components/Content/Courses/Career"
import {Git} from "../Components/Content/Courses/Git"
import {Triangle} from "../Components/Content/Triangle"
import {CoursesTitle} from "../Components/Content/Courses-Title"

export function Python({job_name, for_who, header, img, time, skills, projects, content}: CourseProjectsPropsType) {
    return(
        <div className={'course-container'}>
            <CourseHeader text={header.textAboutJob} companies={header.companies} salary={header.salary} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts}/>
            <SkillsNineTexts texts={skills.texts}/>
            <Projects photographs={projects.photographs} titles={projects.titles} texts={projects.texts}/>
            <HowUse/>
            <Employment/>
            <div className={'content'}>
                <Triangle/>
                <div className={'content__container'}>
                    <Title text={content.title.text} numbers={content.title.numbers} descriptions={content.title.descriptions}/>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Main courses'} text={'Required courses for your profession. These are the basics you need to learn in order to be successful in your career. It will take you approximately 12 months to complete the courses in this block'}/>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[0]} isButton={true}/>
                            <ul className={'item__list'}>
                                <li className={'text'}>Introduction</li>
                                <li className={'text'}>Python Basics</li>
                                <li className={'text'}>Operators, expressions</li>
                                <li className={'text'}>Conditional if statement, branches</li>
                                <li className={'text'}>Conditional if statement: continuation</li>
                                <li className={'text'}>While loop</li>
                                <li className={'text'}>The for loop: loops with a counter</li>
                                <li className={'text'}>The for loop: features of working with range</li>
                                <li className={'text'}>The for loop: working with strings</li>
                                <li className={'text'}>Nested Loops</li>
                                <li className={'text'}>Numbers. int and float types</li>
                                <li className={'text'}>Functions: start</li>
                                <li className={'text'}>Float features</li>
                                <li className={'text'}>Installing and configuring the IDE</li>
                                <li className={'text'}>Basic collections. Lists</li>
                                <li className={'text'}>List: methods for working with lists</li>
                                <li className={'text'}>List views</li>
                                <li className={'text'}>Basic collections. Strings</li>
                                <li className={'text'}>Basic collections. Dictionaries</li>
                                <li className={'text'}>Basic collections. Tuples</li>
                                <li className={'text'}>Functions: continued</li>
                                <li className={'text'}>Working with files</li>
                                <li className={'text'}>Exceptions: Dealing with Errors</li>
                                <li className={'text'}>Introduction to PLO</li>
                                <li className={'text'}>Basic principles of OOP</li>
                                <li className={'text'}>Iterators and Generators</li>
                                <li className={'text'}>Decorators: basic level</li>
                                <li className={'text'}>Deep class work and built-in decorators</li>
                                <li className={'text'}>Decorators: Advanced</li>
                                <li className={'text'}>Functions: end</li>
                                <li className={'text'}>Libraries for working with data</li>
                                <li className={'text'}>Bonus module. Network Basics</li>
                                <li className={'text'}>Final project. Telegram bot for hotel search</li>
                            </ul>
                        </div>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[1]} isButton={true}/>
                            <ul className={'item__list'}>
                                <li className={'text'}>Introduction to web frameworks</li>
                                <li className={'text'}>Introduction to Django</li>
                                <li className={'text'}>Handling Requests in Django</li>
                                <li className={'text'}>Database and Models</li>
                                <li className={'text'}>Forms</li>
                                <li className={'text'}>Working with files</li>
                                <li className={'text'}>Testing</li>
                                <li className={'text'}>Admin</li>
                                <li className={'text'}>Localization and internationalization</li>
                                <li className={'text'}>Access rights</li>
                                <li className={'text'}>Documentation</li>
                                <li className={'text'}>Optimization</li>
                                <li className={'text'}>Data export</li>
                                <li className={'text'}>Internship. Development of an online store in a team with a team leader</li>
                            </ul>
                        </div>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[2]} isButton={true}/>
                            <ul className={'item__list'}>
                                <li className={'text'}>At this stage, you are ready for employment - a career consultant will begin to help you find a job and prepare you for an interview</li>
                            </ul>
                        </div>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[3]} isButton={true}/>
                            <ul className={'item__list'}>
                                <li className={'text'}>Flask: Getting Started</li>
                                <li className={'text'}>Basics of working in Linux. Part 1</li>
                                <li className={'text'}>Fundamentals of CI culture. Part 1</li>
                                <li className={'text'}>Flask</li>
                                <li className={'text'}>Basics of working in Linux. Part 2</li>
                                <li className={'text'}>Basics of debugging and profiling. Part 1</li>
                                <li className={'text'}>Logger</li>
                                <li className={'text'}>Deploy application on linux</li>
                                <li className={'text'}>Docker</li>
                                <li className={'text'}>Database. Part 1</li>
                                <li className={'text'}>Multitasking. Part 1</li>
                                <li className={'text'}>Multitasking. Part 2</li>
                                <li className={'text'}>Database. Part 2</li>
                                <li className={'text'}>An introductory module on the MVC framework. Part 1</li>
                                <li className={'text'}>An introductory module on the MVC framework. Part 2</li>
                                <li className={'text'}>Database. Part 3</li>
                                <li className={'text'}>RESTful API</li>
                                <li className={'text'}>MVC, templating language. Part 3</li>
                                <li className={'text'}>Database. Part 4</li>
                                <li className={'text'}>Introduction to ORM SQLAlchemy. Part 1</li>
                                <li className={'text'}>ORM SQLAlchemy. Part 2</li>
                                <li className={'text'}>CGI server</li>
                                <li className={'text'}>Basics of debugging and profiling. Part 2</li>
                                <li className={'text'}>Basics of debugging and profiling. Part 3</li>
                                <li className={'text'}>Multitasking: asyncio</li>
                                <li className={'text'}>Multitasking: fastAPI</li>
                                <li className={'text'}>Postgres + Migrations</li>
                                <li className={'text'}>Pytest, Mock</li>
                                <li className={'text'}>Safety</li>
                                <li className={'text'}>Fundamentals of CI culture: linters</li>
                                <li className={'text'}>CD, automatic deployment</li>
                                <li className={'text'}>Graduation project. Development of a problem book in Python</li>
                            </ul>
                        </div>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Additional courses'} text={'Auxiliary courses for studying the compulsory program. You can study them in parallel or simply refer to them as needed'}/>
                        <MarkupBasic/>
                        <SQL/>
                        <Git/>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Bonus courses'} text={'In these courses, you will gain versatile skills that will help you feel more confident in the profession'}/>
                        <EnglishSmall/>
                        <Knowledge/>
                        <Career/>
                    </div>
                    <Note/>
                </div>
            </div>
        </div>
    )
}
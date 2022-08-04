import {CourseHeader} from "../Components/Header/Course-Header"
import {ForWho} from "../Components/For-Who/For-Who"
import {SkillsFiveTitles} from "../Components/Skills/SkillsFiveTitles"
import {Projects} from "../Components/Projects/Projects"
import {CourseProjectsPropsType} from "./Types"
import {HowUse} from "../Components/How-Use/How-Use"
import {Employment} from "../Components/Employment/Employment"
import {Title} from "../Components/Content/Title"
import {CourseTitle} from "../Components/Content/Course-Title"
import {Note} from "../Components/Content/Note"
import {MarkupBasic} from "../Components/Content/Courses/Markup-Basic"
import {JSBasic} from "../Components/Content/Courses/JS-Basic"
import {Vue} from "../Components/Content/Courses/Vue"
import {Angular} from "../Components/Content/Courses/Angular"
import {MarkupAdvanced} from "../Components/Content/Courses/Markup-Advanced"
import {JSAdvanced} from "../Components/Content/Courses/JS-Advanced"
import {Node} from "../Components/Content/Courses/Node"
import {Laravel} from "../Components/Content/Courses/Laravel"
import {SQL} from "../Components/Content/Courses/SQL"
import {Career} from "../Components/Content/Courses/Career"
import {FigmaPro} from "../Components/Content/Courses/Figma-Pro"
import {Bash} from "../Components/Content/Courses/Bash"
import {Knowledge} from "../Components/Content/Courses/Knowledges"
import {Git} from "../Components/Content/Courses/Git"
import {Triangle} from "../Components/Content/Triangle"
import {CoursesTitle} from "../Components/Content/Courses-Title"
import {TwelveTeachers} from "../Components/Teachers/Twelve-Teachers"
import React, {useEffect, useState} from "react"
import {ReactFramework} from "../Components/Content/Courses/React-Framework";
import {TwelveResumes} from "../Components/Resume/Twelve-Resumes";
import {FiveQuestions} from "../Components/Questions/Five-Question";

export function Web({for_who, time, img, header, job_name, skills, projects, classNames = [''], content, teachers, reviews, resume, questions}: CourseProjectsPropsType) {
    return(
        <div className={'course-container'}>
            <CourseHeader text={header.textAboutJob} salary={header.salary} companies={header.companies} classNames={classNames} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts} />
            <SkillsFiveTitles titles={skills.titles} texts={skills.texts} className={classNames[1]}/>
            <Projects className={classNames[2]} photographs={projects.photographs} titles={projects.titles} texts={projects.texts}/>
            <HowUse classNames={classNames} />
            <Employment classNames={classNames}/>
            <div className={`content ${classNames[1]}`}>
                <Triangle className={classNames[3]}/>
                <div className={`content__container ${classNames[4]}`}>
                    <Title text={content.title.text} numbers={content.title.numbers} descriptions={content.title.descriptions}/>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Main courses'} text={'Required courses for your profession. These are the basics that are important to learn for a successful career start. It will take you approximately 12 months to complete the courses in this block'}/>
                        <MarkupBasic/>
                        <JSBasic/>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[0]} isButton={true}/>
                            <div className={'item__txt'}>
                                <ul className={'item__list'}>
                                    <li className={'text'}>Introduction to PHP Programming</li>
                                    <li className={'text'}>Variables, numbers and boolean</li>
                                    <li className={'text'}>Conditional Operators and Boolean Algebra</li>
                                    <li className={'text'}>Strings and arrays</li>
                                    <li className={'text'}>Cycles</li>
                                    <li className={'text'}>Functions: creation and use</li>
                                    <li className={'text'}>Recursion, callback and anonymous functions</li>
                                    <li className={'text'}>Classes, methods and objects</li>
                                    <li className={'text'}>Inheritance and abstract classes</li>
                                    <li className={'text'}>Interfaces and polymorphism</li>
                                    <li className={'text'}>Access modifiers, getters and setters</li>
                                    <li className={'text'}>HTML/CSS</li>
                                    <li className={'text'}>Connecting frontend to backend</li>
                                    <li className={'text'}>Splitting the application into files</li>
                                    <li className={'text'}>Working with files and network</li>
                                    <li className={'text'}>Error Handling, Exceptions and Logs</li>
                                    <li className={'text'}>Handling GET and POST requests, Header, Cookie and Session</li>
                                    <li className={'text'}>REST and RESTful API</li>
                                    <li className={'text'}>SQL query language</li>
                                    <li className={'text'}>Working with databases in PHP</li>
                                    <li className={'text'}>Laravel Framework</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Choice course'}/>
                        <Vue/>
                        <ReactFramework/>
                        <Angular/>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Additional courses'} text={'Auxiliary courses to help expand skills. You can go through them in parallel or watch materials as needed'}/>
                        <MarkupAdvanced/>
                        <JSAdvanced/>
                        <Node/>
                        <Laravel/>
                        <SQL/>
                        <Career/>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Bonus courses'} text={'In these courses, you will gain versatile skills that will help you feel more confident in the profession'}/>
                        <FigmaPro/>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[1]} isButton={true}/>
                            <div className={'item__txt'}>
                                <ul className={'item__list'}>
                                    <li className={'text'}>Getting Started as a Web Designer</li>
                                    <li className={'text'}>First order: communication with the customer</li>
                                    <li className={'text'}>Search for ideas</li>
                                    <li className={'text'}>Composition</li>
                                    <li className={'text'}>Modular grids</li>
                                    <li className={'text'}>Typography</li>
                                    <li className={'text'}>Text in the interface</li>
                                    <li className={'text'}>Color on the web</li>
                                    <li className={'text'}>Contrast and readability</li>
                                    <li className={'text'}>CJM, User-flow or map and user path</li>
                                    <li className={'text'}>Navigation and site architecture</li>
                                    <li className={'text'}>Types of blocks and concept creation</li>
                                    <li className={'text'}>Design work</li>
                                    <li className={'text'}>Creating a UI KIT</li>
                                    <li className={'text'}>Adaptability and Components</li>
                                    <li className={'text'}>Presentation of the project to the customer</li>
                                    <li className={'text'}>Developer Specifications</li>
                                    <li className={'text'}>Portfolio case</li>
                                    <li className={'text'}>Bonus module. Principles of successful work with the customer</li>
                                </ul>
                            </div>
                        </div>
                        <Bash/>
                        <Git/>
                        <Knowledge/>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[2]} isButton={true}/>
                            <div className={'item__txt'}>
                                <ul className={'item__list'}>
                                    <li className={'text'}>Introduction to Algorithms</li>
                                    <li className={'text'}>Binary search algorithm</li>
                                    <li className={'text'}>Hash tables and hash functions</li>
                                    <li className={'text'}>Linked lists</li>
                                    <li className={'text'}>Stack and Queue</li>
                                    <li className={'text'}>Sorting algorithms</li>
                                    <li className={'text'}>Recursive Algorithms</li>
                                    <li className={'text'}>Complexity of algorithms and O-notation</li>
                                    <li className={'text'}>Introduction to Greedy Algorithms</li>
                                    <li className={'text'}>Trees. Binary search tree</li>
                                    <li className={'text'}>B-tree, R-tree, K-d-tree</li>
                                    <li className={'text'}>Suffix trees</li>
                                    <li className={'text'}>Balancing trees and heaps</li>
                                    <li className={'text'}>Graphs and their varieties</li>
                                    <li className={'text'}>Algorithms on graphs</li>
                                    <li className={'text'}>Information compression algorithms</li>
                                    <li className={'text'}>Introduction to cryptography</li>
                                    <li className={'text'}>Hashing algorithms</li>
                                    <li className={'text'}>Bit Algorithms</li>
                                    <li className={'text'}>Probabilistic and iterative algorithms</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Note/>
                </div>
            </div>
            <TwelveTeachers avatars={[teachers.avatars[0], teachers.kornienko.img, teachers.vasiyanovich.img, teachers.tiunov.img, teachers.avdeev.img, teachers.molesku.img, teachers.pozdnyakov.img, teachers.bondarovich.img, teachers.savchenko.img, teachers.mirotin.img, teachers.ignatiev.img, teachers.pilipenko.img]}
                            names={[teachers.names[0], teachers.kornienko.name, teachers.vasiyanovich.name, teachers.tiunov.name, teachers.avdeev.name, teachers.molesku.name, teachers.pozdnyakov.name, teachers.bondarovich.name, teachers.savchenko.name, teachers.mirotin.name, teachers.ignatiev.name, teachers.pilipenko.name]}
                            surnames={[teachers.surnames[0], teachers.kornienko.surname, teachers.vasiyanovich.surname, teachers.tiunov.surname, teachers.avdeev.surname, teachers.molesku.surname, teachers.pozdnyakov.surname, teachers.bondarovich.surname, teachers.savchenko.surname, teachers.mirotin.surname, teachers.ignatiev.surname, teachers.pilipenko.surname]}
                            descriptions={[teachers.descriptions[0], teachers.kornienko.description, teachers.vasiyanovich.description, teachers.tiunov.description, teachers.avdeev.description, teachers.molesku.description, teachers.pozdnyakov.description, teachers.bondarovich.description, teachers.savchenko.description, teachers.mirotin.description, teachers.ignatiev.description, teachers.pilipenko.description]}/>
            <TwelveResumes job={job_name} salary={resume.salary} texts={resume.texts} certificate={resume.certificate} classNames={classNames}/>
            <FiveQuestions  classNames={[`${classNames[4]}`, '', '', '', '', '']} titles={questions.titles} texts={questions.texts}/>
        </div>
    )
}
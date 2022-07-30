import {CourseHeader} from "../Components/Header/Course-Header"
import {ForWho} from "../Components/For-Who/For-Who"
import {SkillsNineTexts} from "../Components/Skills/SkillsNineTexts"
import {Projects} from "../Components/Projects/Projects"
import {CourseProjectsPropsType} from "./Types"
import {HowUse} from "../Components/How-Use/How-Use"
import {Employment} from "../Components/Employment/Employment"
import {Title} from "../Components/Content/Title"
import {Note} from "../Components/Content/Note"
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
import {English} from "../Components/Content/Courses/English"
import {Career} from "../Components/Content/Courses/Career"
import {Git} from "../Components/Content/Courses/Git"
import {Triangle} from "../Components/Content/Triangle"
import {CoursesTitle} from "../Components/Content/Courses-Title"
import {CourseSmallList} from "../Components/Content/Course-Small-List"
import {EightTeachers} from "../Components/Teachers/Eight-Teachers"
import {ThreeReviews} from "../Components/Reviews/Three-Reviews"
import {Simulate} from "react-dom/test-utils"
import React, {useEffect, useState} from "react";
import {EightResumes} from "../Components/Resume/Eight-Resumes";

let marginLeft = 0

export function PythonFullstack({time, img, header, for_who, job_name, skills, projects, classNames = [''], content, teachers, reviews, resume}: CourseProjectsPropsType) {
    const [id, changeId] = useState(0)
    const course_container: any = React.createRef()

    useEffect(() => {
        const reviews = course_container.current.querySelector('.reviews')

        const reviewsButtons = reviews.querySelectorAll('.controls__btn')
        const reviewsSlider = reviews.querySelector('.row__list')

        reviewsButtons[0].onclick = () => {
            marginLeft = marginLeft + 750
            reviewsSlider.style.marginLeft = marginLeft + 'px'
        }

        reviewsButtons[1].onclick = () => {
            marginLeft = marginLeft - 750
            reviewsSlider.style.marginLeft = marginLeft + 'px'
        }
    })

    return(
        <div className={'course-container'} ref={course_container}>
            <CourseHeader companies={header.companies} salary={header.salary} classNames={classNames} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts}/>
            <SkillsNineTexts texts={skills.texts} className={classNames[1]}/>
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
                                <li className={'text'}>Introduction</li>
                                <li className={'text'}>Python Basics</li>
                                <li className={'text'}>Operators, expressions</li>
                                <li className={'text'}>Conditional operator If, branches</li>
                                <li className={'text'}>Conditional if statement: advanced conditions</li>
                                <li className={'text'}>While loop</li>
                                <li className={'text'}>For loop. Cycles with a counter</li>
                                <li className={'text'}>For loop. range() function parameters</li>
                                <li className={'text'}>Numbers</li>
                                <li className={'text'}>Base collections: list</li>
                                <li className={'text'}>The for loop: working with lists</li>
                                <li className={'text'}>List comprehensions, slice and list sorting</li>
                                <li className={'text'}>2D arrays</li>
                                <li className={'text'}>Basic Collections: Tuples and Strings</li>
                                <li className={'text'}>Core Collections: Dictionaries</li>
                                <li className={'text'}>Functions. Basics</li>
                                <li className={'text'}>Functions. Advanced Topics</li>
                                <li className={'text'}>Base Collections: Sets</li>
                                <li className={'text'}>Algorithms and data structures</li>
                                <li className={'text'}>Functions. Design and documentation</li>
                                <li className={'text'}>Working with files</li>
                                <li className={'text'}>Substring search with trees and regex</li>
                                <li className={'text'}>Functions. recursion</li>
                                <li className={'text'}>Introduction to OOP</li>
                                <li className={'text'}>Working with modules</li>
                                <li className={'text'}>Working with the file system</li>
                                <li className={'text'}>Elements of Functional Programming</li>
                                <li className={'text'}>Algorithms</li>
                                <li className={'text'}>Data Structures</li>
                                <li className={'text'}>OOP principles</li>
                                <li className={'text'}>OOP. Advanced Topics</li>
                                <li className={'text'}>Exceptions</li>
                                <li className={'text'}>Protocols, Generators, Decorators, and Context Managers</li>
                                <li className={'text'}>Network Basics</li>
                                <li className={'text'}>Advanced Topics</li>
                            </ul>
                        </div>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[1]} isButton={true}/>
                            <ul className={'item__list'}>
                                <li className={'text'}>Linux basics</li>
                                <li className={'text'}>Fundamentals of CI culture</li>
                                <li className={'text'}>Basics of debugging and profiling</li>
                                <li className={'text'}>Basics of CI/CD</li>
                                <li className={'text'}>Application testing</li>
                                <li className={'text'}>HTML, DOM etc</li>
                                <li className={'text'}>Networking</li>
                                <li className={'text'}>Multitasking</li>
                                <li className={'text'}>Database</li>
                                <li className={'text'}>Indices</li>
                                <li className={'text'}>Python Protocols</li>
                                <li className={'text'}>Flask</li>
                                <li className={'text'}>Async web</li>
                                <li className={'text'}>Fundamentals of CI/CD N</li>
                                <li className={'text'}>Basics of CI/CD N+1</li>
                                <li className={'text'}>Docker. What it is?</li>
                                <li className={'text'}>RESTful API</li>
                                <li className={'text'}>Introduction to ORM</li>
                                <li className={'text'}>CGI server</li>
                                <li className={'text'}>Web development</li>
                                <li className={'text'}>Safety</li>
                                <li className={'text'}>Team graduation project</li>
                            </ul>
                        </div>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Frameworks for JavaScript'}/>
                        <Vue/>
                        <ReactFramework/>
                        <Angular/>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Bonus courses'}/>
                        <TouchTyping/>
                        <Photoshop/>
                        <Figma/>
                        <Knowledge/>
                        <Bash/>
                        <Git/>
                        <English/>
                        <Career/>
                        <CourseSmallList title={content.courses.titles[2]} text={'You will develop the skills necessary for personal effectiveness and teamwork. Creative thinking, decision making, flexible leadership, public speaking skills - all this will help you achieve higher professional results'}/>
                        <CourseSmallList title={content.courses.titles[3]} text={'You will learn key data structures and algorithms. Together they will serve as a foundation for your computer science and software engineering knowledge'}/>
                    </div>
                    <Note/>
                </div>
            </div>
            <EightTeachers avatars={[teachers.avatars[0], teachers.avatars[1], teachers.avatars[2], teachers.kornienko.img, teachers.vasiyanovich.img, teachers.yakovushen.img, teachers.krotov.img, teachers.shulaev.img]}
                           names={[teachers.names[0], teachers.names[1], teachers.names[2], teachers.kornienko.name, teachers.vasiyanovich.name, teachers.yakovushen.name, teachers.krotov.name, teachers.shulaev.name]}
                           surnames={[teachers.surnames[0], teachers.surnames[1], teachers.surnames[2], teachers.kornienko.surname, teachers.vasiyanovich.surname, teachers.yakovushen.surname, teachers.krotov.surname, teachers.shulaev.surname]}
                           descriptions={[teachers.descriptions[0], teachers.descriptions[1], teachers.descriptions[2], teachers.kornienko.description, teachers.vasiyanovich.description, teachers.yakovushen.description, teachers.krotov.description, teachers.shulaev.description]}/>
            <ThreeReviews letters={reviews.letters} user_data={reviews.user_data} course={reviews.course} texts={reviews.texts} id={id} changeId={changeId}/>
            <EightResumes job={job_name} salary={resume.salary} texts={resume.texts} certificate={resume.certificate} classNames={classNames}/>
        </div>
    )
}
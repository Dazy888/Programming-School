import {CourseHeader} from "../Components/Header/Course-Header"
import {ForWho} from "../Components/For-Who/For-Who"
import {SkillsSixTitles} from "../Components/Skills/SkillsSixTitles"
import {Projects, SliderControls} from "../Components/Projects/Projects"
import {CourseProjectsPropsType} from "./Types"
import {HowUse} from "../Components/How-Use/How-Use"
import {Employment} from "../Components/Employment/Employment"
import {Title} from "../Components/Content/Title"
import {Note} from "../Components/Content/Note"
import {CourseTitle} from "../Components/Content/Course-Title"
import {SQL} from "../Components/Content/Courses/SQL"
import {Knowledge} from "../Components/Content/Courses/Knowledges"
import {EnglishSmall} from "../Components/Content/Courses/English-Small"
import {Git} from "../Components/Content/Courses/Git"
import {Triangle} from "../Components/Content/Triangle"
import {CoursesTitle} from "../Components/Content/Courses-Title"
import React, {useEffect, useState} from "react";
import {ReviewsItem} from "../Components/Reviews/Reviews-Item";
import {ThreeReviews} from "../Components/Reviews/Three-Reviews";

let marginLeft = 0

export function CPlusPlus({header, img, time, for_who, job_name, skills, projects, classNames = [''], content, teachers, reviews}: CourseProjectsPropsType) {
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
            <CourseHeader text={header.textAboutJob} companies={header.companies} salary={header.salary} classNames={classNames} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts}/>
            <SkillsSixTitles titles={skills.titles} texts={skills.texts} className={classNames[1]}/>
            <Projects className={classNames[2]} photographs={projects.photographs} titles={projects.titles} texts={projects.texts}/>
            <HowUse classNames={classNames} />
            <Employment classNames={classNames}/>
            <div className={`content ${classNames[1]}`}>
                <Triangle className={classNames[3]}/>
                <div className={`content__container ${classNames[4]}`}>
                    <Title text={content.title.text} numbers={content.title.numbers} descriptions={content.title.descriptions}/>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Basic Skills'}/>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[0]} isButton={true}/>
                            <ul className={'item__list'}>
                                <li className={'text'}>Introductory module. First program</li>
                                <li className={'text'}>Integer variables. Data and Computing</li>
                                <li className={'text'}>User data entry. Strings</li>
                                <li className={'text'}>The if condition construct</li>
                                <li className={'text'}>Logical operators and complex conditions</li>
                                <li className={'text'}>Introduction to loops: while, do while</li>
                                <li className={'text'}>For loops and algorithms on loops</li>
                                <li className={'text'}>Floating point numbers. Mathematical calculations</li>
                                <li className={'text'}>Strings and text data. Basic String Algorithms</li>
                                <li className={'text'}>Installing and configuring the IDE</li>
                                <li className={'text'}>Functions in programming</li>
                                <li className={'text'}>Arrays</li>
                                <li className={'text'}>Introduction to std::vector v2</li>
                                <li className={'text'}>2D arrays</li>
                                <li className={'text'}>Algorithms on arrays</li>
                                <li className={'text'}>Data types</li>
                                <li className={'text'}>Pointers</li>
                                <li className={'text'}>Extended work with functions</li>
                                <li className={'text'}>Reading from files</li>
                                <li className={'text'}>Writing to files</li>
                                <li className={'text'}>Data Structures</li>
                                <li className={'text'}>std::map dictionaries</li>
                                <li className={'text'}>Macros and preprocessor</li>
                                <li className={'text'}>Working with dates</li>
                                <li className={'text'}>Project structure</li>
                                <li className={'text'}>Introduction to OOP. Part 1</li>
                                <li className={'text'}>Introduction to OOP. Part 2</li>
                                <li className={'text'}>Introduction to multithreading</li>
                            </ul>
                        </div>
                        <Git/>
                        <SQL/>
                        <Knowledge/>
                        <EnglishSmall/>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Advanced level'}/>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[1]} isButton={true}/>
                            <ul className={'item__list'}>
                                <li className={'text'}>OOP paradigms</li>
                                <li className={'text'}>HTTP requests over the network</li>
                                <li className={'text'}>Additional class features and smart pointers</li>
                                <li className={'text'}>JSON serialization and deserialization</li>
                                <li className={'text'}>Advanced Features of C++</li>
                                <li className={'text'}>Introduction to Qt development</li>
                                <li className={'text'}>What's new in C++</li>
                                <li className={'text'}>Qt Widgets</li>
                                <li className={'text'}>Qt Designer and QML</li>
                                <li className={'text'}>Advanced Qt</li>
                                <li className={'text'}>Additional features of Qt</li>
                                <li className={'text'}>Industrial development practices</li>
                            </ul>
                        </div>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'C++ Game Programming for Unreal Engine'}/>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[2]} isButton={true}/>
                            <ul className={'item__list'}>
                                <li className={'text'}>Asset types</li>
                                <li className={'text'}>Import of various types of assets, naming rules, project structure</li>
                                <li className={'text'}>Static models (Static Mesh)</li>
                                <li className={'text'}>Models with skeletal animation (Skeletal Mesh)</li>
                                <li className={'text'}>Model Animation with Animation Blueprint, State Machine, Blending Tools</li>
                                <li className={'text'}>Creating landscapes with Landscape</li>
                            </ul>
                        </div>
                        <div className={'courses__item big-item'}>
                            <CourseTitle title={content.courses.titles[3]} isButton={true}/>
                            <ul className={'item__list'}>
                                <li className={'text'}>Event system</li>
                                <li className={'text'}>Pawn base class</li>
                                <li className={'text'}>The mechanism of procedural destruction (Destructable Mesh)</li>
                                <li className={'text'}>Interaction between Actor</li>
                                <li className={'text'}>Controller</li>
                                <li className={'text'}>Navigation data (Navmesh) and navigation</li>
                                <li className={'text'}>Taking control of the Pawn class (Possess), creating new Actors (Spawn)</li>
                                <li className={'text'}>Function Reference (Delegates)</li>
                            </ul>
                        </div>
                    </div>
                    <Note/>
                </div>
            </div>
            <div className={'teachers'}>
                <h1 className={'title'}>Teachers</h1>
                <div className={'teachers__row flex-property-set_between'}>
                    <div className={'teacher-medium'}>
                        <img className={'teacher-medium__img'} alt={'Teacher'} src={teachers.avatars[0]}/>
                        <h2 className={'teacher-big__names'}>{teachers.names[0]}<br/>{teachers.surnames[0]}</h2>
                        <hr className={'teacher-big__line'}/>
                        <p className={'light-grey-txt'}>{teachers.descriptions[0]}</p>
                        <p className={'small-title'}>{teachers.texts[0]}</p>
                    </div>
                    <div className={'teacher-medium'}>
                        <img className={'teacher-medium__img'} alt={'Teacher'} src={teachers.avatars[1]}/>
                        <h2 className={'teacher-big__names'}>{teachers.names[1]}<br/>{teachers.surnames[1]}</h2>
                        <hr className={'teacher-big__line'}/>
                        <p className={'light-grey-txt'}>{teachers.descriptions[1]}</p>
                    </div>
                    <div className={'teacher-medium'}>
                        <img className={'teacher-medium__img'} alt={'Teacher'} src={teachers.avatars[2]}/>
                        <h2 className={'teacher-big__names'}>{teachers.names[2]}<br/>{teachers.surnames[2]}</h2>
                        <hr className={'teacher-big__line'}/>
                        <p className={'light-grey-txt'}>{teachers.descriptions[2]}</p>
                        <p className={'small-title'}>{teachers.texts[1]}</p>
                    </div>
                </div>
            </div>
            <ThreeReviews letters={reviews.letters} user_data={reviews.user_data} course={reviews.course} texts={reviews.texts} id={id} changeId={changeId}/>
        </div>
    )
}
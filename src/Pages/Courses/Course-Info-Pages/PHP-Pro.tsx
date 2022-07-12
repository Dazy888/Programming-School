import {CourseHeader} from "../Components/Header/Course-Header"
import {ForWho} from "../Components/For-Who/For-Who"
import {SkillsSixTitles} from "../Components/Skills/SkillsSixTitles"
import {CoursePropsType} from "./Types"
import {HowUse} from "../Components/How-Use/How-Use"
import {Employment} from "../Components/Employment/Employment"
import {Title} from "../Components/Content/Title"
import {Note} from "../Components/Content/Note"
import {CourseTitle} from "../Components/Content/Course-Title"
import {Laravel} from "../Components/Content/Courses/Laravel"
import {Bash} from "../Components/Content/Courses/Bash"
import {Git} from "../Components/Content/Courses/Git"
import {EnglishSmall} from "../Components/Content/Courses/English-Small"
import {Knowledge} from "../Components/Content/Courses/Knowledges"
import {CourseSmall} from "../Components/Content/Course-Small"
import {Triangle} from "../Components/Content/Triangle"
import {CoursesTitle} from "../Components/Content/Courses-Title"

export function PHPPro({time, img, header, for_who, job_name, skills, classNames = [''], content}: CoursePropsType) {
    return(
        <div className={'course-container'}>
            <CourseHeader text={header.textAboutJob} companies={header.companies} salary={header.salary} classNames={classNames} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts}/>
            <SkillsSixTitles titles={skills.titles} texts={skills.texts} className={classNames[1]}/>
            <HowUse classNames={classNames} />
            <Employment classNames={classNames}/>
            <div className={`content ${classNames[1]}`}>
                <Triangle className={classNames[3]}/>
                <div className={`content__container ${classNames[4]}`}>
                    <Title text={content.title.text} numbers={content.title.numbers} descriptions={content.title.descriptions}/>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Main courses'}/>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[0]} isButton={true}/>
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
                                <li className={'text'}>Splitting the application into files</li>
                                <li className={'text'}>Working with files and with the network</li>
                                <li className={'text'}>Error handling, exceptions and logs</li>
                                <li className={'text'}>Protocol HTTP</li>
                                <li className={'text'}>Handling GET and POST requests, header, cookies and sessions</li>
                                <li className={'text'}>REST and RESTful API</li>
                                <li className={'text'}>SQL query language</li>
                                <li className={'text'}>Working with databases in PHP</li>
                                <li className={'text'}>Laravel framework</li>
                            </ul>
                        </div>
                        <Laravel/>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Additional courses'}/>
                        <Bash/>
                        <Git/>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Bonus courses'}/>
                        <EnglishSmall/>
                        <Knowledge/>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[1]} isButton={true}/>
                            <ul className={'item__list'}>
                                <li className={'text'}>Philosophy of development. Workplace preparation</li>
                                <li className={'text'}>Source of goods and content</li>
                                <li className={'text'}>Create pages and templates</li>
                                <li className={'text'}>Standard components</li>
                                <li className={'text'}>Online store catalog</li>
                                <li className={'text'}>Product card</li>
                                <li className={'text'}>Checkout</li>
                                <li className={'text'}>Personal area</li>
                                <li className={'text'}>We are working on the site. Part 1</li>
                                <li className={'text'}>We are working on the site. Part 2</li>
                            </ul>
                        </div>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Final projects'}/>
                        <CourseSmall title={content.courses.titles[2]} text={'Users will register on the service, upload files and create folders, search through documents and share files with other participants'}/>
                        <CourseSmall title={content.courses.titles[3]} text={'Service for booking rooms in hotels. Through a personal account, customers will set prices for room categories, and visitors will order reservations for certain dates'}/>
                        <CourseSmall title={content.courses.titles[4]} text={'Together with other course participants, you will write a product aggregator using the Laravel framework'}/>
                    </div>
                    <Note/>
                </div>
            </div>
        </div>
    )
}
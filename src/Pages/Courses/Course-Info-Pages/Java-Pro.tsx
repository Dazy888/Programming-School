import {CourseHeader} from "../Components/Header/Course-Header"
import {ForWho} from "../Components/For-Who/For-Who"
import {SkillsSixTitles} from "../Components/Skills/SkillsSixTitles"
import {CoursePropsType} from "./Types"
import {HowUse} from "../Components/How-Use/How-Use"
import {Employment} from "../Components/Employment/Employment"
import {Title} from "../Components/Content/Title"
import {CourseTitle} from "../Components/Content/Course-Title"
import {Note} from "../Components/Content/Note"
import {Triangle} from "../Components/Content/Triangle"
import {CoursesTitle} from "../Components/Content/Courses-Title"
import {CourseSmall} from "../Components/Content/Course-Small"
import {CourseTitleSmall} from "../Components/Content/Course-Title-Small"
import {TwoTeachers} from "../Components/Teachers/Two-Teachers";

export function JavaPro({img, header, time, for_who, job_name, skills, classNames = [''], content, teachers}: CoursePropsType) {
    return(
        <div className={'course-container'}>
            <CourseHeader companies={header.companies} salary={header.salary} classNames={classNames} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts}/>
            <SkillsSixTitles titles={skills.titles} texts={skills.texts} className={classNames[1]}/>
            <HowUse classNames={classNames} />
            <Employment classNames={classNames}/>
            <div className={`content ${classNames[1]}`}>
                <Triangle className={classNames[3]}/>
                <div className={`content__container ${classNames[4]}`}>
                    <Title text={content.title.text} numbers={content.title.numbers} descriptions={content.title.descriptions}/>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Level 1: Java Developer'}/>
                        <CourseTitleSmall title={content.courses.titles[0]}/>
                        <CourseTitleSmall title={content.courses.titles[1]}/>
                        <CourseTitleSmall title={content.courses.titles[2]}/>
                        <CourseTitleSmall title={content.courses.titles[3]} className={'objects-classes'}/>
                        <CourseTitleSmall title={content.courses.titles[4]} className={'big-item'}/>
                        <CourseTitleSmall title={content.courses.titles[5]} className={'courses__item_big reset-height_big'}/>
                        <CourseTitleSmall title={content.courses.titles[6]}/>
                        <CourseTitleSmall title={content.courses.titles[7]}/>
                        <CourseTitleSmall title={content.courses.titles[8]}/>
                        <CourseTitleSmall title={content.courses.titles[9]}/>
                        <CourseTitleSmall title={content.courses.titles[10]}/>
                        <CourseTitleSmall title={content.courses.titles[11]}/>
                        <CourseTitleSmall title={content.courses.titles[12]} className={'big-item'}/>
                        <CourseTitleSmall title={content.courses.titles[13]}/>
                        <CourseTitleSmall title={content.courses.titles[14]}/>
                        <CourseTitleSmall title={content.courses.titles[15]}/>
                        <CourseTitleSmall title={content.courses.titles[16]}/>
                        <CourseTitleSmall title={content.courses.titles[17]}/>
                        <CourseTitleSmall title={content.courses.titles[18]}/>
                        <CourseTitleSmall title={content.courses.titles[19]}/>
                        <CourseTitleSmall title={content.courses.titles[20]}/>
                        <CourseTitleSmall title={content.courses.titles[21]}/>
                        <CourseTitleSmall title={content.courses.titles[22]}/>
                        <CourseTitleSmall title={content.courses.titles[23]}/>
                        <CourseTitleSmall title={content.courses.titles[24]}/>
                        <CourseTitleSmall title={content.courses.titles[25]}/>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Level 2: Java Developer'}/>
                        <div className={'courses__item'}>
                            <CourseTitle title={content.courses.titles[26]} isButton={true}/>
                            <ul className={'item__list'}>
                                <li className={'text'}>Introduction to Spring MVC (XML-based approach)</li>
                                <li className={'text'}>Introduction to Spring MVC (Java-based approach)</li>
                                <li className={'text'}>Spring Boot Development</li>
                                <li className={'text'}>Templates and Thymeleaf</li>
                                <li className={'text'}>Working with data</li>
                                <li className={'text'}>Spring REST API. Part 1</li>
                                <li className={'text'}>Spring REST API. Part 2</li>
                                <li className={'text'}>Spring Application Security</li>
                                <li className={'text'}>Testing Spring Applications</li>
                                <li className={'text'}>Spring AOP</li>
                                <li className={'text'}>Integration with external services</li>
                                <li className={'text'}>Preparation for the final project</li>
                            </ul>
                        </div>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Level 3: Java Enterprise Developer'}/>
                        <div className={'courses__item courses__item_big'}>
                            <CourseTitle title={content.courses.titles[27]} isButton={true}/>
                            <ul className={'item__list'}>
                                <li className={'text'}>Teamwork. Flexible management methodologies</li>
                                <li className={'text'}>Teamwork. Interaction tools</li>
                                <li className={'text'}>Development lifecycle</li>
                                <li className={'text'}>IT architecture. From app to ecosystem</li>
                                <li className={'text'}>Microservices. Organization</li>
                                <li className={'text'}>JVM mechanisms. Memory management</li>
                                <li className={'text'}>JVM mechanisms. Compilation</li>
                                <li className={'text'}>JVM mechanisms. Processes and Threads</li>
                                <li className={'text'}>Advanced technologies in Java. Exceptions</li>
                                <li className={'text'}>Advanced technologies in Java. Generics</li>
                                <li className={'text'}>Advanced technologies in Java. Collections in development</li>
                                <li className={'text'}>Advanced technologies in Java. Functional interfaces</li>
                                <li className={'text'}>QA (Quality Assurance)</li>
                                <li className={'text'}>Development infrastructure</li>
                                <li className={'text'}>Monitoring, logging and audit</li>
                                <li className={'text'}>Microservices. Data flow management</li>
                                <li className={'text'}>Microservices. Administration</li>
                                <li className={'text'}>Technologies of corporate development. Work with protocols and protection of data transmission channels</li>
                                <li className={'text'}>Technologies of corporate development. Service tires</li>
                                <li className={'text'}>Apache Camel integration framework</li>
                            </ul>
                        </div>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Additional courses'}/>
                        <CourseTitleSmall title={content.courses.titles[28]}/>
                        <CourseTitleSmall title={content.courses.titles[29]}/>
                        <CourseTitleSmall title={content.courses.titles[30]}/>
                        <CourseTitleSmall title={content.courses.titles[31]}/>
                        <CourseTitleSmall title={content.courses.titles[32]}/>
                        <CourseTitleSmall title={content.courses.titles[33]}/>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Bonus courses'}/>
                        <CourseTitleSmall title={content.courses.titles[34]}/>
                        <CourseTitleSmall title={content.courses.titles[35]}/>
                        <CourseTitleSmall title={content.courses.titles[36]}/>
                        <CourseTitleSmall title={content.courses.titles[37]} className={'big-item'}/>
                        <CourseTitleSmall title={content.courses.titles[38]} className={'big-item'}/>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Final projects'}/>
                        <CourseSmall title={content.courses.titles[39]} text={'You will develop a search engine that will help site visitors quickly find the information they need using the search box'}/>
                        <CourseSmall title={content.courses.titles[40]} text={'Together with a team of 5-10 developers under the guidance of an experienced team leader, create a full-scale analogue of the social network VKontakte on 60+ standard pages'}/>
                    </div>
                    <Note/>
                </div>
            </div>
            <TwoTeachers avatars={[teachers.pilipenko.img, teachers.ovchinnikov.img]} names={[teachers.pilipenko.name, teachers.ovchinnikov.name]} surnames={[teachers.pilipenko.surname, teachers.ovchinnikov.surname]} descriptions={[teachers.pilipenko.description, teachers.ovchinnikov.description]} texts={[teachers.pilipenko.text, teachers.ovchinnikov.text]}/>
        </div>
    )
}
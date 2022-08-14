import {CourseHeader} from "../Components/Header/Course-Header"
import {ForWho} from "../Components/For-Who/For-Who"
import {SkillsSixTexts} from "../Components/Skills/SkillsSixTexts"
import {CoursePropsType} from "./Types"
import {HowUse} from "../Components/How-Use/How-Use"
import {Employment} from "../Components/Employment/Employment"
import {Title} from "../Components/Content/Title"
import {Knowledge} from "../Components/Content/Courses/Knowledges"
import {EnglishSmall} from "../Components/Content/Courses/English-Small"
import {Note} from "../Components/Content/Note"
import {CourseSmall} from "../Components/Content/Course-Small"
import {Triangle} from "../Components/Content/Triangle"
import {CoursesTitle} from "../Components/Content/Courses-Title"
import {TwoTeachers} from "../Components/Teachers/Two-Teachers"
import {SixReviews} from "../Components/Reviews/Six-Reviews"
import React, {useState} from "react"
import {ResumeTitle} from "../Components/Resume/Resume-Title"
import {SkillsRow} from "../Components/Resume/Skills-Row"
import {Certificate} from "../Components/Resume/Certificate"
import {FiveQuestions} from "../Components/Questions/Five-Question"
import {Registration} from "../Components/Registration/Registration"

export function Java({header, time, img, for_who, job_name, skills, classNames = [''], content, teachers, reviews, resume, questions}: CoursePropsType) {
    const course_container: any = React.createRef()

    const [reviewsSectionId, changeReviewsSectionId] = useState(0)
    const [reviews_section_margin, changeReviewsSectionMargin] = useState(0)

    const [employers_feedback_margin, changeEmployersFeedbackMargin] = useState(0)
    const [careerCenterId, changeCareerCenterId] = useState(0)
    const [reviewsId, changeReviewsId] = useState(0)

    return(
        <div className={'course-container'} ref={course_container}>
            <CourseHeader companies={header.companies} salary={header.salary} classNames={classNames} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts}/>
            <SkillsSixTexts texts={skills.texts} className={classNames[1]}/>
            <HowUse classNames={classNames} />
            <Employment changeMargin={changeEmployersFeedbackMargin} margin={employers_feedback_margin} reviewsId={reviewsId} changeCareerCenterId={changeCareerCenterId} changeReviewsId={changeReviewsId} careerCenterId={careerCenterId} classNames={classNames}/>
            <div className={`content ${classNames[1]}`}>
                <Triangle className={classNames[3]}/>
                <div className={`content__container ${classNames[4]}`}>
                    <Title text={content.title.text} numbers={content.title.numbers} descriptions={content.title.descriptions}/>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Main unit'}/>
                        <CourseSmall title={content.courses.titles[0]} text={'You will learn where the Java language is used and what the code looks like. Set up a development environment and write your first console application'}/>
                        <CourseSmall title={content.courses.titles[1]} text={'Get familiar with variables in the Java language, learn how to use conditions and comparison operators'}/>
                        <CourseSmall title={content.courses.titles[2]} text={'Learn to use loops in Java, navigate complex code'}/>
                        <CourseSmall title={content.courses.titles[3]} text={'Learn about objects, classes and methods in Java. Understand how they work, learn how to create them and use them'}/>
                        <CourseSmall title={content.courses.titles[4]} text={'Familiarize yourself with the principle of encapsulation. Learn about POJO classes, getters and setters, immutability and object copying'}/>
                        <CourseSmall title={content.courses.titles[5]} text={'Learn how methods and variables work in program code. Learn how to create constants and understand what they are for'}/>
                        <CourseSmall title={content.courses.titles[6]} text={'Understand what primitives are, how they are similar to objects and how they differ from them'}/>
                        <CourseSmall title={content.courses.titles[7]} text={'Familiarize yourself with the various operations that can be performed on numbers: arithmetic, assignment, increment, decrement, and comparison operations'}/>
                        <CourseSmall title={content.courses.titles[8]} text={'Learn to define strings and check their length. Learn how to compare strings with each other and combine several into one'}/>
                        <CourseSmall title={content.courses.titles[9]} text={'Learn to work with arrays and their elements. You will be able to search for elements using HashMap and TreeMap'}/>
                        <CourseSmall title={content.courses.titles[10]} text={'Learn how to inherit classes in Java and learn how to work with the Comparable, Comparator, Map and Set interfaces'}/>
                        <CourseSmall title={content.courses.titles[11]} text={'Learn object-oriented programming in Java and new development techniques. Familiarize yourself with the build system and the Maven repository'}/>
                        <CourseSmall title={content.courses.titles[12]} text={'You will learn how exceptions occur and how to "catch" them. Learn to test and debug applications, write logs with information about applications'}/>
                        <CourseSmall title={content.courses.titles[13]} text={'Understand how to read files using FileInputStream, BufferedReader and the Files class. Learn to work with HTML and JSON files'}/>
                        <CourseSmall title={content.courses.titles[14]} text={'Learn how to work with the MySQL database, change data and access it with various queries'}/>
                        <CourseSmall title={content.courses.titles[15]} text={'Learn what multithreading is and how to work with it in the Runnable interface. You will understand how to set up the interaction of streams, learn how to block, suspend and interrupt data streams'}/>
                        <CourseSmall title={content.courses.titles[16]} text={'Familiarize yourself with the HTTP protocol, study the headers, the body of the request and response. Learn how to work with PUT, DELETE, OPTIONS, GET and POST requests'}/>
                        <CourseSmall title={content.courses.titles[17]} text={'Develop your first Spring Boot application, creating a controller and connecting to a database'}/>
                        <CourseSmall title={content.courses.titles[18]} text={'Get to know Redis and learn about data structures. Explore the features and data aggregation in MongoDB'}/>
                        <CourseSmall title={content.courses.titles[19]} text={'Find out what resources you need to save to optimize the application. Explore two ways to lighten your applications and learn how to index and optimize queries'}/>
                        <CourseSmall title={content.courses.titles[20]} text={'Learn to develop user-friendly and functional applications for the desktop'}/>
                        <CourseSmall title={content.courses.titles[21]} text={'Learn why algorithms are needed and learn how to work with binary search algorithms, sorting, substring search and others'}/>
                        <CourseSmall title={content.courses.titles[22]} text={'Learn hash tables, queue and stack, linked tables, binary and suffix tree'}/>
                        <CourseSmall title={content.courses.titles[23]} text={'You will learn what big data is and how to work with the HDFS file system. Get familiar with the Spark framework and learn how to run your own applications in it'}/>
                        <CourseSmall title={content.courses.titles[24]} text={'Learn what design patterns are and get to know Singleton, Factory, Decorator, Adapter and other patterns'}/>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Additional courses'}/>
                        <CourseSmall title={content.courses.titles[25]} text={'Learn how to work with Git: compare, change and rollback different versions of code, learn how to create branches and work on the same project as a team'}/>
                        <CourseSmall title={content.courses.titles[26]} text={'Learn how to write database queries, get familiar with basic expressions and table operations'}/>
                        <CourseSmall title={content.courses.titles[27]} text={'Prepare to speak to an expert with your work, analyze typical mistakes and learn how to behave in public'}/>
                        <CourseSmall title={content.courses.titles[28]} text={'Get a step-by-step job search plan from the Career Center'}/>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Bonus courses'}/>
                        <Knowledge/>
                        <EnglishSmall/>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Final projects'}/>
                        <CourseSmall title={content.courses.titles[29]} text={'You will develop a search engine that will help site visitors quickly find the information they need using the search box'}/>
                        <CourseSmall title={content.courses.titles[30]} text={'You will work under the guidance of an experienced team leader as part of a team of 5-7 people. Create your own social network in 3 months according to the TOR from a real customer. In practice, get acquainted with the SCRUM project management methodology. All the processes through which you will go through is an experience as close as possible to combat conditions. This is how commercial software is created in employer companies'}/>
                    </div>
                    <Note/>
                </div>
            </div>
            <TwoTeachers avatars={[teachers.pilipenko.img, teachers.ovchinnikov.img]} names={[teachers.pilipenko.name, teachers.ovchinnikov.name]} surnames={[teachers.pilipenko.surname, teachers.ovchinnikov.surname]} descriptions={[teachers.pilipenko.description, teachers.ovchinnikov.description]} texts={[teachers.pilipenko.text, teachers.ovchinnikov.text]}/>
            <SixReviews changeLeft={changeReviewsSectionMargin} left={reviews_section_margin} classNames={classNames} letters={reviews.letters} user_data={reviews.user_data} course={reviews.course} texts={reviews.texts} id={reviewsSectionId} changeId={changeReviewsSectionId}/>
            <div className={`resume ${classNames[1]}`}>
                <ResumeTitle job={job_name} salary={resume.salary}/>
                <div className={'resume__skills'}>
                    <h3 className={'skills__title'}>Professionals skills:</h3>
                    <SkillsRow texts={resume.texts.slice(0,4)}/>
                    <SkillsRow texts={resume.texts.slice(4,9)}/>
                    <div className={'skills__row'}>
                        <ul className={'row__list'}>
                            <li className={'list__item'}>{resume.texts[9]}</li>
                        </ul>
                    </div>
                </div>
                <span className={`line ${classNames[0]}`}/>
                <Certificate img={resume.certificate}/>
            </div>
            <Registration className={classNames[0]}/>
            <FiveQuestions classNames={[`${classNames[4]}`, '', '', '', '', '']} titles={questions.titles} texts={questions.texts}/>
        </div>
    )
}
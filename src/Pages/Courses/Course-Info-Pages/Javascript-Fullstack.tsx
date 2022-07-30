import {CourseHeader} from "../Components/Header/Course-Header"
import {ForWho} from "../Components/For-Who/For-Who"
import {SkillsSixTitles} from "../Components/Skills/SkillsSixTitles"
import {Projects} from "../Components/Projects/Projects"
import {CourseProjectsPropsType} from "./Types"
import {HowUse} from "../Components/How-Use/How-Use"
import {Employment} from "../Components/Employment/Employment"
import {Title} from "../Components/Content/Title"
import {MarkupBasic} from "../Components/Content/Courses/Markup-Basic"
import {MarkupAdvanced} from "../Components/Content/Courses/Markup-Advanced"
import {JSBasic} from "../Components/Content/Courses/JS-Basic"
import {JSAdvanced} from "../Components/Content/Courses/JS-Advanced"
import {Node} from "../Components/Content/Courses/Node"
import {Vue} from "../Components/Content/Courses/Vue"
import {ReactFramework} from "../Components/Content/Courses/React-Framework"
import {Angular} from "../Components/Content/Courses/Angular"
import {Knowledge} from "../Components/Content/Courses/Knowledges"
import {TouchTyping} from "../Components/Content/Courses/Touch-Typing"
import {Photoshop} from "../Components/Content/Courses/Photoshop"
import {Figma} from "../Components/Content/Courses/Figma"
import {Bash} from "../Components/Content/Courses/Bash"
import {EnglishBig} from "../Components/Content/Courses/English-Big"
import {Career} from "../Components/Content/Courses/Career"
import {Note} from "../Components/Content/Note"
import {Git} from "../Components/Content/Courses/Git"
import {CourseSmall} from "../Components/Content/Course-Small"
import {Triangle} from "../Components/Content/Triangle"
import {CoursesTitle} from "../Components/Content/Courses-Title"
import {EightTeachers} from "../Components/Teachers/Eight-Teachers"
import {OneReview} from "../Components/Reviews/One-Review";
import {TenResumes} from "../Components/Resume/Ten-Resumes";

export function JavascriptFullstack({time, img, header, for_who, job_name, skills, projects, classNames = [''], content, teachers, reviews, resume}: CourseProjectsPropsType) {
    return (
        <div className={'course-container'}>
            <CourseHeader companies={header.companies} salary={header.salary} classNames={classNames} profession={job_name} titleTxt={header.titleTxt} imgUrl={img} time={time} projects={header.projects}/>
            <ForWho photographs={for_who.photographs} titles={for_who.titles} texts={for_who.texts}/>
            <SkillsSixTitles titles={skills.titles} texts={skills.texts} className={classNames[1]}/>
            <Projects className={classNames[2]} photographs={projects.photographs} titles={projects.titles} texts={projects.texts}/>
            <HowUse classNames={classNames}/>
            <Employment classNames={classNames}/>
            <div className={`content ${classNames[1]}`}>
                <Triangle className={classNames[3]}/>
                <div className={`content__container ${classNames[4]}`}>
                    <Title text={content.title.text} numbers={content.title.numbers} descriptions={content.title.descriptions}/>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Main Courses'}/>
                        <MarkupBasic/>
                        <MarkupAdvanced/>
                        <JSBasic/>
                        <JSAdvanced/>
                        <Node/>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Choice course'}/>
                        <Vue/>
                        <ReactFramework/>
                        <Angular/>
                    </div>
                    <div className={'content__courses'}>
                        <CoursesTitle title={'Additional courses'}/>
                        <Knowledge/>
                        <TouchTyping/>
                        <Photoshop/>
                        <Figma/>
                        <Bash/>
                        <Git/>
                        <EnglishBig/>
                        <Career/>
                        <CourseSmall title={content.courses.titles[0]} text={'A course for pumping communication skills, self-organization, creative thinking and stress resistance. Soft skills help to work effectively in any team and build a successful career'}/>
                    </div>
                    <Note/>
                </div>
            </div>
            <EightTeachers avatars={[teachers.kornienko.img, teachers.vasiyanovich.img, teachers.yakovushen.img, teachers.bondarovich.img, teachers.savchenko.img, teachers.kuznetsov.img, teachers.klimonova.img, teachers.mirotin.img]}
                           names={[teachers.kornienko.name, teachers.vasiyanovich.name, teachers.yakovushen.name, teachers.bondarovich.name, teachers.savchenko.name, teachers.kuznetsov.name, teachers.klimonova.name, teachers.mirotin.name]}
                           surnames={[teachers.kornienko.surname, teachers.vasiyanovich.surname, teachers.yakovushen.surname, teachers.bondarovich.surname, teachers.savchenko.surname, teachers.kuznetsov.surname, teachers.klimonova.surname, teachers.mirotin.surname]}
                           descriptions={[teachers.kornienko.description, teachers.vasiyanovich.description, teachers.yakovushen.description, teachers.bondarovich.description, teachers.savchenko.description, teachers.kuznetsov.description, teachers.klimonova.description, teachers.mirotin.description]}/>
            <OneReview letter={reviews.letters[0]} user_data={reviews.user_data[0]} course={reviews.course} text={reviews.texts[0]}/>
            <TenResumes job={job_name} salary={resume.salary} texts={resume.texts} certificate={resume.certificate} classNames={classNames}/>
        </div>
    )
}
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
import {React} from "../Components/Content/Courses/React"
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

export function JavascriptFullstack({time, img, header, for_who, job_name, skills, projects, classNames = [''], content}: CourseProjectsPropsType) {
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
                        <React/>
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
        </div>
    )
}
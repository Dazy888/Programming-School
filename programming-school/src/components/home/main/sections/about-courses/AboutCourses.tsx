import React from "react"
import styles from "@/styles/Home.module.scss"
import { ContentItem } from "@/components/home/main/sections/about-courses/ContentItem"

const AboutCoursesComponent = () => {
    return(
        <section id={styles['about-courses']}>
            <h1 className={"title"}>Get a profession right now</h1>
            <div className={`${styles['about-courses__content']} flex-between`}>
                <ContentItem imgAlt={'Computer Icon'} imgPath={'/home/computer-icon.png'} subtitle={'Only practical skills at work'} text={'In our courses you will learn only practical and modern skills, that will help you in your work.Also, our teachers will teach you how to work in a team, ask the right questions and how to pass your the first interview'}/>
                <ContentItem imgAlt={'Flash Drive Icon'} imgPath={'/home/flash-drive.png'} subtitle={'Work on modern equipment'} text={'Thanks to our sponsors in our classrooms are equipped with the bests computers, computer mice, keyboards, headphones, monitors, chairs and other equipment.You will enjoy every second being in classroom'}/>
                <ContentItem imgAlt={'USB Icon'} imgPath={'/home/usb.png'} subtitle={'Certification upon graduation'} text={'Our courses are different from others, at the end you will receive not only our certificate (which is appreciated in many places), but we also promise you a 100% job placement'}/>
            </div>
        </section>
    )
}

export const AboutCourses = React.memo(AboutCoursesComponent)
import React from "react"
import styles from "@/styles/Home.module.scss"
import { ContentItem } from "@/components/home/about-courses/ContentItem"
import { TitleText } from "@/components/layout/TitleText"

const AboutCoursesSection = () => (
    <section id={styles['about-courses']} className={'my-48 text-center'}>
        <TitleText text={'Get a profession right now'}/>
        <div className={`${styles.content} grid grid-cols-3 gap-8 mt-28`}>
            <ContentItem imgAlt={'Computer Icon'} imgPath={'computer'} subtitle={'Only practical skills at work'}
                         text={'In our courses you will learn only practical and modern skills, that will help you in your work. Also, our speakers will teach you how to work in a team, ask the right questions and how to pass your the first interview'}
            />
            <ContentItem imgAlt={'Flash Drive Icon'} imgPath={'flashDrive'} subtitle={'Work on modern equipment'}
                         text={'Thanks to our sponsors in our classrooms are equipped with the bests computers, computer mice, keyboards, headphones, monitors, chairs and other equipment.You will enjoy every second being in classroom'}
            />
            <ContentItem imgAlt={'USB Icon'} imgPath={'usbCable'} subtitle={'Certification upon graduation'}
                         text={'Our courses are different from others, at the end you will receive not only our certificate (which is appreciated in many places), but we also promise you a 100% job placement'}
            />
        </div>
    </section>
)

export default React.memo(AboutCoursesSection)

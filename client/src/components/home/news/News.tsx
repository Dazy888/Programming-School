import React from "react"
import styles from "@/styles/Home.module.scss"
import { Link } from "@/components/home/news/Link"
import { Form } from "@/components/home/news/Form"
import { TitleText } from "@/components/layout/TitleText"
import { Subtitle } from "@/components/home/Subtitle"

const NewsComponent = () => {
    return(
        <section id={styles.news} className={'mt-48 mx-auto text-center w-fit'}>
            <TitleText text={'News every week'}/>
            <Subtitle classNames={'mt-8 mb-14'} text={'If you subscribe, you will receive the latest news and discount notifications'}/>
            <Form />
            <div className={`${styles['social-networks']} flex justify-between w-1/2 mt-12 mx-auto`}>
                <Link icon={'youtube'} />
                <Link icon={'facebook-f'} href={'facebook'}/>
                <Link icon={'instagram'} />
            </div>
        </section>
    )
}

export default React.memo(NewsComponent)

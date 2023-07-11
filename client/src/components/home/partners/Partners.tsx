import React from "react"
import styles from "@/styles/Home.module.scss"
import { Title } from "@/components/home/Title"
import { Partner } from "@/components/home/partners/Partner"

const PartnersSection = () => (
    <section id={styles.partners} className={'mt-48'}>
        <Title title={'Partners - top brands'}/>
        <div className={`${styles['partners__logos'] || ''} grid grid-cols-4`}>
            <Partner imgAlt={'Msi Logo'} imgPath={'msi'} />
            <Partner imgAlt={'Nvidia Logo'} imgPath={'nvidia'} />
            <Partner imgAlt={'Logitech Logo'} imgPath={'logitech'} />
            <Partner borderRightNone={true} imgAlt={'Intel Logo'} imgPath={'intel'} />
            <Partner borderBottomNone={true} imgAlt={'HyperX Logo'} imgPath={'hyperx'} />
            <Partner borderBottomNone={true} imgAlt={'Acer Logo'} imgPath={'acer'} />
            <Partner borderBottomNone={true} imgAlt={'Samsung Logo'} imgPath={'samsung'} />
            <Partner imgAlt={'Hator Logo'} imgPath={'hator'} />
        </div>
    </section>
)

export default React.memo(PartnersSection)

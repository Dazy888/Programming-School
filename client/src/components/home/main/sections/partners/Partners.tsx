import React from "react"
import styles from "@/styles/Home.module.scss"
import { Title } from "@/components/home/main/Title"
import { Row } from "@/components/home/main/sections/partners/Row"

const PartnersSection = () => (
    <section id={styles.partners} className={'mt-48'}>
        <Title title={'Partners - top brands'}/>
        <div className={styles['partners__logos']}>
            <Row imgAlts={['Msi Logo', 'Nvidia Logo', 'Logitech Logo', 'Intel Logo']} imgPaths={['/home/msi-logo.png', '/home/nvidia-logo.jpg', '/home/logitech-logo.png', '/home/intel-logo.png']}/>
            <Row imgAlts={['HyperX Logo', 'Acer Logo', 'Samsung Logo', 'Gigabyte Logo']} imgPaths={['/home/hyperx-logo.png', '/home/acer-logo.jpg', '/home/samsung-logo.jpg', '/home/hator-logo.png']}/>
        </div>
    </section>
)

export default React.memo(PartnersSection)

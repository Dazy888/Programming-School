import React from "react"
import styles from "@/styles/Home.module.scss"
import { StudentsCounterItem } from "@/components/home/header/StudentsCounterItem"
import { useRouter } from "next/router"

const BookingComponent = () => {
    const router = useRouter()

    return(
        <div className={`${styles['booking']} flex-center`}>
            <div className={`${styles['booking__content']} flex-between`}>
                <button onClick={() => router.push('/courses')} className={`${styles['booking__btn']} flex-center number`}>Book a course</button>
                <div className={styles['booking__students-counter']}>
                    <StudentsCounterItem text={'Total students'} amount={'1200'}/>
                    <StudentsCounterItem text={'Successfully completed the courses'} amount={'1000'}/>
                </div>
                <div className={styles['booking__orders']}>
                    <div className={`${styles['booking__orders_places']} flex-between`}>
                        <p className={styles['grey-txt']}>Places left:</p>
                        <p className={'number'}>120</p>
                    </div>
                    <div className={styles['booking__orders_progress-bar']}>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={'flex-between'}>
                        <p className={styles['grey-txt']}>0</p>
                        <p className={styles['grey-txt']}>300</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Booking = React.memo(BookingComponent)
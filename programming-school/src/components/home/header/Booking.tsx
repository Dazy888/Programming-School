import React from "react"
import { useRouter } from "next/router"
// Styles
import styles from "@/styles/Home.module.scss"
// Components
import { StudentsCounterItem } from "@/components/home/header/StudentsCounterItem"
import { GreyText } from "@/components/home/header/GreyText"
import { Number } from "@/components/home/header/Number"

const BookingComponent = () => {
    const router = useRouter()

    return(
        <div className={`${styles['booking']} flex justify-center h-32`}>
            <div className={`${styles['booking__content']} flex justify-between items-center`}>
                <button onClick={() => router.push('/courses')} className={'w-40 h-11 rounded-full flex-center font-bold text-base text-white'}>Book a course</button>
                <div className={`${styles['booking__students-counter']}`}>
                    <StudentsCounterItem isMarginBottom={true} text={'Total students :'} amount={'1200'}/>
                    <StudentsCounterItem text={'Successfully completed the courses :'} amount={'1000'}/>
                </div>
                <div className={styles['booking__orders']}>
                    <div className={`${styles['booking__orders_places']} flex justify-between w-2/5`}>
                        <GreyText text={'Places left :'}/>
                        <Number number={'120'}/>
                    </div>
                    <div className={`${styles['booking__orders_progress-bar']} flex h-1.5 mt-2 mb-1.5`}>
                        <div className={'w-3/5'}></div>
                        <div className={'w-2/5 bg-white'}></div>
                    </div>
                    <div className={'flex justify-between'}>
                        <GreyText text={'0'}/>
                        <GreyText text={'300'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Booking = React.memo(BookingComponent)
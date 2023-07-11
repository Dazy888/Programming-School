import React from "react"
import Link from "next/link"
import styles from "@/styles/Home.module.scss"
import { CounterItem } from "@/components/home/booking/CounterItem"
import { GreyText } from "@/components/home/booking/GreyText"
import { Number } from "@/components/home/booking/Number"

const BookingComponent = () => (
    <section id={styles.booking} className={`flex justify-center py-10`}>
        <div className={`${styles['booking__container']} flex justify-between items-center gap-20`}>
            <Link className={'py-3 px-7 rounded-full flex-center font-medium'} href={'/courses'}>Book a course</Link>
            <div className={`${styles['booking__students-counter']}`}>
                <CounterItem isMarginBottom={true} text={'Total students'} amount={'1200'}/>
                <CounterItem text={'Successfully completed the courses'} amount={'1000'}/>
            </div>
            <div className={styles['booking__orders']}>
                <div className={'flex justify-between w-2/5'}>
                    <GreyText text={'Places left :'}/>
                    <Number number={'120'}/>
                </div>
                <div className={`${styles['booking__progress-bar']} flex h-1.5 mt-2 mb-1.5`}>
                    <div className={'w-3/5 rounded-lg'}></div>
                    <div className={'w-2/5 bg-white rounded-lg'}></div>
                </div>
                <div className={'flex justify-between'}>
                    <GreyText text={'0'}/>
                    <GreyText text={'300'}/>
                </div>
            </div>
        </div>
    </section>
)

export const Booking = React.memo(BookingComponent)

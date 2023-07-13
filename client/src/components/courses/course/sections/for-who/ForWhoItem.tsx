import React from "react"
import Image from "next/image"
import { ForWho } from "@/models/course.models"
import { useAppSelector } from "@/hooks/redux"

interface Props extends ForWho {
    index: number
}

const ForWhoItemComponent: React.FC<Props> = ({ subtitle, text, index }) => {
    const openedCourse = useAppSelector(state => state.coursesReducer.openedCourse)

    return(
        <div>
            <Image width={160} height={160} alt={'IMG'} src={`/courses/course/for-who/${openedCourse}/${index}.webp`}/>
            <h3 className={'text-xl font-medium mt-6 mb-2'}>{subtitle}</h3>
            <p className={'max-w-sm'}>{text}.</p>
        </div>
    )
}

export const ForWhoItem = React.memo(ForWhoItemComponent)

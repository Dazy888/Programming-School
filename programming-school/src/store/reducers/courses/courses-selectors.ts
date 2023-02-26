import { PreviewsResponse } from "@/interfaces/course"
import { AppStateType } from "@/store/store"

export const getAllPreviewData: PreviewsResponse = (state) => {
    const courses = Object.values(state.courses.courses)

    let data = []
    for (const course of courses) data.push(course.preview)

    return data
}

export const getCoursePage = (state: AppStateType) => {
    const courses = Object.values(state.courses.courses)
    let openedCourse = courses[0];

    for (const course of courses) {
        if (course.preview.path === state.courses.openedCourse) openedCourse = course
    }

    return openedCourse
}
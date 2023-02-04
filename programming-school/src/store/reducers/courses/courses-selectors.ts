import { PreviewsResponse } from "@/interfaces/courses"

export const getAllPreviewData: PreviewsResponse = (state) => {
    const courses = Object.values(state.courses)

    let data = []
    for (const course of courses) data.push(course.preview)

    return data
}
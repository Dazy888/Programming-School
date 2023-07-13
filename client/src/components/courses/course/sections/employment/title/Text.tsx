import React from "react"

const TextComponent = () => (
    <div className={'max-w-lg'}>
        <h1 className={'text-5xl font-bold mb-12'}>Employment or money back</h1>
        <p className={'opacity-90 font-medium text-lg'}>You will receive individual support from an HR specialist. Together you will create a resume, prepare a portfolio and develop
            a career plan that will help you find a job faster. You will be able to choose attractive vacancies and get priority over other applicants.<br/><br/>
            If you do not show up for work, we will refund your money for the course.
        </p>
    </div>
)

export const Text = React.memo(TextComponent)

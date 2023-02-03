import React from "react"
// Styles
import styles from "@/styles/Home.module.scss"
// Components
import { Link } from "@/components/home/main/sections/news/Link"
import { Form } from "@/components/home/main/sections/news/Form"
// Form
import { SubmitHandler, useForm } from "react-hook-form"
// Interfaces
import { FormI } from "@/interfaces/home"

const NewsComponent = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm<FormI>({mode: 'onChange'})
    const onSubmit: SubmitHandler<FormI> = () => reset()

    return(
        <section id={styles['news']}>
            <h1 className={'title'}>News every week</h1>
            <h3 className={styles['grey-subtitle']}>If you subscribe, you will receive the latest news and discount notifications</h3>
            <Form handleSubmit={handleSubmit} onSubmit={onSubmit} errorMessage={errors.email?.message} register={register}/>
            <div className={`${styles['news__social-networks']} flex-between`}>
                <Link icon={'youtube'} href={'https://www.youtube.com/'}/>
                <Link icon={'facebook-f'} href={'https://www.facebook.com/'}/>
                <Link icon={'instagram'} href={'https://www.instagram.com/'}/>
            </div>
        </section>
    )
}

export const News = React.memo(NewsComponent)
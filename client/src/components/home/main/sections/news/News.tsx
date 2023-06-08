import React from "react"
import styles from "@/styles/Home.module.scss"
import { SubmitHandler, useForm } from "react-hook-form"
import { Link } from "@/components/home/main/sections/news/Link"
import { Form } from "@/components/home/main/sections/news/Form"
import { TitleText } from "@/components/common/TitleText"
import { Subtitle } from "@/components/home/main/Subtitle"

interface HomeForm {
    email: string
}

const NewsComponent = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm<HomeForm>({ mode: 'onChange' })
    const onSubmit: SubmitHandler<HomeForm> = () => reset()

    return(
        <section id={styles.news} className={'mt-48 mx-auto text-center w-fit'}>
            <TitleText text={'News every week'}/>
            <Subtitle classNames={'mt-8 mb-14'} text={'If you subscribe, you will receive the latest news and discount notifications'}/>
            <Form handleSubmit={handleSubmit} onSubmit={onSubmit} errorMessage={errors.email?.message} register={register}/>
            <div className={`${styles['social-networks']} flex justify-between w-1/2 mt-12 mx-auto`}>
                <Link icon={'youtube'} href={'https://www.youtube.com/'}/>
                <Link icon={'facebook-f'} href={'https://www.facebook.com/'}/>
                <Link icon={'instagram'} href={'https://www.instagram.com/'}/>
            </div>
        </section>
    )
}

export default React.memo(NewsComponent)

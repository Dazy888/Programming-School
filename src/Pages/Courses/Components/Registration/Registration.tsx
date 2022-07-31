import {Field, Form, Formik} from "formik"
import {nameValidation, phoneNumberValidator} from "../../../Contacts/Contacts-Page"
import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {CoursesReducerActions} from "../../../../Redux/Courses-Reducer/Courses-Reducer"
import {getFetchingStatus} from "../../../../Redux/Courses-Reducer/Courses-Selectors"

type RegistrationPropsType = {
    className?: string
}

export function Registration({className = ''}: RegistrationPropsType) {
    const dispatch = useDispatch()
    const fetching = useSelector(getFetchingStatus)

    function submit(values: any, formikHelpers: any) {
        dispatch(CoursesReducerActions.changeFetchingStatus(true))
        formikHelpers.resetForm()
    }

    return(
        <div className={`registration ${className} flex-property-set_center`}>
            <div className={'registration__content'}>
                <h1 className={'content__title'}>Leave a request for a course - the consultant will answer your questions and help you choose the best rate</h1>
                <div className={'content__form'}>
                    <Formik initialValues={{name: '', email: '', phone: ''}} onSubmit={submit}>
                        {({ errors, touched }) => (
                            <Form>
                                <div className={'error-container'}>
                                    {errors.name && touched.name ? <p className={'error__txt'}>{errors.name}</p> : null}
                                    <Field className={'name-input light-grey-txt'} minLength={3} maxLength={20} placeholder={'Your name'} type={'text'} name={'name'} validate={nameValidation}/>
                                    {errors.name && touched.name ? <i className="fa-solid fa-circle-exclamation error__icon"></i> : null}
                                </div>
                                <div className={'form__row flex-property-set_between'}>
                                    <div className={'error-container'}>
                                        {errors.phone && touched.phone ? <p className={'error__txt'}>{errors.phone}</p> : null}
                                        <Field className={''} minLength={10} maxLength={13} placeholder={'Phone'} type={'text'} name={'phone'} validate={phoneNumberValidator} />
                                        {errors.phone && touched.phone ? <i className="fa-solid fa-circle-exclamation error__icon"></i> : null}
                                    </div>
                                    <div className={'error-container'}>
                                        {errors.email && touched.email ? <p className={'error__txt'}>{errors.email}</p> : null}
                                        <Field className={''} minLength={15} maxLength={30} placeholder={'Your email'} type={'text'} name={'email'} validate={emailValidator}/>
                                        {errors.email && touched.email ? <i className="fa-solid fa-circle-exclamation error__icon"></i> : null}
                                    </div>
                                </div>
                                <button disabled={fetching} className={'submit-input small-title'}>Send</button>
                            </Form>
                        )}
                    </Formik>
                    <p className={'light-grey-txt'}>By clicking on the button, I agree to the processing of personal data and the terms of use of the Platform</p>
                </div>
            </div>
        </div>
    )
}


export function emailValidator(value: string) {
    if (!value) return 'Field is required'
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) return 'There is a wrong symbols'
}
import {Field, Form, Formik} from "formik"
import {nameValidation, phoneNumberValidator} from "../../../Contacts/Contacts-Page"
import React from "react"
import {useDispatch} from "react-redux"
import {ContactsReducerActions} from "../../../../Redux/Contacts-Reducer/Contacts-Reducer";

type RegistrationPropsType = {
    className?: string
}

export function Registration({className = ''}: RegistrationPropsType) {
    const dispatch = useDispatch()

    function submit(values: any, formikHelpers: any) {
        dispatch(ContactsReducerActions.changeFetchingStatus(true))
        formikHelpers.resetForm()
    }

    return(
        <div className={`registration ${className} flex-property-set_center`}>
            <div className={'registration__content'}>
                <h1 className={'content__title'}>Leave a request for a course - the consultant will answer your questions and help you choose the best rate</h1>
                <div className={'content__form'}>
                    <Formik initialValues={{firstName: '', email: '', phone: ''}} onSubmit={submit}>
                        {({ errors, touched }) => (
                            <Form>
                                <div className={'row_error-container'}>
                                    {/*{errors.firstName && touched.firstName ? <p className={'error__txt'}>{errors.firstName}</p> : null}*/}
                                    <Field className={'name-input light-grey-txt'} minLength={3} maxLength={20} placeholder={'Your name'} type={'text'} name={'firstName'} validate={nameValidation}/>
                                    {/*{errors.firstName && touched.firstName ? <i className="fa-solid fa-circle-exclamation error"></i> : null}*/}
                                </div>
                                <div className={'form__row flex-property-set_between'}>
                                    <div className={'row_error-container'}>
                                        {/*{errors.phone && touched.phone ? <p className={'error__txt'}>{errors.phone}</p> : null}*/}
                                        <Field className={''} minLength={10} maxLength={13} placeholder={'Your phone number'} type={'text'} name={'phone'} validate={phoneNumberValidator} />
                                        {/*{errors.phone && touched.phone ? <i className="fa-solid fa-circle-exclamation error"></i> : null}*/}
                                    </div>
                                    <div className={'row_error-container'}>
                                        {/*{errors.email && touched.email ? <p className={'error__txt'}>{errors.email}</p> : null}*/}
                                        <Field className={''} minLength={15} maxLength={30} placeholder={'Your email'} type={'text'} name={'email'} validate={nameValidation}/>
                                        {/*{errors.email && touched.email ? <i className="fa-solid fa-circle-exclamation error"></i> : null}*/}
                                    </div>
                                </div>
                                <Field className={''} value={''} type={'submit'}/>
                            </Form>
                        )}
                    </Formik>
                    <p className={'light-grey-txt'}>By clicking on the button, I agree to the processing of personal data and the terms of use of the Platform</p>
                </div>
            </div>
        </div>
    )
}
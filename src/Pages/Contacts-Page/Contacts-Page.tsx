import './Styles/Contacts-Page.css'
import './Styles/Contacts-Page-Media.css'
import {Navigation} from "../../Components/Navigation"
import {Field, Form, Formik} from "formik"
import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {ContactsReducerActions, getFetchingStatus} from "../../Redux/Contacts-Page-Reducer/Contacts-Reducer"

export function ContactsPage() {
    const formRef: any = React.createRef()
    const fetching = useSelector(getFetchingStatus)
    const dispatch = useDispatch()

    function submit(values: any, formikHelpers: any) {
        dispatch(ContactsReducerActions.changeFetchingStatus(true))
        let inputs = formRef.current.querySelectorAll('input')
        formikHelpers.resetForm()
    }

    return(
        <div id={'contacts-wrapper'}>
            <Navigation/>
            <div className={'contacts'}>
                <h1 className={'contacts__title'}>Contacts</h1>
                <div className={'contacts__row'}>
                    <div className={'row__item'}>
                        <img alt={'Avatar'} className={'item__avatar'} src={'/Photographs/Contacts-Page/Avatar-1.jpg'}/>
                        <h3 className={'item__name'}>Alex</h3>
                        <p className={'item__job-title'}>Advertising manager</p>
                        <p className={'item__email'}>alexmanager@gmail.com</p>
                    </div>
                    <div className={'row__item'}>
                        <img alt={'Avatar'} className={'item__avatar'} src={'/Photographs/Contacts-Page/Avatar-2.jpg'}/>
                        <h3 className={'item__name'}>Svetlana</h3>
                        <p className={'item__job-title'}>Social media manager</p>
                        <p className={'item__email'}>svetlanamanager@gmail.com</p>
                    </div>
                    <div className={'row__item'}>
                        <img alt={'Avatar'} className={'item__avatar'} src={'/Photographs/Contacts-Page/Avatar-3.jpg'}/>
                        <h3 className={'item__name'}>Yulia</h3>
                        <p className={'item__job-title'}>Technical manager</p>
                        <p className={'item__email'}>yuliaanager@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className={'map'}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.5294989814759!2d30.51908699635719!3d50.440001725154964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf9ed74622c1%3A0xdb18102d10574eca!2sYabko!5e0!3m2!1sen!2sro!4v1655492397370!5m2!1sen!2sro"></iframe>
            </div>
            <div className={'information'}>
                <div className={'information__address'}>
                    <h1 className={'address__title'}>Address</h1>
                    <p className={'address__txt'}>Velyka Vasylkivska St, 14, Kyiv, Ukraine, 02000</p>
                    <p className={'address__txt'}>Phone number: +38(066-820-54-14)</p>
                    <p className={'address__txt'}>Opening hours: 10:00-18:00</p>
                </div>
                <div className={'information__form'}>
                    <h1 className={'form__title'}>We are in touch</h1>
                    <p className={'form__txt'}>Submit your application and we will contact you</p>
                    <Formik initialValues={{firstName: '', reason: '', phone: '', applicationTxt: ''}} onSubmit={submit}>
                        {({ errors, touched }) => (
                            <Form ref={formRef}>
                                <div className={'form__elements'}>
                                    <div className={'form__inputs'}>
                                        <div className={'error-container'}>
                                            {errors.firstName && touched.firstName ? <p className={'error__txt'}>{errors.firstName}</p> : null}
                                            <Field className={'inputs__txt'} minLength={3} maxLength={20} placeholder={'Your name'} type={'text'} name={'firstName'} validate={nameValidation} />
                                            {errors.firstName}
                                            {errors.firstName && touched.firstName ? <i className="fa-solid fa-circle-exclamation error"></i> : null}
                                        </div>
                                        <div className={'error-container'}>
                                            {errors.reason && touched.reason ? <p className={'error__txt'}>{errors.reason}</p> : null}
                                            <Field className={'inputs__txt'} minLength={5} maxLength={20} placeholder={'Reason of the application'} type={'text'} name={'reason'} validate={reasonValidation} />
                                            {errors.reason && touched.reason ? <i className="fa-solid fa-circle-exclamation error"></i> : null}
                                        </div>
                                        <div className={'error-container'}>
                                            {errors.phone && touched.phone ? <p className={'error__txt'}>{errors.phone}</p> : null}
                                            <Field className={'inputs__txt'} minLength={10} maxLength={13} placeholder={'Your phone number'} type={'text'} name={'phone'} validate={phoneNumberValidator} />
                                            {errors.phone && touched.phone ? <i className="fa-solid fa-circle-exclamation error"></i> : null}
                                        </div>
                                    </div>
                                    <div className={'form__textarea'}>
                                        <div className={'error-container'}>
                                            {errors.applicationTxt && touched.applicationTxt ? <p className={'error__txt'}>{errors.applicationTxt}</p> : null}
                                            <Field minLength={20} maxLength={100} as={'textarea'} className={'inputs__textarea'} placeholder={'Describe your request'} type={'textarea'} name={'applicationTxt'} validate={textareaValidator} />
                                            {errors.applicationTxt && touched.applicationTxt ? <i className="fa-solid fa-circle-exclamation error"></i> : null}
                                        </div>
                                    </div>
                                </div>
                                <p className={'form__txt form__agreemant'}>By clicking the send button you agree to the processing of personal data in accordance with the privacy policy</p>
                                <Field disabled={fetching} type={'submit'} name={'submit'} className={'form__submit'} value={'Send'} />
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

function nameValidation(value: string) {
    if (!value) return 'Field is required'
    if (!/^[a-zA-Z]+$/.test(value)) return 'There is a wrong symbols'
}

function reasonValidation(value: string) {
    if (!value) return 'Field is required'
    let errors;
    if (value) errors = value.match(/[\W_]/g)

    if (errors) {
        for (const error of errors) {
            if (error !== ' ') return 'There is a wrong symbols'
        }
    }
}

function phoneNumberValidator(value: string) {
    if (!value) return 'Field is required'
    if (!/^(\d+)$/.test(value)) return 'There is a wrong symbols'
}

function textareaValidator(value: string) {
    if (!value) return 'Field is required'
}
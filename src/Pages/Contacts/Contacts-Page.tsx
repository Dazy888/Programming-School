import './Styles/Contacts-Page.css'
import './Styles/Contacts-Page-Media.css'
import {Field, Form, Formik} from "formik"
import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {ContactsReducerActions} from "../../Redux/Contacts-Reducer/Contacts-Reducer"
import {getFetchingStatus} from "../../Redux/Contacts-Reducer/Contacts-Selectors"
import IMask from "imask";

export function ContactsPage() {
    const formRef: any = React.createRef()
    const fetching = useSelector(getFetchingStatus)
    const dispatch = useDispatch()

    function submit(values: any, formikHelpers: any) {
        dispatch(ContactsReducerActions.changeFetchingStatus(true))
        formikHelpers.resetForm()
    }

    useEffect(() => {
        let element = formRef.current.querySelector('.phone-input')

        let maskOptions = {
            mask: '+{38}(000)-000-00-00',
            lazy: false
        };

        element.onfocus = () => IMask(element, maskOptions);
    }, [])


    return(
        <div id={'contacts-wrapper'}>
            <div className={'contacts'}>
                <h1 className={'title'}>Contacts</h1>
                <div className={'contacts__row flex-property-set_between'}>
                    <div className={'row__item'}>
                        <img alt={'Avatar'} className={'item__avatar'} src={'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb'}/>
                        <h3 className={'small-title'}>Alex</h3>
                        <p className={'light-grey-txt'}>Advertising manager</p>
                        <p className={'light-grey-txt'}>alexmanager@gmail.com</p>
                    </div>
                    <div className={'row__item'}>
                        <img alt={'Avatar'} className={'item__avatar'} src={'https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?w=2000'}/>
                        <h3 className={'small-title'}>Svetlana</h3>
                        <p className={'light-grey-txt'}>Social media manager</p>
                        <p className={'light-grey-txt'}>svetlanamanager@gmail.com</p>
                    </div>
                    <div className={'row__item'}>
                        <img alt={'Avatar'} className={'item__avatar'} src={'https://images.unsplash.com/photo-1539117332142-bdb5d548d1ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8&w=1000&q=80'}/>
                        <h3 className={'small-title'}>Yulia</h3>
                        <p className={'light-grey-txt'}>Technical manager</p>
                        <p className={'light-grey-txt'}>yuliaanager@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className={'map'}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.5294989814759!2d30.51908699635719!3d50.440001725154964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf9ed74622c1%3A0xdb18102d10574eca!2sYabko!5e0!3m2!1sen!2sro!4v1655492397370!5m2!1sen!2sro"></iframe>
            </div>
            <div className={'information flex-property-set_between'}>
                <div className={'information__address'}>
                    <h1 className={'title'}>Address</h1>
                    <p className={'subtitle'}>Velyka Vasylkivska St, 14, Kyiv, Ukraine, 02000</p>
                    <p className={'subtitle'}>Phone number: +38(066-820-54-14)</p>
                    <p className={'subtitle'}>Opening hours: 10:00-18:00</p>
                </div>
                <div className={'information__form'}>
                    <h1 className={'title'}>We are in touch</h1>
                    <p className={'subtitle'}>Submit your application and we will contact you</p>
                    <Formik initialValues={{firstName: '', reason: '', phone: '', applicationTxt: ''}} onSubmit={submit}>
                        {({ errors, touched }) => (
                            <Form ref={formRef}>
                                <div className={'form__elements flex-property-set_between'}>
                                    <div className={'form__inputs'}>
                                        <div className={'error-container'}>
                                            {errors.firstName && touched.firstName ? <p className={'error__txt'}>{errors.firstName}</p> : null}
                                            <Field className={'inputs__txt subtitle'} minLength={3} maxLength={20} placeholder={'Your name'} type={'text'} name={'firstName'} validate={nameValidation} />
                                            {errors.firstName && touched.firstName ? <i className="fa-solid fa-circle-exclamation error__icon"></i> : null}
                                        </div>
                                        <div className={'error-container'}>
                                            {errors.reason && touched.reason ? <p className={'error__txt'}>{errors.reason}</p> : null}
                                            <Field className={'inputs__txt subtitle'} minLength={5} maxLength={20} placeholder={'Reason of the application'} type={'text'} name={'reason'} validate={reasonValidation} />
                                            {errors.reason && touched.reason ? <i className="fa-solid fa-circle-exclamation error__icon"></i> : null}
                                        </div>
                                        <div className={'error-container'}>
                                            {errors.phone && touched.phone ? <p className={'error__txt'}>{errors.phone}</p> : null}
                                            <Field className={'inputs__txt subtitle phone-input'} minLength={10} maxLength={20} placeholder={'Your phone number'} type={'text'} name={'phone'} validate={phoneNumberValidator} />
                                            {errors.phone && touched.phone ? <i className="fa-solid fa-circle-exclamation error__icon"></i> : null}
                                        </div>
                                    </div>
                                    <div className={'form__textarea'}>
                                        <div className={'error-container'}>
                                            {errors.applicationTxt && touched.applicationTxt ? <p className={'error__txt'}>{errors.applicationTxt}</p> : null}
                                            <Field minLength={20} maxLength={100} as={'textarea'} className={'inputs__textarea subtitle'} placeholder={'Describe your request'} type={'textarea'} name={'applicationTxt'} validate={textareaValidator} />
                                        </div>
                                    </div>
                                </div>
                                <p className={'form__txt form__agreement'}>By clicking the send button you agree to the processing of personal data in accordance with the privacy policy</p>
                                <Field disabled={fetching} type={'submit'} name={'submit'} className={'form__submit subtitle'} value={'Send'} />
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export function nameValidation(value: string) {
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

export function phoneNumberValidator(value: string) {
    if (!value) return 'Field is required'
    if (!/^(\d+)$/.test(value)) return 'There is a wrong symbols'
}

function textareaValidator(value: string) {
    if (!value) return 'Field is required'
}
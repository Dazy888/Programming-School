import './Styles/Teachers.css'
import React from "react"
import {useSelector} from "react-redux"
import {
    getAndroidTeachers,
    getCPlusPlusTeachers, getCSharpTeachers,
    getIosTeachers,
    getJsTeachers,
    getPhpTeachers,
    getPythonTeachers
} from "../../Redux/Teachers-Reducer/Teachers-Selectors"
import { TeachersBigRow } from './Components/TeachersBigRow'
import { TeachersMediumRow } from './Components/TeachersMediumRow'
import { TeachersItem } from './Components/TeachersItem'

export function TeachersPage() {
    function showTeachers(e: any) {
        if (e.target.nextElementSibling.querySelector('.teachers__content_big')) {
            e.target.nextElementSibling.classList.toggle('show-teachers')
            e.target.nextElementSibling.querySelector('div').classList.toggle('show-teachers')

        } else if (e.target.nextElementSibling.querySelector('.teachers__content_medium')) {
            e.target.nextElementSibling.classList.toggle('show-teachers_medium')
            e.target.nextElementSibling.querySelector('div').classList.toggle('show-teachers_medium')
        } else {
            e.target.nextElementSibling.classList.toggle('show-teachers_small')
            e.target.nextElementSibling.querySelector('div').classList.toggle('show-teachers_small')
        }
    }

    const python_teachers = useSelector(getPythonTeachers)
    const android_teachers = useSelector(getAndroidTeachers)
    const ios_teachers = useSelector(getIosTeachers)
    const js_teachers = useSelector(getJsTeachers)
    const c_plus_plus_teachers = useSelector(getCPlusPlusTeachers)
    const php_teachers = useSelector(getPhpTeachers)
    const c_sharp_teachers = useSelector(getCSharpTeachers)

    return (
        <div id={'teachers-wrapper'}>
            <div className={'container'}>
                <h1 className={'title'}>Teachers</h1>
                <p className={'subtitle'}>Lists of teachers are not full</p>
                <TeachersBigRow language={'Python'} avatars={python_teachers.avatars} names={python_teachers.names} surnames={python_teachers.surnames} descriptions={python_teachers.descriptions} handler={showTeachers}/>
                <TeachersBigRow language={'Android'} avatars={android_teachers.avatars} names={android_teachers.names} surnames={android_teachers.surnames} descriptions={android_teachers.descriptions} handler={showTeachers}/>
                <TeachersBigRow language={'IOS'} avatars={ios_teachers.avatars} names={ios_teachers.names} surnames={ios_teachers.surnames} descriptions={ios_teachers.descriptions} handler={showTeachers}/>
                <TeachersMediumRow language={'C++'} avatars={c_plus_plus_teachers.avatars} names={c_plus_plus_teachers.names} surnames={c_plus_plus_teachers.surnames} descriptions={c_plus_plus_teachers.descriptions} handler={showTeachers}/>
                <TeachersMediumRow language={'PHP'} avatars={php_teachers.avatars} names={php_teachers.names} surnames={php_teachers.surnames} descriptions={php_teachers.descriptions} handler={showTeachers}/>
                <div className={'teachers flex-property-set_between'}>
                    <button onClick={showTeachers} className={'teachers__btn'}>C#</button>
                    <div className={'teachers__content-wrapper teachers__content-wrapper_small flex-property-set_center'}>
                        <div className={'teachers__content_small teachers__content flex-property-set_center'}>
                            <TeachersItem img={c_sharp_teachers.avatars[0]} name={c_sharp_teachers.names[0]} surname={c_sharp_teachers.surnames[0]} description={c_sharp_teachers.descriptions[0]}/>
                        </div>
                    </div>
                </div>
                <TeachersBigRow language={'JavaScript'} avatars={js_teachers.avatars} names={js_teachers.names} surnames={js_teachers.surnames} descriptions={js_teachers.descriptions} handler={showTeachers}/>
            </div>
        </div>
    )
}
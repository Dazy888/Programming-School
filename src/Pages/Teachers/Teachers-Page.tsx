import './Styles/Teachers.css'
import React from "react"
import {useSelector} from "react-redux"
import {
    getAndroidTeachers, getCommonTeachers,
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
            e.target.nextElementSibling.classList.toggle('show-teachers')
            e.target.nextElementSibling.querySelector('div').classList.toggle('show-teachers_medium')
        } else {
            e.target.nextElementSibling.classList.toggle('show-teachers')
            e.target.nextElementSibling.querySelector('div').classList.toggle('show-teachers_small')
        }
    }

    const common_teachers = useSelector(getCommonTeachers)

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
                <p className={'subtitle teachers__subtitle'}>Lists of teachers are not full</p>
                <TeachersBigRow language={'Python'} avatars={[...python_teachers.avatars, common_teachers.shulaev.img]} names={[...python_teachers.names, common_teachers.shulaev.name]} surnames={[...python_teachers.surnames, common_teachers.shulaev.surname]} descriptions={[...python_teachers.descriptions, common_teachers.shulaev.description]} handler={showTeachers}/>
                <TeachersBigRow language={'Android'} avatars={[...android_teachers.avatars, common_teachers.ageychenko.img]} names={[...android_teachers.names, common_teachers.ageychenko.name]} surnames={[...android_teachers.surnames, common_teachers.ageychenko.surname]} descriptions={[...android_teachers.descriptions, common_teachers.ageychenko.description]} handler={showTeachers}/>
                <TeachersMediumRow language={'IOS'} avatars={[...ios_teachers.avatars, common_teachers.nikolaev.img, common_teachers.rybakov.img]} names={[...ios_teachers.names, common_teachers.nikolaev.name, common_teachers.rybakov.name]} surnames={[...ios_teachers.surnames, common_teachers.nikolaev.surname, common_teachers.rybakov.surname]} descriptions={[...ios_teachers.descriptions, common_teachers.nikolaev.description, common_teachers.rybakov.description]} handler={showTeachers}/>
                <TeachersMediumRow language={'C++'} avatars={c_plus_plus_teachers.avatars} names={c_plus_plus_teachers.names} surnames={c_plus_plus_teachers.surnames} descriptions={c_plus_plus_teachers.descriptions} handler={showTeachers}/>
                <TeachersMediumRow language={'PHP'} avatars={[...php_teachers.avatars, common_teachers.ignatiev.img, common_teachers.molesku.img]} names={[...php_teachers.names, common_teachers.ignatiev.name, common_teachers.molesku.name]} surnames={[...php_teachers.surnames, common_teachers.ignatiev.surname, common_teachers.molesku.surname]} descriptions={[...php_teachers.descriptions, common_teachers.ignatiev.description, common_teachers.molesku.description]} handler={showTeachers}/>
                <div className={'teachers flex-property-set_between'}>
                    <button onClick={showTeachers} className={'teachers__btn'}>C#</button>
                    <div className={'teachers__content-wrapper teachers__content-wrapper_small flex-property-set_center'}>
                        <div className={'teachers__content_small teachers__content flex-property-set_center'}>
                            <TeachersItem img={c_sharp_teachers.avatars[0]} name={c_sharp_teachers.names[0]} surname={c_sharp_teachers.surnames[0]} description={c_sharp_teachers.descriptions[0]}/>
                        </div>
                    </div>
                </div>
                <TeachersBigRow language={'JavaScript'} avatars={[...js_teachers.avatars, common_teachers.savchenko.img, common_teachers.kornienko.img, common_teachers.vasiyanovich.img, common_teachers.kuznetsov.img]} names={[...js_teachers.names, common_teachers.savchenko.name, common_teachers.kornienko.name, common_teachers.vasiyanovich.name, common_teachers.kuznetsov.name]} surnames={[...js_teachers.surnames, common_teachers.savchenko.surname, common_teachers.kornienko.surname, common_teachers.vasiyanovich.surname, common_teachers.kuznetsov.surname]} descriptions={[...js_teachers.descriptions, common_teachers.savchenko.description, common_teachers.kornienko.description, common_teachers.vasiyanovich.description, common_teachers.kuznetsov.description]} handler={showTeachers}/>
            </div>
        </div>
    )
}
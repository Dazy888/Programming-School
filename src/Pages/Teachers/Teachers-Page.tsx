import './Styles/Teachers.css'
import React from "react"
import {useSelector} from "react-redux";
import {
    getAndroidAvatars,
    getAndroidDescriptions,
    getAndroidNames,
    getAndroidSurnames,
    getCPlusPlusAvatars,
    getCPlusPlusDescriptions,
    getCPlusPlusNames,
    getCPlusPlusSurnames,
    getIosAvatars,
    getIosDescriptions,
    getIosNames,
    getIosSurnames,
    getJavascriptAvatars,
    getJavascriptDescriptions,
    getJavascriptNames,
    getJavascriptSurnames,
    getPhpAvatars, getPhpDescriptions, getPhpNames, getPhpSurnames,
    getPythonAvatars,
    getPythonDescriptions,
    getPythonNames,
    getPythonSurnames
} from "../../Redux/Teachers-Reducer/Teachers-Selectors";

type TeacherItemPropsType = {
    imgUrl: string
    name: string
    surname: string
    text: string
}

function TeacherItem({text,name,surname,imgUrl}: TeacherItemPropsType) {
    return(
        <div className={'content__teacher'}>
            <img alt={'Teacher'} src={imgUrl}/>
            <h2 className={'teacher__name subtitle'}>{name}<br/>{surname}</h2>
            <hr className={'teacher__line'}/>
            <p className={'teacher__txt light-grey-txt'}>{text}</p>
        </div>
    )
}

type TeacherBigRowPropsType = {
    language: string
    avatars: Array<string>
    names: Array<string>
    surnames: Array<string>
    descriptions: Array<string>
    handler: (e: any) => void
}

function TeacherBigRow({language, handler, descriptions, avatars, names, surnames}: TeacherBigRowPropsType) {
    return(
        <div className={'container__item flex-property-set_between'}>
            <button onClick={handler} className={'item__btn'}>{language}</button>
            <div className={'item__content-wrapper'}>
                <div className={'item__content_big item__content flex-property-set_between'}>
                    <TeacherItem imgUrl={avatars[0]} name={names[0]} surname={surnames[0]} text={descriptions[0]}/>
                    <TeacherItem imgUrl={avatars[1]} name={names[1]} surname={surnames[1]} text={descriptions[1]}/>
                    <TeacherItem imgUrl={avatars[2]} name={names[2]} surname={surnames[2]} text={descriptions[2]}/>
                    <TeacherItem imgUrl={avatars[3]} name={names[3]} surname={surnames[3]} text={descriptions[3]}/>
                    <TeacherItem imgUrl={avatars[4]} name={names[4]} surname={surnames[4]} text={descriptions[4]}/>
                </div>
            </div>
        </div>
    )
}

function TeacherMediumRow({language, handler, descriptions, avatars, names, surnames}: TeacherBigRowPropsType) {
    return(
        <div className={'container__item flex-property-set_between'}>
            <button onClick={handler} className={'item__btn'}>{language}</button>
            <div className={'item__content-wrapper'}>
                <div className={'item__content_medium item__content flex-property-set_between'}>
                    <TeacherItem imgUrl={avatars[0]} name={names[0]} surname={surnames[0]} text={descriptions[0]}/>
                    <TeacherItem imgUrl={avatars[1]} name={names[1]} surname={surnames[1]} text={descriptions[1]}/>
                    <TeacherItem imgUrl={avatars[2]} name={names[2]} surname={surnames[2]} text={descriptions[2]}/>
                </div>
            </div>
        </div>
    )
}

export function TeachersPage() {
    function showTeachers(e: any) {
        if (e.target.nextElementSibling.querySelector('.item__content_big')) {
            e.target.nextElementSibling.querySelector('div').classList.toggle('show-teachers')
        } else if(e.target.nextElementSibling.querySelector('.item__content_medium')) {
            e.target.nextElementSibling.querySelector('div').classList.toggle('show-teachers_medium')
        } else {
            e.target.nextElementSibling.querySelector('div').classList.toggle('show-teachers_small')
        }
    }

    // Python
    const pythonAvatars = useSelector(getPythonAvatars)
    const pythonDescriptions = useSelector(getPythonDescriptions)
    const pythonNames = useSelector(getPythonNames)
    const pythonSurnames = useSelector(getPythonSurnames)

    // Android
    const androidAvatars = useSelector(getAndroidAvatars)
    const androidDescriptions = useSelector(getAndroidDescriptions)
    const androidNames = useSelector(getAndroidNames)
    const androidSurnames = useSelector(getAndroidSurnames)

    // IOS
    const iosAvatars = useSelector(getIosAvatars)
    const iosDescriptions = useSelector(getIosDescriptions)
    const iosNames = useSelector(getIosNames)
    const iosSurnames = useSelector(getIosSurnames)

    // Javascript
    const javascriptAvatars = useSelector(getJavascriptAvatars)
    const javascriptDescriptions = useSelector(getJavascriptDescriptions)
    const javascriptNames = useSelector(getJavascriptNames)
    const javascriptSurnames = useSelector(getJavascriptSurnames)

    // C++
    const cPlusPlusAvatars = useSelector(getCPlusPlusAvatars)
    const cPlusPlusDescriptions = useSelector(getCPlusPlusDescriptions)
    const cPlusPlusNames = useSelector(getCPlusPlusNames)
    const cPlusPlusSurnames = useSelector(getCPlusPlusSurnames)

    // PHP
    const phpAvatars = useSelector(getPhpAvatars)
    const phpDescriptions = useSelector(getPhpDescriptions)
    const phpNames = useSelector(getPhpNames)
    const phpSurnames = useSelector(getPhpSurnames)

    return(
        <div id={'teachers-wrapper'}>
            <div className={'container'} >
                <h1 className={'title'}>Teachers</h1>
                <p className={'subtitle'}>Lists of teachers are not full</p>
                <TeacherBigRow language={'Python'} avatars={pythonAvatars} names={pythonNames} surnames={pythonSurnames} descriptions={pythonDescriptions} handler={showTeachers}/>
                <TeacherBigRow language={'Android'} avatars={androidAvatars} names={androidNames} surnames={androidSurnames} descriptions={androidDescriptions} handler={showTeachers}/>
                <TeacherBigRow language={'IOS'} avatars={iosAvatars} names={iosNames} surnames={iosSurnames} descriptions={iosDescriptions} handler={showTeachers}/>
                <TeacherMediumRow language={'C++'} avatars={cPlusPlusAvatars} names={cPlusPlusNames} surnames={cPlusPlusSurnames} descriptions={cPlusPlusDescriptions} handler={showTeachers}/>
                <TeacherMediumRow language={'PHP'} avatars={phpAvatars} names={phpNames} surnames={phpSurnames} descriptions={phpDescriptions} handler={showTeachers}/>
                <div className={'container__item flex-property-set_between'}>
                    <button onClick={showTeachers} className={'item__btn'}>C#</button>
                    <div className={'item__content-wrapper'}>
                        <div className={'item__content'}>
                            <TeacherItem imgUrl={'https://248006.selcdn.ru/LandGen/phone_2d8aec3317a76994cd37ff522fd610a57db5706215792671717877.png'} name={'Sergey'} surname={'Kameneckiy'} text={'Microsoft Certified Developer'}/>
                        </div>
                    </div>
                </div>
                <TeacherBigRow language={'JavaScript'} avatars={javascriptAvatars} names={javascriptNames} surnames={javascriptSurnames} descriptions={javascriptDescriptions} handler={showTeachers}/>
            </div>
        </div>
    )
}
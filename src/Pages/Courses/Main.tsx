import {useNavigate} from "react-router-dom"

type PropsType = {
    title: string
    time: string
    imgUrl: string
    path: string
    className?: string
}

function CourseItem({title, time, imgUrl, path, className = ''}: PropsType) {
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`/courses/${path}`)} className={`column__item flex-property-set_between ${className}`}>
            <div className={'item__text'}>
                <h2 className={'text__title'}>{title}</h2>
                <p className={'text__time'}>{time}</p>
            </div>
            <div className={'item__img'}>
                <img alt={'Python-developer'} src={imgUrl}/>
            </div>
        </div>
    )
}

export function Main() {
    return(
        <div className={'container'}>
            <h1 className={'title'}>Courses</h1>
            <div className={'content flex-property-set_between'}>
                <div className={'content__column'}>
                    <CourseItem path={'python'} title={'Python-developer'} time={'1 year'} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_4589beaf332198133164e04e0fb855c2c1368858.webp'}/>
                    <CourseItem className={'light-purple-back'} path={'java-pro'} title={'Java-developer PRO'} time={'2 years'} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_57c9d80b2b75745579f68b99bdd0e2c0516a955f.webp'}/>
                    <CourseItem className={'purple-back'} path={'web'} title={'Web-developer'} time={'2 years'} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_1483b955a743f9098806cbe6c6d78d306a210b65.webp'}/>
                    <CourseItem className={'light-blue-back'} path={'c++'} title={'C++ developer'} time={'1 year'} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_7d5b8e852952b4fc68ca058c53a3b9570fd4f3d7.webp'}/>
                    <CourseItem className={'pink-back'} path={'python-fullstack'} title={'Python Fullstack-developer'} time={'1 year'} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_43712003895f94c163a288e6e9e0e00bbf671110.webp'}/>
                    <CourseItem className={'light-orange-back'} path={'android'} title={'Android-developer'} time={'22 months'} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_763111395fcf224a8e694cdfbf3bb3d198914536.webp'}/>
                    <CourseItem className={'blue-back'} path={'c-sharp'} title={'C# developer'} time={'1 year'} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_9d6b6453a2e5702f3848771f0bb79eda7566a530.webp'}/>
                    <CourseItem className={'blue-back'} path={'ios'} title={'IOS-developer'} time={'1 year'} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_b0d52a8c5100ff4bb126ca5fc03cd1da32805b9b.webp'}/>
                </div>
                <div className={'content__column'}>
                    <CourseItem className={'light-dark-blue-back'} path={'php-fullstack'} title={'PHP Fullstack-developer'} time={'1 year'} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_62f01151670d0e3f00a7099b2501ac2e043a2314.webp'}/>
                    <CourseItem className={'light-pink-back'} path={'mobile'} title={'Mobile-developer'} time={'2 years'} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_b21b1ae4f5baf79bc47f29ca1ab1ef7ad0d3b615.webp'}/>
                    <CourseItem className={'orange-back'} path={'java'} title={'Java-developer'} time={'9 months'} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_477ae814606ca5e5256c683921f40d2d7f29bad4.webp'}/>
                    <CourseItem className={'grey-back'} path={'frontend-full'} title={'Frontend-developer from zero to PRO'} time={'2 years'} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_af62204878d4eba3a075419b219ff11849d0bbc3.webp'}/>
                    <CourseItem className={'light-green-back'} path={'frontend-pro'} title={'Frontend-developer PRO'} time={'1 year'} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_98a708fd2012f5033663fece150133eac4387673.webp'}/>
                    <CourseItem className={'yellow-back'} path={'javascript-fullstack'} title={'Javascript Fullstack-developer'} time={'1 year'} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_9567df25c360d949e492c6afcb047f9878baa2b3.webp'}/>
                    <CourseItem className={'light-yellow-back'} path={'php-pro'} title={'PHP-developer from zero to PRO'} time={'1 year'} imgUrl={'https://248006.selcdn.ru/LandGen/desktop_ef69df0ff2b047f7d37fea27a790dd8187e4404a.webp'}/>
                </div>
            </div>
        </div>
    )
}
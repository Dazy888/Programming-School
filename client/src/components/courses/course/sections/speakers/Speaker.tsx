import React, { useState } from "react"
import Image from "next/image"
import { useAppSelector } from "@/hooks/redux"
import { v4 } from "uuid"
import styles from '@/styles/Course.module.scss'
import Modal from "react-modal"

Modal.setAppElement('#wrapper')

interface Props {
    fullName: string
    text: string
    index: number
    additionalInfo?: string[]
    imgSrc?: string
}

const customStyles = {
    content: {
        width: '700px',
        padding: '40px 72px',
        background: 'white',
        margin: 'auto',
        borderRadius: '20px',
        overflow: 'auto'
    },
}

const SpeakerComponent: React.FC<Props> = ({ additionalInfo, fullName, text, imgSrc, index }) => {
    const [isModal, setIsModal] = useState(false)
    const openedCourse = useAppSelector(state => state.coursesReducer.openedCourse)

    const openModal = () => {
        const body = document.querySelector('body')
        if (body) body.style.overflow = 'hidden'
        setIsModal(true)
    }

    const closeModal = () => {
        const body = document.querySelector('body')
        if (body) body.style.overflow = 'none'
        setIsModal(false)
    }

    return(
        <>
            <div onClick={openModal} className={`${styles.speaker} p-5 rounded-xl ${!!additionalInfo ? styles['extended'] : ''} relative`}>
                <img className={'rounded-xl object-cover'} alt={"Speaker's photo"} src={`/courses/course/teachers/${imgSrc ? imgSrc : `${openedCourse}/${index}`}.webp`}/>
                <h3 className={'text-xl font-medium mb-1 mt-5'}>{fullName}</h3>
                <p>{text}.</p>
                {additionalInfo && <i className={'fa-solid fa-circle-info text-xl absolute top-2 right-4'} />}
            </div>
            {(additionalInfo) &&
                <Modal style={customStyles} className={'relative'} isOpen={isModal} onRequestClose={closeModal}>
                    <div>
                        <Image width={100} height={100} className={'rounded-xl object-cover'} alt={"Speaker's photo"} src={`/courses/course/teachers/${imgSrc}.webp`}/>
                        <h2 className={'text-3xl font-bold mb-2 mt-9'}>{fullName}</h2>
                        <p className={'text-lg mb-8'}>{text}.</p>
                        {(additionalInfo.length > 1)
                            ?   <ul>
                                    {additionalInfo.map((text) => <li className={'text-lg py-1'} key={v4()}>{text}.</li>)}
                                </ul>
                            :   <p className={'text-lg'}>{additionalInfo[0]}.</p>
                        }
                    </div>
                    <button className={'w-10 h-10 absolute top-5 right-5 rounded-full text-2xl duration-500'} onClick={closeModal}>
                        <i className={'fa-solid fa-xmark'} />
                    </button>
                </Modal>
            }
        </>
    )
}

export const Speaker = React.memo(SpeakerComponent)

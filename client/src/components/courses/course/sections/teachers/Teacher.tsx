import React, { useState } from "react"
import styles from '@/styles/Course.module.scss'
import Modal from 'react-modal'

Modal.setAppElement('#wrapper')

interface Props {
    imgSrc: string
    fullName: string
    text: string
    additionalInf?: string[]
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

const TeacherComponent: React.FC<Props> = ({ additionalInf, fullName, text, imgSrc }) => {
    const [modalIsOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    return(
        <>
            <div onClick={openModal} className={`${styles.teacher} p-5 rounded-xl ${!!additionalInf ? styles['extended'] : ''} relative`}>
                <img className={'rounded-xl'} alt={"Speaker's photo"} src={imgSrc}/>
                <h3 className={'text-xl font-medium mb-1 mt-5'}>{fullName}</h3>
                <p>{text}</p>
                {additionalInf && <i className={'fa-solid fa-circle-info text-xl absolute top-2 right-4'}/>}
            </div>
            {additionalInf &&
                <Modal style={customStyles} className={`${styles.modal} relative`} isOpen={modalIsOpen} onRequestClose={closeModal}>
                    <div>
                        <img className={'rounded-xl'} alt={"Speaker's photo"} src={imgSrc}/>
                        <h2 className={'text-3xl font-bold mb-2 mt-9'}>{fullName}</h2>
                        <p className={'text-lg mb-8'}>{text}</p>
                        {additionalInf.length > 1
                            ?   <ul>
                                    {additionalInf.map((item, key) => <li className={'text-lg'} key={key}>{item}</li>)}
                                </ul>
                            :   <p className={'text-lg'}>{additionalInf[0]}</p>
                        }
                    </div>
                    <button className={'w-10 h-10 absolute top-5 right-5 rounded-full'} onClick={closeModal}>
                        <i className={'fa-solid fa-xmark text-2xl'}/>
                    </button>
                </Modal>
            }
        </>
    )
}

export const Teacher = React.memo(TeacherComponent)

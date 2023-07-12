import React from "react"
import styles from "@/styles/Contacs.module.scss"
import { TitleText } from "@/components/layout/TitleText"
import { Manager } from "@/components/contacts/managers/Manager"

const ManagersComponents = () => (
    <div className={`${styles.managers || ''} text-center`}>
        <TitleText text={'Contacts'}/>
        <div className={`${styles['managers__row'] || ''} grid grid-cols-3 mt-12 mx-auto`}>
            <Manager imgSrc={'alex'} name={'Alex'} occupation={'Advertising'} />
            <Manager imgSrc={'svetlana'} name={'Svetlana'} occupation={'Social media'} />
            <Manager imgSrc={'yulia'} name={'Yulia'} occupation={'Technical manager'} />
        </div>
    </div>
)

export const Managers = React.memo(ManagersComponents)

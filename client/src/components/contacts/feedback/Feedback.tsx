import React from "react"
import styles from "@/styles/Contacs.module.scss"
import { ContactInfo } from "@/components/contacts/feedback/ContactInfo"
import { FormContainer } from "@/components/contacts/form/FormContainer"

const FeedbackComponent = () => {
    return(
        <div className={`${styles.feedback} flex justify-between items-baseline text-white`}>
            <ContactInfo />
            <FormContainer />
        </div>
    )
}

export default React.memo(FeedbackComponent)

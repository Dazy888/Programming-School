import React from "react"

const FooterComponent = () => {
    return(
        <footer className={'flex-center'}>
            <div>
                <p>We use cookies to personalize services and improve the user experience of the site. If you do not agree to their use, please change your browser settings.</p>
            </div>
        </footer>
    )
}

export const Footer = React.memo(FooterComponent)
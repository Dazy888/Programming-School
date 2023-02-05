import React from "react"

const FooterComponent = () => {
    return(
        <footer className={'py-8 text-center mt-12 text-lg text-white px-5'}>
            <p>We use cookies to personalize services and improve the user experience of the site. If you do not agree to their use, please change your browser settings.</p>
        </footer>
    )
}

export const Footer = React.memo(FooterComponent)
import React from "react"

interface Props {
    icon: string
    href: string
}

const LinkComponent: React.FC<Props> = ({ icon, href }) => {
    return(
        <a href={href} className={'flex-center'}>
            <i className={`fa-brands fa-${icon}`}/>
        </a>
    )
}

export const Link = React.memo(LinkComponent)
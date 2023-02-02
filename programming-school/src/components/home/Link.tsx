import React from "react"

interface Props {
    className: string
    href: string
}

const LinkComponent: React.FC<Props> = ({ className, href }) => {
    return(
        <>
            <a href={href} className={'flex-center'}>
                <i className={className}/>
            </a>
        </>
    )
}

export const Link = React.memo(LinkComponent)
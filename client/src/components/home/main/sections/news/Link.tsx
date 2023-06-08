import React from "react"

interface Props {
    icon: string
    href: string
}

const LinkComponent: React.FC<Props> = ({ icon, href }) => (
    <a href={href} className={'flex items-center justify-center rounded-full w-12 h-12'}>
        <i className={`fa-brands fa-${icon} text-xl`}/>
    </a>
)

export const Link = React.memo(LinkComponent)

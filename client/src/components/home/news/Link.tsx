import React from "react"

interface Props {
    icon: string
    href?: string
}

const LinkComponent: React.FC<Props> = ({ icon, href }) => (
    <a href={`https://www.${href || icon}.com`} className={'flex-center rounded-full w-12 h-12 text-xl'}>
        <i className={`fa-brands fa-${icon}`}/>
    </a>
)

export const Link = React.memo(LinkComponent)

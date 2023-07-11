import React from "react"
import Image from "next/image"

interface Props {
    imgPath: string
    imgAlt: string
}

const PartnerLogoComponent: React.FC<Props> = ({ imgPath, imgAlt }) => (
    <div className={'flex-center w-80'}>
        <Image width={200} height={200} alt={imgAlt} src={imgPath} />
    </div>
)

export const PartnerLogo = React.memo(PartnerLogoComponent)

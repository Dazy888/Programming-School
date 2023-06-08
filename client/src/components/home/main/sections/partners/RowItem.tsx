import React from "react"
import Image from "next/image"

interface Props {
    imgPath: string
    imgAlt: string
}

const PartnersItemComponent: React.FC<Props> = ({ imgPath, imgAlt }) => (
    <div className={'flex justify-center items-center w-80 h-36'}>
        <Image width={200} height={100} alt={imgAlt} src={imgPath}/>
    </div>
)

export const RowItem = React.memo(PartnersItemComponent)

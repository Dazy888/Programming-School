import React from "react"
import Image from "next/image"

interface Props {
    imgPath: string
    imgAlt: string
}

const PartnersItemComponent: React.FC<Props> = ({ imgPath, imgAlt }) => {
    return(
        <div className={'flex-center'}>
            <Image width={1000} height={1000} alt={imgAlt} src={imgPath}/>
        </div>
    )
}

export const RowItem = React.memo(PartnersItemComponent)
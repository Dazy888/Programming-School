import React from "react"

interface Props {
    imgPath: string
    imgAlt: string
}

const ParthnersItemComponent: React.FC<Props> = ({ imgPath, imgAlt }) => {
    return(
        <div className={'flex-center'}>
            <img alt={imgAlt} src={imgPath}/>
        </div>
    )
}

export const ParthnersItem = React.memo(ParthnersItemComponent)
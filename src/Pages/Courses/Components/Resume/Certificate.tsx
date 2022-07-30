type CertificatePropsType = {
    img: string
}

export function Certificate({img}: CertificatePropsType) {
    return(
        <div className={'resume__certificate flex-property-set_between'}>
            <div className={'certificate__text'}>
                <h1 className={'title'}>Skillbox Certificate</h1>
                <p className={'small-title'}>Confirm that you have completed the course and become an additional argument when applying for a job</p>
            </div>
            <img alt={'Certificate'} src={img}/>
        </div>
    )
}
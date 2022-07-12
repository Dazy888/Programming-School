export function Note() {
    return(
        <div className={'content__note flex-property-set_between'}>
            <div className={'note__circle flex-property-set_center'}>!</div>
            <div className={'note__text'}>
                <h1 className={'small-title'}>Have you taken any courses yet?</h1>
                <p className={'text'}>Tell the manager about it - you won't have to pay for this course!</p>
            </div>
        </div>
    )
}
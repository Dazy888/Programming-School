import React, { ReactNode } from "react"
import Image from "next/image"
import { NavigationLinks } from "@/components/common/NavigationLinks"

interface Props {
    children: ReactNode
}

const PageFrameLayout: React.FC<Props> = ({ children }) => {
    return(
        <div id={'wrapper'} className={'text-white'}>
            <header className={'flex items-center justify-between py-10 px-20'}>
                <Image height={40} width={40} src={'/common/logo.png'} alt={'Logo'}/>
                <NavigationLinks/>
                <button className={'office-btn w-44 h-11 rounded-full'}>Go to office</button>
            </header>
            <main>
                {children}
            </main>
            <footer className={'py-8 text-center mt-12 text-lg px-5'}>
                <p>We use cookies to personalize services and improve the user experience of the site. If you do not agree to their use, please change your browser settings.</p>
            </footer>
        </div>
    )
}

export const PageFrame = React.memo(PageFrameLayout)

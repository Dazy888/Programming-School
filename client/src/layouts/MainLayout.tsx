import React, { ReactNode } from "react"
import Head from "next/head"
import Image from "next/image"
import { NavLinks } from "@/components/layout/NavLinks"

interface Props {
    children: ReactNode
    title: string
}

const MainLayoutComponent: React.FC<Props> = ({ children, title }) => (
    <>
        <Head>
            <title>{title}</title>
        </Head>
        <div id={'wrapper'} className={'text-white relative'}>
            <header className={'flex items-center justify-between py-10 px-20'}>
                <Image height={40} width={40} src={'/common/logo.webp'} alt={'Logo'}/>
                <NavLinks />
                <button className={'office-btn py-2 px-7 font-medium rounded-full'}>Go to office</button>
            </header>
            <main>
                {children}
            </main>
            <footer className={'py-8 text-center mt-12 text-lg px-5'}>
                <p>We use cookies to personalize services and improve the user experience of the site. If you do not agree to their use, please change your browser settings.</p>
            </footer>
        </div>
    </>
)

export const MainLayout = React.memo(MainLayoutComponent)

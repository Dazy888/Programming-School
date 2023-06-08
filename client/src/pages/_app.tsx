import React from "react"
import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import { store } from "@/store/store"
import { Analytics } from '@vercel/analytics/react'
import '@/styles/reset.scss'
import '@/styles/main.scss'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
    <Provider store={store}>
        <Component {...pageProps} />
        <Analytics />
    </Provider>
)

export default React.memo(App)

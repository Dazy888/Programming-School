import React from "react"
import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import { store } from "@/store/store"
import { Analytics } from '@vercel/analytics/react'
import { ToastContainer } from "react-toastify"
import '@/styles/reset.scss'
import '@/styles/main.scss'
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
    <Provider store={store}>
        <Component {...pageProps} />
        <Analytics />
        <ToastContainer />
    </Provider>
)

export default React.memo(App)

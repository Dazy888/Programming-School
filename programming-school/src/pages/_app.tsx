import React from "react"
import type { AppProps } from 'next/app'
// Styles
import '@/styles/reset.scss'
import '@/styles/main.scss'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default React.memo(App)
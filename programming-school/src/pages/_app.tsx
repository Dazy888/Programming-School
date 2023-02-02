import React from "react"
import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import store from "@/store/store"
// Styles
import '@/styles/reset.scss'
import '@/styles/main.scss'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
}

export default React.memo(App)
import React from "react"
import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
// Styles
import '@/styles/reset.scss'
import '@/styles/main.scss'
// Store
import { store } from "@/store/store"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
}

export default React.memo(App)

import React from "react"
import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="en">
      <Head>
          <link rel={'icon'} href={'/favicon.png'}/>
          <script src="https://kit.fontawesome.com/0a15c952b0.js" crossOrigin="anonymous" data-nscript="afterInteractive"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default React.memo(Document)
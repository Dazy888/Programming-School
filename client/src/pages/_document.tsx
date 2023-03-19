import React from "react"
import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="en">
      <Head>
          <link rel={'icon'} href={'/common/favicon.png'}/>
          <script src="https://kit.fontawesome.com/0a15c952b0.js" crossOrigin="anonymous" data-nscript="afterInteractive"/>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://unpkg.com/imask" type="text/javascript" ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react-modal/3.14.3/react-modal.min.js"
                integrity="sha512-MY2jfK3DBnVzdS2V8MXo5lRtr0mNRroUI9hoLVv2/yL3vrJTam3VzASuKQ96fLEpyYIT4a8o7YgtUs5lPjiLVQ=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer">
        </script>
      </body>
    </Html>
  )
}

export default React.memo(Document)

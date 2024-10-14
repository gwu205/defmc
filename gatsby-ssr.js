import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="gtag-script-loader"
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-R2X13BVJLY"
    />,
    <script
      key="gtag-config"
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R2X13BVJLY');
          `,
      }}
    />,
  ])
}

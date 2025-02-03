import React from 'react'
import Style from './letter.module.css';
import localFont from "next/font/local";

const indie = localFont({
    src: "../IndieFlower-Regular.ttf",
})
const letter = () => {
  return (
      <>
          <body className={indie.className}>
              <main className={Style.letterBody}>
                  <div className={Style.letterContainer}>
                      Will you be my Valentine?
                  </div>
              </main>
          </body>
      </>
  )
}

export default letter

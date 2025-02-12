import React, { useState } from "react";
import localFont from "next/font/local";
import Style from './foods.module.css'
import Places from './places'

const indie = localFont({
    src: "../IndieFlower-Regular.ttf",
})

const foods = () => {
    const [wasClicked, setClicked] = useState(false);
  return (
    <>
          <body className={indie.className}>
              <main className={Style.questionBody}>
                  {wasClicked ?
                      <Places />
                      : <>
                                   <div className={Style.windowGraphics}>
                            <div className={Style.windowsNav}>
                                www.ToAshley.com
                                <img src="/exit.png" className={Style.exit} />
                            </div>
                      <div className={Style.questions}>
                          <img src="/cat5.gif" />
                          Preferred Foods
                      </div>
                      <div className={Style.ImagesContainer}>
                          <div className={Style.OptionsContainer}>
                              <div className={Style.options}>
                                  <img src="/street.jpg" alt="rose" className={Style.flower} />
                              </div>
                              <div className={Style.options}>
                                  <img src="/samg.jpg" alt="rose" className={Style.flower} />
                              </div>
                          </div>
                      
                          <div className={Style.buttonContainer}>
                              <button className={Style.button} onClick={() => setClicked(true)}>Street fuds</button>
                              <button className={Style.button} onClick={() => setClicked(true)}>SamG</button>
                          </div>

                          <div className={Style.OptionsContainer}>
                              <div className={Style.options}>
                                  <img src="/ramen.jpg" alt="rose" className={Style.flower} />
                              </div>
                              <div className={Style.options}>
                                  <img src="/buldak.jpg" alt="rose" className={Style.flower} />
                              </div>
                          </div>
                      
                          <div className={Style.buttonContainer}>
                              <button className={Style.button} onClick={() => setClicked(true)}>Ramen</button>
                              <button className={Style.button} onClick={() => setClicked(true)}>buldak</button>
                          </div>
                          <div className={Style.OptionsContainer}>
                              <div className={Style.options}>
                                  <img src="/mcdo.jpg" alt="rose" className={Style.flower} />
                              </div>
                              <div className={Style.options}>
                                  <img src="/takoyaki.jpg" alt="rose" className={Style.flower} />
                              </div>
                          </div>
                      
                          <div className={Style.buttonContainer}>
                              <button className={Style.button} onClick={() => setClicked(true)}>Mcdo</button>
                              <button className={Style.button} onClick={() => setClicked(true)}>Takoyaki</button>
                          </div>
                          <div className={Style.OptionsContainer}>
                              <div className={Style.options}>
                                  <img src="/ice cream.jpg" alt="rose" className={Style.flower} />
                              </div>
                              <div className={Style.options}>
                                  <img src="/coffee.jpg" alt="rose" className={Style.flower} />
                              </div>
                          </div>
                      
                          <div className={Style.buttonContainer}>
                              <button className={Style.button} onClick={() => setClicked(true)}>ice cream</button>
                              <button className={Style.button} onClick={() => setClicked(true)}>Coffee langs</button>
                          </div>
                          <div className={Style.buttonContainer}>
                              <input placeholder='Others please specify' className={Style.input} type="text"></input>
                              <button type="submit" className={Style.submitButton} onClick={() => setClicked(true)}>Submit</button>
                          </div>
                              </div>
                              </div>
                  </>}
              </main>
          </body>
      </>
  )
}

export default foods

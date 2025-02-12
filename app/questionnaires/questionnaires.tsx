"use clients";
import Style from "./questionnaires.module.css"
import localFont from "next/font/local";
import React, { useState } from "react";
import Foods from "./foods";
const indie = localFont({
    src: "../IndieFlower-Regular.ttf",
})

const questionnaires = () => {
        const [wasClicked, setClicked] = useState(false);
  return (
      <>
          <body className={indie.className}>
              <main className={Style.questionBody}>
                  {wasClicked ?
                      <Foods />
                      : <>
                             <div className={Style.windowGraphics}>
                            <div className={Style.windowsNav}>
                                www.ToAshley.com
                                <img src="/exit.png" className={Style.exit} />
                            </div>
                      <div className={Style.questions}>
                          <img src="/preferred.jpg" />
                          Preferred Flower
                      </div>
                      <div className={Style.ImagesContainer}>
                          <div className={Style.OptionsContainer}>
                              <div className={Style.options}>
                                  <img src="/crochet.jpg" alt="rose" className={Style.flower} />
                              </div>
                              <div className={Style.options}>
                                  <img src="/fresh.jpg" alt="rose" className={Style.flower} />
                              </div>
                          </div>
                      
                          <div className={Style.buttonContainer}>
                              <button className={Style.button} onClick={() => setClicked(true)}>Crochet</button>
                              <button className={Style.button} onClick={() => setClicked(true)}>Fresh</button>
                          </div>

                          <div className={Style.OptionsContainer}>
                              <div className={Style.options}>
                                  <img src="/stars.jpg" alt="rose" className={Style.flower} />
                              </div>
                              <div className={Style.options}>
                                  <img src="/diy.jpg" alt="rose" className={Style.flower} />
                              </div>
                          </div>
                      
                          <div className={Style.buttonContainer}>
                              <button className={Style.button} onClick={() => setClicked(true)}>Stars</button>
                              <button className={Style.button} onClick={() => setClicked(true)}>DIY</button>
                          </div>
                          <div className={Style.OptionsContainer}>
                              <div className={Style.options}>
                                  <img src="/butterfly.jpg" alt="rose" className={Style.flower} />
                              </div>
                              <div className={Style.options}>
                                  <img src="/plushie.jpg" alt="rose" className={Style.flower} />
                              </div>
                          </div>
                      
                          <div className={Style.buttonContainer}>
                              <button className={Style.button} onClick={() => setClicked(true)}>Butterflies</button>
                              <button className={Style.button} onClick={() => setClicked(true)}>Plushies</button>
                          </div>
                          <div className={Style.OptionsContainer}>
                              <div className={Style.options}>
                                  <img src="/Choco.jpg" alt="rose" className={Style.flower} />
                              </div>
                              <div className={Style.options}>
                                  <img src="/shat.jpg" alt="rose" className={Style.flower} />
                              </div>
                          </div>
                      
                          <div className={Style.buttonContainer}>
                              <button className={Style.button} onClick={() => setClicked(true)}>Chocolates</button>
                                  <button className={Style.button} onClick={() => setClicked(true)}>Shat Puno</button>
                                
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

export default questionnaires

"use client";
import Style from './letter.module.css';
import localFont from "next/font/local";
import Questionnaires from "../questionnaires/questionnaires";
import React, { useState } from "react";
import Goodbai from "../questionnaires/goodbai";

interface LetterProps {
  isClicked: boolean; 
}
const indie = localFont({
    src: "../IndieFlower-Regular.ttf",
})

const letter: React.FC<LetterProps> = ({ isClicked }) => {
    const [isYes, setYes] = useState(Number);
    
  return (
      <>
          <body className={indie.className}>
              <main className={Style.letterBody}>
                   <div className={Style.windowGraphics}>
                            <div className={Style.windowsNav}>
                                www.ToAshley.com
                                <img src="/exit.png" className={Style.exit} />
                            </div>
                  {isClicked ? <>     
                          {isYes === 6 ?
                              <Goodbai/>
                              :
                              
                              isYes === 5 ?
                      <Questionnaires/>:
                          isYes === 1 ?
                      <>
                  <img src="/cat2.gif" className={Style.cat1}/>
                  <div className={Style.letterContainer}>
                    Wehhhh? Reallyy? sureee?
                  </div>
                  <div className={Style.buttonContainer}>
                      <button className={Style.yes} onClick={()=>setYes(4)}>
                          Yess!
                      </button>
                      <button className={Style.no} onClick={() => setYes(2)}>
                          Jk onle
                      </button>
                          </div>
                           </>
                      :
                      isYes === 2 ?
                      <>
                  <img src="/cat3.gif" className={Style.cat1}/>
                  <div className={Style.letterContainer}>
                    Why nawttt?
                  </div>
                  <div className={Style.buttonContainer}>
                      <button className={Style.yes} onClick={()=>setYes(1)}>
                          jk, yes ofc   
                      </button>
                      <button className={Style.no} onClick={() => setYes(3)}>
                          reasons..
                      </button>
                          </div>
                          </>
                      :
                      isYes === 3 ?
                      <>
                  <img src="/sad.gif" className={Style.sad}/>
                  <div className={Style.letterContainer}>
                    owkieee
                  </div>
                  <div className={Style.buttonContainer}>
                      <button className={Style.yes} onClick={()=>setYes(1)}>
                          jk onle
                      </button>
                      <button className={Style.no} onClick={() => setYes(6)}>
                          yeaa...
                      </button>
                          </div>
                          </>
                              :
                    isYes === 4 ?
                      <>
                  <img src="/cat4.gif" className={Style.sad}/>
                  <div className={Style.letterContainer1}>
                    Yepeee! pls answer the survey anay hehe
                  </div>
                  <div className={Style.buttonContainer}>
                      <button className={Style.yes} onClick={()=>setYes(5)}>
                          Okieee
                      </button>
                          </div>
                          </>
                                  :
                      <>
                  <img src="/cat1.gif" className={Style.cat1}/>
                  <div className={Style.letterContainerOG}>
                    Will you be my Valentine?
                  </div>
                  <div className={Style.buttonContainer}>
                      <button className={Style.yes} onClick={()=>setYes(1)}>
                          Yes
                      </button>
                      <button className={Style.no} onClick={() => setYes(2)}>
                          No
                      </button>
                          </div>
                     </> 
                          }
                  </> 
                      : <>
                          </>}
                       </div>
              </main>
          </body>
      </>
  )
}

export default letter

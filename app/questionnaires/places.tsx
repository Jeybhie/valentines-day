import React from 'react'
import Style from './places.module.css'
const places = () => {
  return (
    <>
     <div className={Style.windowGraphics}>
                            <div className={Style.windowsNav}>
                                www.ToAshley.com
                                <img src="/exit.png" className={Style.exit} />
        </div>
        <div className={Style.kiss}>
          <img src="/kiss.gif" className={Style.kiss}/>
        </div>
        <p className={Style.happy}>
          That's all thank you!!
       </p>
        <img src="/leaveHeart.gif" className={Style.hearts}></img>
        </div>
    </>
  )
}

export default places


import React, { useState } from "react";
import Style from './places.module.css'
import Default from '../page';
const places = () => {
     const [wasClicked, setClicked] = useState(false);
  return (
    <>{wasClicked ? <Default /> :
      <div className={Style.mainBody}> 
      <div className={Style.windowGraphics}>
        <div className={Style.windowsNav}>
                 www.ToAshley.com
            <img src="/exit.png" className={Style.exit} onClick={()=>setClicked(true)}/>
        </div>
        <div className={Style.kiss}>
          <img src="/kiss.gif" className={Style.kiss}/>
        </div>
        <p className={Style.happy}>
          That's all thank you!!
        </p>
        <img src="/leaveHeart.gif" className={Style.hearts}></img>
        </div>
      </div>
       }
    </>
  )
}

export default places

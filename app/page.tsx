"use client";

import React, { useEffect,useState } from "react";
import Style from "./page.module.css";
import Head from "next/head";
import localFont from "next/font/local";
import Letter from "./letter/letter";
const indie = localFont({
    src: "./IndieFlower-Regular.ttf",
});

const Page = () => {
    const [wasClicked, setClicked] = useState(false);


    useEffect(() => {
        const handleInteraction = () => {
            const audio = new Audio("/mylove.wav");
            audio.play().catch(err => console.log("Autoplay blocked:", err));
            document.removeEventListener("click", handleInteraction);
        };
        document.addEventListener("click", handleInteraction);
        return () => document.removeEventListener("click", handleInteraction);
    }, []);

    return (
        <>
            <Head>
                <title>To Ashley</title>
            </Head>
        
            <body className={Style.Body}>


            <main className={indie.className}>

                <div className={Style.Body}>
                    <div className={Style.floatingHeartContainer}>
                        <img src="/floatingHeart.png" className={Style.floatingHeart1} />
                        <img src="/floatingHeart.png" className={Style.floatingHeart2} />
                        <img src="/floatingHeart.png" className={Style.floatingHeart3} />
                        <img src="/floatingHeart.png" className={Style.floatingHeart4} />
                    </div>

                    <div className={Style.mailContainer} onClick={()=> setClicked(true)}>
                        <div className={Style.MailSide1}></div>
                        <div className={Style.MailSide2}></div>
                        <div className={Style.MailSide3}></div>
                        <div className={Style.MailSide4}></div>
                        <div className={Style.MailSide5}></div>
                        <img src="/heart.png" className={Style.heartImage}/>
                    </div>

                    <div className={Style.textContainer}>
                        Happy Valentine's <br />
                            Day!
                    </div>
                    <div className={Style.forgetMeNotContainer1}>
                        <img src="/forgetMeFlower.png" className={Style.forgetMeFlower}/>
                    </div>
                    <div className={Style.forgetMeNotContainer2}>
                        <img src="/bear.png" className={Style.forgetMeFlower}/>
                    </div>
                    <div className={Style.forgetMeNotContainer3}>
                        <img src="/forgetMeFlower.png" className={Style.forgetMeFlower}/>
                    </div>
                    <img src="/camera.png" className={Style.tulips}/>
                    </div>

                    {wasClicked &&
                        <Letter/>
                        // <div className={Style.BubblesContainer}>
                        //     <img src="/forgetMeFlower.png" className={Style.bubbles} />
                        //     <img src="/forgetMeFlower.png" className={Style.bubbles} />
                        //     <img src="/forgetMeFlower.png" className={Style.bubbles} />
                        //     <img src="/forgetMeFlower.png" className={Style.bubbles} />
                        //     <img src="/forgetMeFlower.png" className={Style.bubbles} />
                        //     <img src="/forgetMeFlower.png" className={Style.bubbles} />
                        //     <img src="/forgetMeFlower.png" className={Style.bubbles} />
                        //     <img src="/forgetMeFlower.png" className={Style.bubbles} />
                            
                        // </div>
                    }

                </main>

                </body>
        </>
    );
};

export default Page;

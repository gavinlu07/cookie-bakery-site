"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineYoutube } from "react-icons/ai";
import { Caveat_Brush } from "next/font/google";
import { Changa_One } from "next/font/google";


const changaOne = Changa_One({
  weight: "400",
  subsets: ["latin"],
});


const caveatBrush = Caveat_Brush({
  weight: "400",
  subsets: ["latin"],
});


const Hero = () => {
  return (
    <section className='pt-24 pb-5 bg-amber-50'>
        <div className="flex flex-col justify-center items-center text-center lg:flex-row">            
            <div className="justify-center items-center text-center pt-5 lg:pt-0 ml-20 mr-20 lg:ml-10 lg:mr-20 lg:max-w-125 lg:text-left md:max-w-150"> 
                <h1 className={`${caveatBrush.className} text-6xl md:text-7xl lg:text-8xl text-black`}>Try Canberra's newest cookies</h1>
                
                <button type="button" 
                title="order now" 
                className={`${changaOne.className} 
                cursor-pointer text-3xl p-2 mt-10 rounded-lg bg-fuchsia-600 text-white`}>Order Now</button>
            </div>
            <div className='items-center max-w-100 md:max-w-100 mr-5 ml-5 lg:max-w-500'>
                <Image
                src="/cookie-image.png"
                alt="Logo"
                width="500"
                height="500"
                className=""
                priority
                />
            </div>
        </div>

        
    </section>
  )
}

export default Hero
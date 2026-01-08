"use client";

import React from 'react'
import Image from 'next/image'
import { Caveat_Brush } from "next/font/google";
import { Changa_One } from "next/font/google";
import Link from "next/link";


const changaOne = Changa_One({
  weight: "400",
  subsets: ["latin"],
});


const caveatBrush = Caveat_Brush({
  weight: "400",
  subsets: ["latin"],
});

const Order = () => {
  return (
    <section className='bg-fuchsia-700 '>
      <div className='flex justify-center items-center'>
        <p className={`${changaOne.className} text-4xl md:text-5xl lg:text-5xl text-white pt-10`}>Build Your Box</p>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center sm:gap-20 gap-0 lg:pt-5 pr-5 pl-5 sm:pb-5'>
        
        <div className='pt-5 pb-2.5 sm:pb-5 sm:pt-0'>
          <Link href="/">
              <div className='border-0 hover:bg-[#CB2985] rounded-2xl cursor-pointer w-max p-2.5'>
                <div className='flex items-center justify-center'>
                  <Image
                  src="/6-pack-image.png"
                  alt="Logo"
                  width="300"
                  height="200"
                  className="rounded-2xl border-2 border-white"
                  priority
                  />
                </div>
                <div className='flex flex-row pt-2 pb-2'> 
                  <div className='w-60'>
                    <p className={`${caveatBrush.className} text-left text-3xl md:text-4xl lg:text-4xl text-white`}>6-Pack Cookies</p>
                  </div>
                  <div className='flex w-15 justify-end text-center'>
                    <p className={`${changaOne.className} text-3xl md:text-4xl lg:text-4xl text-white`}>$5.00</p>
                  </div>
                </div>
                <hr className='border-2 rounded-2x1 text-white'></hr>
                <div>
                  <p className={`w-70 text-1xl text-white pt-2`}>Try every cookie in our 6-Pack — perfect for sharing, gifting, or treating yourself.</p>
                </div>
              </div>
            </Link>
          </div>
        
        <div className='pb-5 sm:pb-0'>
          <Link href="/">
            <div className='border-0 w-max hover:bg-[#CB2985] rounded-2xl cursor-pointer p-2.5'>
              <div className='flex items-center justify-center'>
                <Image
                src="/12-pack-image.png"
                alt="Logo"
                width="300"
                height="200"
                className="rounded-2xl border-2 border-white"
                priority
                />
              </div>
              <div className='flex flex-row pt-2 pb-2'>
                <div className='w-60'>
                  <p className={`${caveatBrush.className} text-left text-4xl md:text-4xl lg:text-4xl text-white`}>12-Pack Cookies</p>
                </div>
                <div className='flex w-15 justify-end text-center'>
                  <p className={`${changaOne.className} text-3xl md:text-4xl lg:text-4xl text-white`}>$9.50</p>
                </div>
              </div>
              <hr className='border-2 rounded-2x1 text-white'></hr>
              <div>
                <p className={`w-70 text-1xl text-white pt-2`}>Get the best value with our 12-Pack, ideal for sharing at parties, events, or catering.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Order
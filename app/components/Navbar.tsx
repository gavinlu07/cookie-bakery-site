"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineYoutube } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  }
  
  return (
    <nav className="absolute top-0 left-0 z-50 bg-transparent w-full h-24 ">
      <div className="flex justify-center items-center h-full px-4 2xl:px-16">
        <div className="flex flex-1">
          <div onClick={handleNav} className="sm:hidden cursor-pointer pl-5 pr-5">
            <AiOutlineMenu size={30} color="black"/>
          </div>
          <div className={
            menuOpen
            ? "fixed left-0 top-0 rounded-r-lg w-[65%] sm:hidden h-screen bg-amber-50 ease-in duration-500"
            : "fixed left-[-100%] h-screen top-0 ease-in duration-500"
            }>
            <div className="flex w-full items-center justify-end">
              <div onClick={handleNav} className="sm:hidden cursor-pointer pt-10 pr-10 pl-10 pb-5">
                <AiOutlineClose size={30} color="black"/>
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              <Image
                src="/bakery-logo-template.svg"
                alt="Logo"
                width="100"
                height="100"
                className=""
                priority
              />
            </div>
            <div className="flex-col py-4">
              <ul>
                <Link href="/">
                  <li onClick={() => setMenuOpen(false)} className="py-3 p-15 cursor-pointer hover:bg-amber-100 text-black text-2xl">
                    Order
                  </li>
                </Link>
                <Link href="/">
                  <li onClick={() => setMenuOpen(false)} className="py-3 p-15 cursor-pointer hover:bg-amber-100 text-black text-2xl">
                    Location
                  </li>
                </Link>
                                <Link href="/">
                  <li onClick={() => setMenuOpen(false)} className="py-3 p-15 cursor-pointer hover:bg-amber-100 text-black text-2xl">
                    Our Story
                  </li>
                </Link>
                <Link href="/">
                  <li onClick={() => setMenuOpen(false)} className="py-3 p-15 cursor-pointer hover:bg-amber-100 text-black text-2xl">
                    Contact Us
                  </li>
                </Link>
              </ul>
            </div>
            <div className="flex flex-row justify-around pt-5 items-center pl-15 pr-15">
              <Link href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <AiOutlineInstagram size={(35)} className="cursor-pointer"/>
              </Link>
              <Link href="/" target="_blank" rel="noopener noreferrer">
                <AiOutlineFacebook size={(35)} className="cursor-pointer"/>
              </Link>
              <Link href="/" target="_blank" rel="noopener noreferrer">
                <AiOutlineYoutube size={(35)} className="cursor-pointer"/>
              </Link>
            </div>
          </div>
          <div className="flex flex-1 justify-end items-center">
            <ul className="hidden sm:flex">
              <Link href="/">
                <li className="mr-10 font-bold">Order</li>
              </Link>
              <Link href="/">
                <li className="mr-10 font-bold">Location</li>
              </Link>
            </ul>
          </div>
        </div>
        <Link href="/">
        <Image
          src="/bakery-logo-template.svg"
          alt="Logo"
          width="75"
          height="75"
          className="cursor-pointer"
          priority
        />
        </Link> 
        <div className="flex flex-1">
          <ul className="hidden sm:flex">
            <Link href="/">
              <li className="ml-10 font-bold hidden md:flex">Our Story</li>
             </Link>
            <Link href="/">
              <li className="ml-10 font-bold">Contact Us</li>
            </Link>
            <Link href="/">
              <li className="ml-10">
                <Image
                  src="/cart-logo.svg"
                  alt="Logo"
                  width="25"
                  height="25"
                  className="cursor-pointer"
                  priority
                />
              </li>
            </Link>
          </ul>
          <div className="flex flex-1 justify-end">
            <Link href="/">
              <div className="sm:hidden pr-5 pl-5">
                <Image
                  src="/cart-logo.svg"
                  alt="Logo"
                  width="30"
                  height="30"
                  className="cursor-pointer"
                  priority
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
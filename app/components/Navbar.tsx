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
    <nav className="w-full h-24 shadow-xl ">
      <div className="flex justify-center items-center h-full px-4 2xl:px-16">
        <div className="flex flex-1">
          <div onClick={handleNav} className="sm:hidden cursor-pointer pl-5 pr-5">
            <AiOutlineMenu size={30}/>
          </div>
          <div className={
            menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-amber-50 ease-in duration-500"
            : "fixed left-full h-screen top-0 ease-in duration-500"
            }>
            <div className="flex w-full items-center justify-end pr-10 pt-10">
              <div onClick={handleNav} className="sm:hidden cursor-pointer">
                <AiOutlineClose size={30}/>
              </div>
            </div>
            <div className="flex w-full items-center justify-center pt-5">
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
                  <li onClick={() => setMenuOpen(false)} className="py-4 p-15 cursor-pointer hover:bg-amber-100">
                    Order
                  </li>
                </Link>
                <Link href="/">
                  <li onClick={() => setMenuOpen(false)} className="py-4 p-15 cursor-pointer hover:bg-amber-100">
                    Location
                  </li>
                </Link>
                                <Link href="/">
                  <li onClick={() => setMenuOpen(false)} className="py-4 p-15 cursor-pointer hover:bg-amber-100">
                    Our Story
                  </li>
                </Link>
                <Link href="/">
                  <li onClick={() => setMenuOpen(false)} className="py-4 p-15 cursor-pointer hover:bg-amber-100">
                    Contact Us
                  </li>
                </Link>
              </ul>
            </div>
            <div className="flex flex-row justify-around pt-5 items-center pl-15 pr-15">
              <Link href="/">
                <AiOutlineInstagram size={(35)} className="cursor-pointer"/>
              </Link>
              <Link href="/">
                <AiOutlineFacebook size={(35)} className="cursor-pointer"/>
              </Link>
              <Link href="/">
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
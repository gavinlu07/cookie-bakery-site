"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  }
  
  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white">
      <div className="flex justify-center items-center h-full px-4 2xl:px-16">
        <div className="flex flex-1">
          <div onClick={handleNav} className="sm:hidden cursor-pointer pl-5 pr-5">
            <FiMenu size={30}/>
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
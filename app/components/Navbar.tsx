"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import LogoA from "../../public/assets/Logo.jpg";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";


const navLinks = [
    {name:  "HOME", href:"/"},
    {name: "ABOUT US", href:"/about"},
    {name: "OUR PEOPLE", href:"/people"},
    {name: "OUR BUSINESS", href:"/business"},
    {name: "PORTFOLIO", href:"/portfolio"}
]

export function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }
    return(
        <nav className="flex w-full items-center justify-between py-[1px] fixed top-0 shadow-md bg-[#F7F7F7] lg:px-6">
            <div className="flex items-center">
                <Image src={LogoA} alt="Logo" className="object-contain max-h-16 w-48"/>
                <div className="hidden lg:flex pl-[512px] gap-x-[56px]">
                    {navLinks.map((item, index) => (
                        <Link className="text-[#18A9EC] font-medium" href={item.href} key={index}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex gap-x-5">
                <p className="hidden lg:block font-medium text-[#18A9EC]">CONTACT US</p>
                <div className="flex items-center gap-x-2 px-2 lg:hidden" onClick={handleNav}>
                    <AiOutlineMenu size={25} />               
                </div>
            </div>
            <div className={menuOpen ? "fixed left-0 top-0 w-[65%] sm:hidden md:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>

                <div className="flex w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={25}/>
                    </div>
                </div>
                <div className="flex-col py-4">
                    {navLinks.map((item, index) => (
                        <Link className="text-[#18A9EC] flex py-2 font-medium" href={item.href} key={index}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}
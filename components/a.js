import Image from "next/image";
import Link from "next/link";
import { MdOutlineCandlestickChart } from "react-icons/md";
import { AiOutlineBarChart, AiOutlineHome, AiOutlineMenuFold, AiOutlineSearch } from "react-icons/ai";
import { FaRegNewspaper } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Navbar = () => {
    const [open,setOpen]=useState(true)
    const toogleBar=()=>{
        setOpen(!open)
    }
    return (
        <div >

            <header className="  flex shadow-md justify-between mr-1 ">
                <span className="flex">
                    <Image src={'/logo.jpg'} width={77} height={44} alt='logo' className="rounded-full" />
                    <Link href={'/'} className='space-x-4'><h1 className="mt-5 text-blue-500 font-serif font-semibold text-md"> <span className="text-red-500">ABSTRACT</span>    CRYPTO</h1></Link>
                </span>

                <menu>
                    <AiOutlineMenuFold 
                    onClick={toogleBar}
                    className="text-5xl mt-2" />
                </menu>

                <nav className={`${open ? '':'hidden'}z-500 absolute top-0 right-0 
                bg-black ${open}  pe-20 ps-7 py-16 text-2xl h-full
                 text-gray-300 hover:font-bold `}>
                    <nav className="flex flex-col justify-start space-y-5 " >

                        <Link href="/" className="flex space-x-2  hover:shadow-md hover:font-bold hover:bg-blue-700 p-2 transition-all duration-100 hover:rounded-full hover:text-gray-100">
                            <div ><AiOutlineHome className="text-4xl " /></div>
                            <h1>Home</h1></Link>

                        <Link href="/" className="flex space-x-2">
                            <div ><FaRegNewspaper className="text-4xl " /></div>
                            <h1>News</h1></Link>


                        <Link href="/" className="flex space-x-2">
                            <div > <MdOutlineCandlestickChart className="text-4xl " /></div>
                            <h1>Chart</h1></Link>

                        <Link href="/Search" className="flex space-x-2">
                            <div ><AiOutlineSearch className="text-4xl " /></div>
                            <h1>Search</h1></Link>


                        <Link href="/">Buy Crypto</Link>
                        <Link href="/">Sell Crypto</Link>
                    </nav>

                </nav>

            </header>


        </div>
    );
}

export default Navbar;
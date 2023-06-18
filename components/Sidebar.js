import Link from "next/link";
import { useState } from "react";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { FaAlignJustify, FaRegNewspaper } from "react-icons/fa";
import { MdOutlineCandlestickChart } from "react-icons/md";
const Sidebar = () => {

    const [open,setOpen]=useState()

    return (
        <div>
            <nav className="z-500 absolute top-0 right-0 
                bg-black  pe-20 ps-7 py-16 text-2xl h-full
                 text-gray-300 hover:font-bold ">
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
        </div>
    );
}

export default Sidebar;
import Image from "next/image";
import Link from "next/link";
import { CiSettings } from "react-icons/ci";
import { MdOutlineCandlestickChart } from "react-icons/md";
import { AiOutlineHome, AiOutlineMenuFold, AiOutlineMenuUnfold, AiOutlineSearch } from "react-icons/ai";
import { FaRegNewspaper } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {

    const [open, Setopen] = useState('hidden');
    const toggleOpen = () => {
        if (open) {
            Setopen(!open)
        } else {
            Setopen('hidden')
        }
    }

    const iconSize = 'text-3xl'
    return (
        <div >

            <header className="flex py-3 mb-2 shadow-md justify-between p-0">
                <span className="flex">
                    <Image src={'/logo.jpg'} width={50} height={44} alt='logo' className="rounded-full" />
                    <Link href={'/'} className='space-x-4'><h1 className="mt-2 text-blue-500 font-serif font-semibold text-md"> <span className="text-red-500">ABSTRACT</span>    CRYPTO</h1></Link>
                </span>

                <menu>
                    <AiOutlineMenuFold

                        onClick={toggleOpen}
                        className={`${iconSize}  mt-2`} />
                </menu>
                <nav className={`${open} z-50 absolute top-0 right-0 
                bg-white   pe-10 ps-7 py-16 w-1/2 text-2xl h-full
                 text-gray-900  `}>
                    <AiOutlineMenuUnfold
                        onClick={toggleOpen}
                        className={`text-3xl ${open}  relative bottom-10 right-2`} />

                    <nav className="flex flex-col justify-start space-y-5 overflow-y-auto mt-12 " >

                        <Link href="/" className="flex space-x-2  hover:shadow-md  hover:bg-blue-700  transition-all duration-100 hover:rounded-full hover:text-gray-100">
                            <div ><AiOutlineHome className="text-2xl " /></div>
                            <h1>Home</h1></Link>

                        <Link href="/News" className="flex space-x-2  hover:shadow-md  hover:bg-blue-700  transition-all duration-100 hover:rounded-full hover:text-gray-100">
                            <div ><FaRegNewspaper className="text-2xl " /></div>
                            <h1>News</h1></Link>


                        <Link href="/" className="flex space-x-2  hover:shadow-md  hover:bg-blue-700  transition-all duration-100 hover:rounded-full hover:text-gray-100">
                            <div > <MdOutlineCandlestickChart className="text-2xl " /></div>
                            <h1>Chart</h1></Link>

                        <Link href="/Search" className="flex space-x-2  hover:shadow-md  hover:bg-blue-700  transition-all duration-100 hover:rounded-full hover:text-gray-100">
                            <div ><AiOutlineSearch className="text-2xl " /></div>
                            <h1>Search</h1></Link>


                        <Link href="/">Buy Crypto</Link>
                        <Link href="/">Sell Crypto</Link>


                        <Link href="/Search" className="flex space-x-2  hover:shadow-md  hover:bg-blue-700  transition-all duration-100  hover:text-gray-100">
                            <div ><CiSettings className="text-2xl " /></div>
                            <h1>Settings</h1></Link>

                    </nav>

                </nav>

            </header>


        </div>
    );
}

export default Navbar;
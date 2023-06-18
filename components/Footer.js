import Link from "next/link";
import { AiOutlineBarChart, AiOutlineHome, AiOutlineSearch, AiOutlineWallet } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { FaRegNewspaper } from "react-icons/fa";
import { MdOutlineCandlestickChart } from "react-icons/md";

const Footer = () => {
    return (
        <div className="flex border-t-8 py-3 justify-around mb-0 fixed bottom-0 w-full bg-white">
            <Link href={'/'}><AiOutlineHome className="text-4xl border-r-4 " /></Link>
            <FaRegNewspaper className="text-4xl border-r-4 " />
            <MdOutlineCandlestickChart className="text-4xl border-r-4 " />
            <Link href={'/Search'}><AiOutlineSearch className="text-4xl border-r-4" /></Link>
            <AiOutlineWallet className="text-4xl border-r-4" />
            <Link href={'/Search'}>  <CiSettings className="text-4xl border-r-4" /></Link>
        </div>
    );
}

export default Footer;
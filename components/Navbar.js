import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div>

            <header className="flex shadow-md justify-between mr-1 ">
                <span>
                    <Image src={'/logo.jpg'} width={77} height={44} alt='logo' />

                </span>
                <Link href={'/'} className='space-x-4'><h1 className="mt-5 text-blue-500 font-serif font-semibold text-md"> <span className="text-red-500">ABSTRACT</span>    CRYPTO</h1></Link>
                <nav className="flex mt-5 space-x-4">
                    <Link className="hover:text-red-500 hover:underline" href={'/'}>Home</Link>
                    <Link className="hover:text-red-500 hover:underline" href={'/News'}>News</Link>
                    <Link className="hover:text-red-500 hover:underline" href={'/Blog'}>Blog</Link>
                    <Link className="hover:text-red-500 hover:underline" href={'/Chart'} >Chart</Link>

                </nav>
            </header>


        </div>
    );
}

export default Navbar;
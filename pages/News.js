import Link from "next/link";

const News = () => {
    return (
        <div>
    
            <header className="bg-blue-500 p-4 text-white">
                <div className="flex justify-between font-serif text-lg font-extrabold">
                    <Link href={'/'}>Home</Link>
                
                    <Link href={'/Chart'}>Chart</Link>
                </div>
                <hr className="w-full mb-4 mt-2"></hr>
                <nav className="flex justify-center space-x-4">
                    <h1 className=" cursor-pointer">Trending News</h1>
                    <h1 className=" cursor-pointer">Bitcoin News</h1>
                </nav>
            </header>
        </div>
    );
}

export default News;
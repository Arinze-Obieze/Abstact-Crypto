import Link from "next/link";

const Footer = () => {
    return (
        <div>
                    <div className="bg-gray-100 mt-4">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 Abstract Crypto —
                <Link href="https://twitter.com/arinzeobieze" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">twitter @arinzeobieze</Link>
            </p>

        </div>
    </div>
        </div>
    );
}

export default Footer;
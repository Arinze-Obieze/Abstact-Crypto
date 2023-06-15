import { useEffect, useState } from "react";

const CACHE_KEY = "coinlist";
const CACHE_EXPIRATION = 24 * 60 * 60 * 1000; // Cache expiration time (24 hours in milliseconds)

const Search = () => {
    const [query, setQuery] = useState("");
    const [coinlist, setCoinlist] = useState([]);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(20);

    useEffect(() => {
        const fetchData = async () => {
            // Check if data exists in local storage/cache
            const cachedData = localStorage.getItem("coinlist");
            const cachedTimestamp = localStorage.getItem(`${CACHE_KEY}_timestamp`);
            const currentTime = new Date().getTime();

            if (cachedData && cachedTimestamp) {
                if (currentTime - cachedTimestamp <= CACHE_EXPIRATION) {
                    setCoinlist(JSON.parse(cachedData));
                }
            } else {
                const url = `https://coingecko.p.rapidapi.com/coins/list?include_platform=false&per_page=250`;
                const options = {
                    method: "GET",
                    headers: {
                        "X-RapidAPI-Key": process.env.X_RapidAPI_Key,
                        "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
                    },
                };
                try {
                    let res = await fetch(url, options);
                    const data = await res.json();
                    console.log(data);
                    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
                    localStorage.setItem(`${CACHE_KEY}_timestamp`, currentTime.toString());
                    setCoinlist(data);
                } catch (err) {
                    console.log(err);
                }
            }
        };
        fetchData();
    }, []);

    const nextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const previousPage = () => {
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
        }
    };

    const handleSearch = (e) => {
        setQuery(e.target.value);
        setPage(1); // Reset page number when searching
    };

    // Calculate the start and end indices for pagination
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedCoinlist = coinlist.slice(startIndex, endIndex);

    // Check if data returned is an array
    if (!Array.isArray(paginatedCoinlist)) {
        return <div> Loading ..</div>; // Or show a loading state or an error message
    }

    return (
        <div >
            <section className="text-white text-xl bg-gradient-to-r from-blue-950 to-blue-600 ">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <p className="mb-8 leading-relaxed">
                            Navigate the world of crypto with Abstract Crypto. Get real-time updates on crypto prices, trends, and more.
                        </p>
                        <div className="flex w-full md:justify-start justify-center items-end">
                            <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                                <input
                                    type="text"
                                    id="hero-field"
                                    className="w-full bg-white rounded border bg-opacity-50 border-white focus:ring-2 focus:ring-red-200 focus:bg-white focus:border-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    value={query}
                                    onChange={handleSearch}
                                />
                            </div>
                            <button
                                className="inline-flex 
                            text-white border-2 
                            border-red-500 py-2 px-6 focus:outline-none 
                            hover:bg-red-600 rounded text-lg font-semibold">
                                Search
                            </button>
                        </div>
                        <p className="mt-2 text-base text-red-500">Discover over 1,000+ of Cryptocurrencies</p>
                        <div Name="flex lg:flex-row md:flex-col"></div>
                    </div>
                </div>
            </section>

            {/**dropdown menu */}
            <div className="border-2 border-blue-500 mt-2 ">

                <div>
                    <select className="m-2 py-4 px-4 outline-none font-serif text-lg font-semibold"
                        name="Category" id="crypto">
                        <option className="outline-none">Market Cap</option>
                        <option>Name</option>
                        <option>hjhjh</option>
                    </select>
                </div>
            </div>


            <div className="mt-2">
                {/**Coin Display */}
                {paginatedCoinlist.map((coin) => (
                    <div key={coin.id}>
                        <div className="ml-3 border-l-2 mt-3 border-t-2 border-b-2
                         border-l-blue-500 py-3 px-2 ">
                            <h1>Symbol: {coin.symbol}</h1>
                            <h1 className="text-blue-500">Name: {coin.name}</h1>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pagination flex justify-around mt-4">
                <button className="border-1 border-red-500 rounded-md px-2 py-2 bg-blue-500"
                    onClick={previousPage} disabled={page === 1}>
                    Previous
                </button>
                <button className="border-1 border-red-500 rounded-md px-5 py-2 bg-blue-500"
                    onClick={nextPage}>Next</button>
            </div>
        </div>
    );
};

export default Search;

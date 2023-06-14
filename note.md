import { useEffect, useState } from "react"

const CACHE_KEY = "coinlist";
const CACHE_EXPIRATION = 24 * 60 * 60 * 1000; // Cache expiration time (24 hours in milliseconds)

const Search = () => {
    const [query, setQuery] = useState('')
    const [coinlist, setCoinlist] = useState([])
    const [page, setPage] = useState(1)
    const [perPage, setperPage] = useState(10)

    useEffect(() => {
        const FetchData = async () => {
            // Check if data exists in localstorage/cache
            const cachedData = localStorage.getItem('coinlist')
            const cachedTimestamp = localStorage.getItem(`${CACHE_KEY}_timestamp`);
            const currentTime = new Date().getTime()

            if (cachedData && cachedTimestamp) {
                if (currentTime - cachedTimestamp <= CACHE_EXPIRATION) {
                    setCoinlist(JSON.parse(cachedData));
                }
            } else {



                const url = `https://coingecko.p.rapidapi.com/coins/list?page=${page}&per_page=${perPage}`
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '14e2617be1msh3c78f8e9c1f46e1p152996jsn972a5e39f901',
                        'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
                    },
                };
                try {
                    let res = await fetch(url, options)
                    const data = await res.json()
                    console.log(data)
                    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
                    localStorage.setItem(`${CACHE_KEY}_timestamp`, currentTime.toString());
                    setCoinlist(data)
                } catch (err) {
                    console.log(err)
                }
            }
        };
        FetchData()
    }, [page, perPage]);

    const nextPage = () => {
        setPage(page + 1)
    }
    const previousPage = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    const handleSearch = (e) => {
        e.target.value
    }

    // Check if data returned is an array
    if (!Array.isArray(coinlist)) {
        return <div> Loading ..</div> // Or show a loading state or an error message
    };

    return (
        <div className=" ">
            <section className="text-white text-xl bg-gradient-to-r from-blue-950 to-blue-600 ">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <p className="mb-8 leading-relaxed">Navigate the world of crypto with Abstract Crypto. Get real-time updates on crypto prices, trends, and more.</p>
                        <div className="flex w-full md:justify-start justify-center items-end">
                            <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">

                                <input
                                    type="text"
                                    id="hero-field"
                                    className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-red-200 focus:bg-transparent focus:border-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <button
                                className="inline-flex text-white
                              border-2 border-red-500 py-2 px-6 
                              focus:outline-none hover:bg-red-600 
                              rounded text-lg font-semibold">Search</button>
                        </div>
                        <p className="mt-2 text-base text-red-500">Discover over 1,000+ of Cryptocurrencies</p>
                        <div Name="flex lg:flex-row md:flex-col">



                        </div>
                    </div>

                </div>
            </section>

            <div>
                {/**Coin Display */}
                {coinlist.map((coin) => (
                    <div key={coin.id}>
                        <h1 className="shadow-md">{coin.name}</h1>
                    </div>
                ))}
            </div>

            <div className="pagination">
                <button onClick={previousPage} disabled={page === 1}>previous </button>
                <button onClick={nextPage}>Next</button>
            </div>

        </div>

    );
}

export default Search;
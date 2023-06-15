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
                        "X-RapidAPI-Key": '14e2617be1msh3c78f8e9c1f46e1p152996jsn972a5e39f901'
                        ,
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


    return (
        <div >
          

            {/**dropdown menu */}
            <div className="border-2 border-blue-500 mt-2 ">

                <div>
                    <select className="m-2 py-4 px-4 outline-none font-serif text-lg font-semibold"
                        name="Category" id="crypto">
                        <option className="outline-none">Market Cap</option>
                        <option>Name</option>
                    </select>
                </div>
            </div>


            <div className="mt-2">
                {/**Coin Display */}
                { paginatedCoinlist.map((coin) => (
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

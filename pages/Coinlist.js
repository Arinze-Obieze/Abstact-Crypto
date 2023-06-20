import { BiTrendingDown, BiTrendingUp } from "react-icons/bi";
import Image from "next/image";
import { useEffect, useState } from "react";
import Coin from "@/components/Coin";

const Coinlist = () => {
    const [coinlist, setCoinlist] = useState([]);
    const [page, setPage] = useState(1);
    const [perpage, setPerpage] = useState(20);

    useEffect(() => {
        const fetchCoins = async () => {
            const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perpage}&page=${page}&sparkline=false&price_change_percentage=24h&locale=en`;

            try {
                const response = await fetch(url);
                const coins = await response.json();
                console.log(coins);
                setCoinlist(coins);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCoins();
    }, [page, perpage]);

    const nextPage = () => {
        setPage(page + 1);
    };

    const previousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    // Calculate the current page of coins
    const indexOfLastpage = page * perpage;
    const indexOffirstpage = indexOfLastpage - perpage;
    const currentpage = coinlist.slice(indexOffirstpage, indexOfLastpage);

    return (
        <div className="overflow-x-hidden">
            <nav className="p-5 border-4 space-x-5 font-semibold font-serif text-2xl text-black flex justify-center mt-4">
Sort By Market Cap
            </nav>
            <div className="flex justify-around">
                <h className="flex gap-2">
                    <option value="name">Name</option>
                </h>
                <h1>% in 24h</h1>
                <h1>Price</h1>
            </div>
            <div>
                {currentpage.map((coin) => (
                    <Coin key={coin.id} coin={coin} />
                ))}
            </div>


        </div>
    );
};

export default Coinlist;

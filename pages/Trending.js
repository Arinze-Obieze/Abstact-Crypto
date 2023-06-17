import Image from "next/image";
import { useEffect, useState } from "react";

const Trending = () => {
    const [tcoin, setTcoin] = useState(null);

    useEffect(() => {
        const fetchTrendingCoins = async () => {
            try {
                const res = await fetch(
                    "https://api.coingecko.com/api/v3/search/trending"
                );
                const data = await res.json();
                setTcoin(data.coins);
            } catch (err) {
                console.log(err);
            }
        };

        fetchTrendingCoins();
    }, []);

    return (
        <div>
        <h1 className="flex justify-center m-6 font-serif font-semibold text-2xl"> Trending Cryptos</h1>
        <div className="flex overflow-x-auto bg-gray-100 text-white">
            {tcoin &&
                tcoin.map((coin) => {
                    const { name, symbol, market_cap_rank, large,price_btc } = coin.item;
                    return (
                        <div key={coin.item.id} className="flex-shrink-0 w-60 border-2 m-2 p-2 bg-blue-950">
                            <Image  width={100} height={100} className="w-24 h-24 mx-auto rounded-full" src={large} alt={name} />
                            <div className="flex flex-col mx-auto">
                                <div className="font-bold">{name}</div>
                                <div className="text-gray-400">Symbol: {symbol}</div>
                                <div className="text-gray-400">Market Cap Rank: {market_cap_rank}</div>
                            <div className="flex">
                            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="bitcoin"><path fill="#6563ff" d="M16.313 11.24A3.998 3.998 0 0 0 13 5V4a1 1 0 0 0-2 0v1H9V4a1 1 0 0 0-2 0v1H6a1 1 0 0 0 0 2h1v10H6a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 2 0v-1h2a3.99 3.99 0 0 0 1.313-7.76ZM15 9a2.002 2.002 0 0 1-2 2H9V7h4a2.002 2.002 0 0 1 2 2Zm0 8H9v-4h6a2 2 0 0 1 0 4Z"></path></svg>
                            {price_btc.toFixed(6)}</div>
                            </div>
                        </div>
                    );
                })}
        </div>

</div>
    );
};

export default Trending;

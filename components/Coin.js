import { BiTrendingDown, BiTrendingUp } from "react-icons/bi";
import Image from "next/image";

const Coin = ({ coin }) => {
    return (
        <div key={coin.id}>
            <div className="flex items-center ml-2 mr-1 p-4 border-2 mt-2 shadow-md">
                <h1 className="mr-2">{coin.market_cap_rank}.</h1>
                <Image width={20} height={20} src={coin.image} alt="coin_image" />
                <span className="flex text-md ml-1 
                whitespace-nowrap">{coin.name}</span>
                <div className="flex justify-between w-full">
                    <h1 className="text-gray-400 ml-2">({coin.symbol})</h1>
                    {coin.market_cap_change_percentage_24h >= 0 ? (
                        <div className="text-green-500 flex gap-1">
                            {coin.market_cap_change_percentage_24h.toFixed(2)}%
                            <BiTrendingUp />
                        </div>
                    ) : (
                        <div className="text-red-500 flex gap-1">
                            {coin.market_cap_change_percentage_24h.toFixed(2)}%
                            <BiTrendingDown />
                        </div>
                    )}
                    <h1 className="text-gray-700">${coin.current_price.toFixed(1)}</h1>
                </div>
            </div>
        </div>


    );
};

export default Coin;

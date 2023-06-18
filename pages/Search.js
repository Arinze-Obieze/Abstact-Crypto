/* eslint-disable @next/next/no-img-element */
import Coin from "@/components/Coin";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Coinlist from "./Coinlist";

const Search = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState(null);
    const searchData = async () => {
        const url = `https://api.coingecko.com/api/v3/search?query=${query}`;
        try {
            let res = await fetch(url);
            let data = await res.json();
            setData(data);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleInput = (e) => {
        let search = e.target.value;
        setQuery(search);
        search = ''
    };

    return (
        <div>
        <div>
         <div className="flex bg-blue-600 py-5 space-x-4">
         <input
                className="rounded-full p-2 w-full ml-2"
                onChange={(e) => {
                    handleInput(e)
                    searchData(e)
                }}
                type="text"
            />
            <AiOutlineSearch className="text-4xl"
                onClick={searchData}
            >
                Search
            </AiOutlineSearch>
         </div>
            <div>
                
                {/**Search result */}
                {data ? data.coins.map((coin) => (
                    <div key={coin.id} className='flex gap-2 ml-3 mt-3 p-2'>
                        <img src={coin.thumb} alt='coin_image' />
                        <div>{coin.name}</div>
                    </div>

                )) :
                    <div><Coinlist/></div>
                }
                <>
              
                </>
            </div>
</div>
        
        
        </div>
    );
}

export default Search;

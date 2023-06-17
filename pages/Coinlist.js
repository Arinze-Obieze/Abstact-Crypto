import { BiTrendingDown, BiTrendingUp } from "react-icons/bi";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const Coinlist = () => {
    const [coinlist, setCoinlist] = useState([])

    const [perpage, setPerpage] = useState(100)
    const [page, setPage] =  useState(1)
const [pricchange,setPricechange]=useState(`24`)

    const Fetchcoins = async () => {
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h&locale=en`

        try {
            const data = await fetch(url)
            let coins = await data.json()
            console.log(coins)
            setCoinlist(coins)
        } catch (err) {
            console.log(err)
        } finally {
            return <div>Loading ..</div>
        }
    }

    useEffect(() => {
        Fetchcoins()

    }, [])

    return (
        <div>
            {/**dropdown */}
            <nav className="p-5 border-4 space-x-5 font-semibold 
font-serif text-2xl text-red-500 flex 
justify-center mt-4">

                <select>
                    <option value="">Trending</option>
                    <option value="">Market Cap</option>

                </select>

            </nav>

            <div>

                {coinlist && coinlist.map((coin) => (
                    <div key={coin.id} >
                        <div className='flex ml-2 mr-1 p-4 border-2 mt-5 shadow-md'>                        <h1
                            className="mr-2">{coin.market_cap_rank}.</h1>
                            <Image
                                className="mr-2" width={40} height={30} src={coin.image} alt='coin_image' />
                            <span className='flex flex-grow' >{coin.name}</span>
                            <div className="flex  justify-between  w-full ">
                                <h1 className="text-gray-400">({coin.symbol})</h1>

                                {coin.market_cap_change_percentage_24h.toString().substring(0, 3) >= 0 ?
                                    <div className="text-green-500 flex gap-1">{coin.market_cap_change_percentage_24h}%<BiTrendingUp/></div> :
                                    <div className="text-red-500 flex gap-1">{coin.market_cap_change_percentage_24h}%<BiTrendingDown/></div>}
                                <hi className='text-gray-700'>${coin.current_price}</hi>                          </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Coinlist;
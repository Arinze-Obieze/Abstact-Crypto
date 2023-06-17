import Image from "next/image";

const CoinlistData = ({coinlist}) => {
    return (
        <div>

{coinlist && coinlist.map((coin) => (
                    <div key={coin.id} >
                        <div className='flex ml-2 mr-1 p-4 border-2 '>
                            <h1
                                className="mr-2">{coin.market_cap_rank}.</h1>
                            <Image
                                className="mr-2" width={25} height={35} src={coin.image} alt='coin_image' />
                            <span className='' >{coin.name}</span>
                            <div className="flex  justify-between  w-full ">

                                <h1 className="text-gray-400">({coin.symbol})</h1>
                                <hi>{coin.current_price}</hi>
                                <h1>{coin.market_cap_change_percentage_24h}</h1>
                            </div>

                        </div>
                    </div>
                ))}
        </div>
    );
}

export default CoinlistData;
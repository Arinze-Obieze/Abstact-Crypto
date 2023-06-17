 {data && (
                <div className="mt-4 border-2 border-blue-400 p-5">

                    <p>Symbol:{data.name} </p>
                    <p>Rank: </p>
                    <p>Score: {data.coingecko_score}</p>
                    <p>Market Cap Rank: {data.market_cap_rank}</p>
                </div>
            )}
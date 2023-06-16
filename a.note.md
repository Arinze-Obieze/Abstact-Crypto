{paginatedCoinlist.length > 0 ? (
        paginatedCoinlist.map((coin) => (
          <div key={coin.id}>
            <div className="ml-3 border-l-2 border-r-2 mt-3 border-t-2 border-b-2
               border-l-blue-500 py-3 px-2 border-r-blue-00 ">
              <h1>Symbol: {coin.symbol}</h1>
              <h1 className="text-blue-500">Name: {coin.name}</h1>
            </div>
          </div>
        ))
      ) : (
        <p>No coins available.</p> // Render a message when the coinlist is empty
      )}
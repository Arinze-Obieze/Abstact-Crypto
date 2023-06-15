  <section className="text-white text-xl bg-gradient-to-r from-blue-950 to-blue-600 ">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <p className="mb-8 leading-relaxed">
                            Navigate the world of crypto with Abstract Crypto. Get real-time updates on crypto prices, trends, and more.
                        </p>
                        <div className="flex w-full md:justify-start justify-center items-end">
                            <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                                <input
                                    type="text"
                                    id="hero-field"
                                    className="w-full bg-white rounded border bg-opacity-50 border-white focus:ring-2 focus:ring-red-200 focus:bg-white focus:border-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    value={query}
                                    onChange={handleSearch}
                                />
                            </div>
                            <button
                                className="inline-flex 
                            text-white border-2 
                            border-red-500 py-2 px-6 focus:outline-none 
                            hover:bg-red-600 rounded text-lg font-semibold">
                                Search
                            </button>
                        </div>
                        <p className="mt-2 text-base text-red-500">Discover over 1,000+ of Cryptocurrencies</p>
                        <div Name="flex lg:flex-row md:flex-col"></div>
                    </div>
                </div>
            </section>
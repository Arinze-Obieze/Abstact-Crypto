/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

/* eslint-disable react/no-unescaped-entities */
const Herosection = () => {
    return (
        <div>


            <section class="bg-gradient-to-t from-blue-950 to-blue-600 mb-6 ">
                <div class=" container mx-auto flex px-5  md:flex-row flex-col items-center">

                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="font-body font-semibold mt-5  text-3xl   text-white">Buy and Sell Cryptocurrencies with Naira and Usd
                            <hr class=" text-white mt-4 mb-4 opacity-50" />
                        </h1>
                        <p class="mb-8 text-lg leading-relaxed text-gray-300">Looking for a crypto site that buys and sells like a pro? Our platform is a hodler's dream! With lightning-fast transactions and a user-friendly interface, you'll be trading like a crypto-ninja in no time. Plus, we offer a 'Buy Low, HODL High' feature guaranteed to make your friends FOMO. Join us today and let's moon together</p>
                        <div class="flex justify-center space-x-5 mb-10 ">
                            <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-full">Buy Crypto <AiOutlineArrowRight /></button>

                            <button class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded-full ">Sell Crypto <AiOutlineArrowRight /></button>

                        </div>
                    </div>
                </div>
            </section>


            {/**Trending Section */}
            <section className="bg-gradient-to-r from-blue-950 to-blue-600   text-white text-xl ">
                <div className="container mx-auto flex px-5 py-16  md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <p className="mb-8 leading-relaxed font-body">
                            Get Real Live Crypto Prices and Trends
                        </p>
                        <div className="font-display text-base text-red-500">Over 1,000+ Crypto Data at your fingerprints</div>
                    </div>
                    <button class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded-full ">Chart<AiOutlineArrowRight /></button>
                </div>
            </section>

            <section>

            </section>

        </div>




    );
}

export default Herosection;
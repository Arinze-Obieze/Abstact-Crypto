/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

/* eslint-disable react/no-unescaped-entities */
const Herosection = () => {
    return (
        <div>


            <section class="text-gray-600 bg-gray-200 body-font shadow-lg">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover  object-center rounded-3xl" alt="hero" src="/Heroimage.jpg"/>
                    
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Buy and Sell Cryptocurrencies with Naira and Usd
                            <br class="hidden lg:inline-block"/>
                        </h1>
                        <p class="mb-8 text-lg leading-relaxed text-gray-800">Looking for a crypto site that buys and sells like a pro? Our platform is a hodler's dream! With lightning-fast transactions and a user-friendly interface, you'll be trading like a crypto-ninja in no time. Plus, we offer a 'Buy Low, HODL High' feature guaranteed to make your friends FOMO. Join us today and let's moon together</p>
                        <div class="flex justify-center space-x-5 ">
                            <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-full">Buy Crypto <AiOutlineArrowRight/></button>

<button class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded-full shadow-lg">Sell Crypto <AiOutlineArrowRight/></button>

                        </div>
                    </div>
                </div>
            </section>


        </div>




    );
}

export default Herosection;
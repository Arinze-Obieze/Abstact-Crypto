/* eslint-disable react/no-unescaped-entities */
const Herocta = () => {
    return (
        <div>
            <section class="text-gray-600 body-font  border-8">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                        <h1 class="sm:text-3xl text-2xl  title-font mb-4 font-semibold text-gray-900">Maximize Your Profits with Our Crypto Marketplace!</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Unlock the power of crypto with us! Sign up now and enjoy seamless buying and selling of cryptocurrencies. Explore a secure platform, competitive rates, and a world of financial freedom at your fingertips. Don't miss out on the future of finance!</p>
                    </div>
                    <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                        <div class="relative flex-grow w-full">
                            <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
                            <input type="text" id="full-name" name="full-name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative flex-grow w-full">
                            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button class="text-white bg-gradient-to-r from-blue-400 to-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Herocta;
import configCopy from "../../../config";

export function Hero() {

    return (
        <section className="relative flex items-center justify-center h-screen bg-white overflow-hidden">
            <div className="absolute inset-0 z-0">
                {/* Ambient Light */}
                <div className="absolute inset-0 z-2">
                    <div className="absolute h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> 
                </div>
                {/* Gradient Bottom Blue Gradient */}
                <div className="absolute inset-0 z-2">
                    <div className="absolute h-screen w-screen -translate-x-[0%] translate-y-[90%] rounded-full bg-primary opacity-50 blur-[80px]"></div>
                </div> 
            </div>
            <div className="z-10">
                <div className="container px-6 py-16 mx-auto text-center">
                    <div className="max-w-[80%] mx-auto">
                        <h1 className="text-3xl font-extrabold lg:text-4xl">
                            {configCopy.hero.header}
                        </h1>

                        <p className="mt-6 text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique obcaecati illum mollitia.
                        </p>

                        <div className="w-full max-w-sm mx-auto mt-6 bg-transparent border rounded-md dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-300 focus-within:ring-opacity-40">
                            <form className="flex flex-col md:flex-row">
                                <input type="email" placeholder="Enter your email address" className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />

                                <button type="button" className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                                    Join Us
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
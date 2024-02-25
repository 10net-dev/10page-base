import configCopy from "../../../config";

export function Hero() {

    return (
        <section className="relative flex items-center justify-center h-screen bg-white overflow-hidden">
            <div className="absolute inset-0 z-0">
                {/* Ambient Light */}
                <div className="absolute inset-0 z-2">
                    <div className="absolute h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> 
                </div>
            </div>
            <div className="z-10">
                <div className="flex items-center flex-1">
                    <div className="flex flex-col w-full ">
                        <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
                            <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
                                Coming
                            </span>

                            <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
                                Soon
                            </span>
                        </h1>

                        <p className="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 dark:text-white md:text-xl">
                            {configCopy.hero.header}
                        </p>

                        <div className="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
                            <input id="email" type="text" className="px-6 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring sm:mx-2" placeholder="Email Address" />

                            <button className="px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
                                Notify Me
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
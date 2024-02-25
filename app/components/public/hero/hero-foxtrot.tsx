import configCopy from "../../../config";

export function Hero() {

    return (
        <section className="relative flex items-center justify-center h-screen bg-white overflow-hidden">
            <div className="absolute inset-0 z-0">
                {/* Ambient Light */}
                {/* <div className="absolute inset-0 z-2">
                    <div className="absolute h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> 
                </div> */}
                {/* Gradient Bottom Blue Gradient */}
                <div className="absolute inset-0 z-2">
                    <div className="absolute h-screen w-screen -translate-x-[0%] translate-y-[90%] rounded-full bg-primary opacity-50 blur-[80px]"></div>
                </div> 
            </div>
            <div className="z-10">
                <div className="container px-6 py-24 mx-auto text-center">
                    <div className="max-w-[80%] mx-auto">
                        <h1 className="text-3xl font-extrabold lg:text-4xl mt-12">
                            {configCopy.hero.header}
                        </h1>
                        <p className="mt-6 text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique
                            obcaecati illum mollitia.</p>
                        <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                            Start 14-Day free trial
                        </button>
                        <p className="mt-3 text-sm text-gray-400 ">No credit card required</p>
                    </div>

                    <div className="flex justify-center mt-4">
                        <img className="object-cover w-full h-96 rounded-xl lg:w-4/5" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
                    </div>
                </div>
            </div>
        </section>
        );
    }
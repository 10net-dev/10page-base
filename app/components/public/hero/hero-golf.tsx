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
                <section className="relative flex items-center w-full">
                    <div className="relative items-center w-full px-5 py-24 mx-auto lg:px-16 lg:py-36 max-w-7xl md:px-12">
                        <div className="relative flex-col items-start m-auto align-middle">
                        <div className="grid grid-cols-1 gap-6 lg:gap-24 lg:grid-cols-2">
                            <div className="relative items-center gap-12 m-auto lg:inline-flex">
                            <div className="max-w-lg text-center lg:text-left">
                                <div>
                                <h1 className="text-2xl font-extrabold md:text-6xl text-slate-900">
                                    Lorem Ipsum Dolor Sit Amet
                                </h1>
                                <p className="mt-4 text-lg tracking-tight text-slate-500 lg:text-xl">
                                    {configCopy.hero.subtitle}
                                </p>
                                </div>
                                <div className="flex flex-col items-center gap-3 mt-10 lg:flex-row">
                                <a className="inline-flex items-center justify-center w-full px-6 py-4 text-center text-white duration-200 bg-primary border-2 border-primary focus:outline-none focus-visible:outline-black focus-visible:ring-black hover:bg-transparent hover:border-primary hover:text-primary lg:w-auto rounded-xl" href="#_"><svg className="icon icon-tabler icon-tabler-brand-chrome" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                                    <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                                    <circle cx="12" cy="12" r="9"></circle>
                                    <circle cx="12" cy="12" r="3"></circle>
                                    <line x1="12" x2="20.4" y1="9" y2="9"></line>
                                    <line x1="12" x2="20.4" y1="9" y2="9" transform="rotate(120 12 12)"></line>
                                    <line x1="12" x2="20.4" y1="9" y2="9" transform="rotate(240 12 12)"></line>
                                    </svg>
                                    <span className="ml-3">Add to Chrome</span></a>
                                
                                </div>
                                
                            </div>
                            </div>
                            <div className="block w-full mt-12 lg:mt-0">
                            <img alt="hero" className="object-cover object-center w-full mx-auto drop-shadow-xl lg:ml-auto rounded-2xl" src="https://leaddelta.com/wp-content/uploads/2022/12/home-hero.svg"/>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>

    </section>
        );
    }
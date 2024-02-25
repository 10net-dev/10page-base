import { config } from "process";
import configCopy from "../../../config";

export function Hero() {

    return (
        <section className="relative flex items-center justify-center h-screen bg-white overflow-hidden">
            <div className="absolute inset-0 z-0">
                {/* <div className="absolute inset-0 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#2563EB_100%)]"></div> */}
                {/* <div className="absolute h-screen w-screen bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div> */}
                
            </div>
            <div className="z-10">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold">
                        {configCopy.hero.header}
                        <br className="hidden lg:inline-block" />
                    </h1>
                    <p className="mb-8 text-base leading-relaxed">
                        {configCopy.hero.subtitle}
                    </p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                            Try Now
                        </button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                            Contact Us
                        </button>
                    </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                    </div>
                </div>
            </div>
        </section>
        );
    }
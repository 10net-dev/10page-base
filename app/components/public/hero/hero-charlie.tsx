import Image from "next/image";
import { config } from "process";
import configCopy from "../../../config";

export function Hero() {

    const imageUrl = "https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80"

    return (
        <section className="relative max-w-[90%] mx-auto flex items-center justify-center h-screen bg-white overflow-hidden">
            <div className="absolute inset-0 z-0">
                {/* <div className="absolute inset-0 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#2563EB_100%)]"></div> */}
                {/* <div className="absolute h-screen w-screen bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div> */}
                
            </div>
            <div className="z-10">
                <div className="lg:flex ">
                    <div className="flex  items-center justify-center w-full px-6 lg:h-[32rem] lg:w-1/2">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-extrabold  dark:text-white lg:text-4xl">
                                {configCopy.hero.header}    
                            </h2>

                            <p className="mt-4 text-base text-secondary-foreground lg:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates.
                            </p>

                            <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                                <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                Try Now
                                </button>
                                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                        <div className="w-full h-full bg-cover">
                            <div className="w-full h-full bg-primary">
                                <img src={imageUrl} alt="hero"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
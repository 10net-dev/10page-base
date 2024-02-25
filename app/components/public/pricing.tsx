import configCopy from "../../config";

export function Pricing() {


    return (

        <div className="flex flex-col gap-y-[8px] py-[8px] lg:py-[40px] lg:gap-y-[20px] ">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-16">
                    <span className="text-xl font-medium text-primary">
                        {configCopy.pricing.header}
                    </span> 

                    <h1 className="sm:text-3xl text-3xl title-font font-extrabold">
                        {configCopy.pricing.subtitle} 
                    </h1>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center">
                    {configCopy.pricing.options.map((item,index) => (
                        <div className="border-primary rounded-2xl border divide-y divide-gray-200 max-w-[calc(100%-2rem)] mt-20 border-colored">
                            <div className="w-64">
                                <div className="p-6">
                                    <div className="flex justify-between">
                                        <h2 className="text-lg font-semibold text-gray-600">{item.name}</h2>
                                    </div>
                                    <p className="mt-0.5 text-sm text-gray-500">
                                        {item.suitable}
                                    </p>
                                    <p className="mt-8"><span className="text-3xl font-bold tracking-tight text-gray-900">{item.price}</span>
                                        <br/><span className="text-base font-medium text-gray-500"></span>
                                    </p>
                                    <a href="#" target="_blank"
                                        className="flex justify-center w-full py-3 mt-4 text-sm font-medium text-white bg-primary border border-primary rounded active:text-indigo-500 hover:bg-transparent hover:text-primary focus:outline-none focus:ring">
                                            Build Now
                                        </a>
                                </div>
                                <div className="px-6 pt-6 pb-8">
                                    <h3 className="text-sm font-medium text-gray-900">What's included</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        {item.features.map((item,index) => (

                                            <li className="flex space-x-3" key={index}>
                                                    <div className="flex justify-center items-center rounded-full bg-green-100 h-5 w-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                                            className="h-3 w-3 flex-shrink-0 text-green-500">
                                                            <path fill-rule="evenodd"
                                                                d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z"
                                                                clip-rule="evenodd"></path>
                                                        </svg>
                                                    </div>
                                                    <span className="text-sm text-gray-500">{item}</span>
                                                
                                            </li>

                                        ))}
                                        
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    
                </div>
            </div>
        </div>
        
        
        );
    }

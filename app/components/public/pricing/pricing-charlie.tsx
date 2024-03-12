import configCopy from "../../../config";

export function Pricing() {


    return (

        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <span className="text-xl font-medium text-primary">
                        {configCopy.pricing.header}
                    </span>

                    <h1 className="sm:text-3xl text-3xl title-font font-extrabold">
                        {configCopy.pricing.subtitle}
                    </h1>
                </div>
                <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                    <table className="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Plan</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Speed</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Storage</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
                                <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-3">Start</td>
                                <td className="px-4 py-3">5 Mb/s</td>
                                <td className="px-4 py-3">15 GB</td>
                                <td className="px-4 py-3 text-lg text-gray-900">Free</td>
                                <td className="w-10 text-center">
                                    <input name="plan" type="radio" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border-t-2 border-gray-200 px-4 py-3">Pro</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3">25 Mb/s</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$24</td>
                                <td className="border-t-2 border-gray-200 w-10 text-center">
                                    <input name="plan" type="radio" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border-t-2 border-gray-200 px-4 py-3">Business</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3">36 Mb/s</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$50</td>
                                <td className="border-t-2 border-gray-200 w-10 text-center">
                                    <input name="plan" type="radio" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Exclusive</td>
                                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">48 Mb/s</td>
                                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">120 GB</td>
                                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$72</td>
                                <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                                    <input name="plan" type="radio" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                    <a className="text-primary inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    <button className="flex ml-auto text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                </div>
            </div>
        </section>


    );
}

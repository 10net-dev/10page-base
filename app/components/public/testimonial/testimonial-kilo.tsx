import Image from "next/image";
import configCopy from "../../../config";

export function Testimonial() {
    return (


        <div className="container px-5 py-12 text-center mx-auto">

            <span className="text-xl font-medium text-primary">
                {configCopy.testimonial.subtitle}
            </span>

            <h1 className="sm:text-3xl text-3xl title-font font-extrabold">
                {configCopy.testimonial.header}
            </h1>


            <section className="mt-20">
                <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <div className="inline-block p-4 mx-auto text-left align-bottom transition-all transform bg-gray-100 sm:align-middle sm:p-8 rounded-2xl">
                            <div className="flex w-full mb-4">
                                <div className="overflow-hidden ">
                                    <img alt="" className="inline-block object-cover rounded-full h-9 w-9" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80" />
                                </div>
                                <div className="flex-grow pl-3">
                                    <h6 className="text-lg font-medium leading-6 text-black">Sam Samuel</h6>
                                    <p className="text-base text-gray-500">@Twitter_Handle</p>
                                </div>

                            </div>
                            <div className="w-full mb-4">
                                <p className="text-base text-gray-500">
                                    "When building projects, going from an idea to a working version is
                                    crucial. Unwrapped's components have been extremely useful for quickly
                                    mocking up a landing page"
                                </p>
                            </div>
                            <div className="w-full text">
                                <a href="#_" className="text-xs text-right text-blue-500 hover:text-black">Founder of Great company</a>
                            </div>
                        </div>
                        <div className="inline-block p-4 mx-auto text-left align-bottom transition-all transform bg-gray-100 sm:align-middle sm:p-8 rounded-2xl">
                            <div className="flex w-full mb-4">
                                <div className="overflow-hidden ">
                                    <img alt="" className="inline-block object-cover rounded-full h-9 w-9" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80" />
                                </div>
                                <div className="flex-grow pl-3">
                                    <h6 className="text-lg font-medium leading-6 text-black"> Tom Thomas</h6>
                                    <p className="text-base text-gray-500">@Twitter_Handle</p>
                                </div>

                            </div>
                            <div className="w-full mb-4">
                                <p className="text-base text-gray-500">
                                    "When building projects, going from an idea to a working version is
                                    crucial. Unwrapped's components have been extremely useful for quickly
                                    mocking up a landing page"
                                </p>
                            </div>
                            <div className="w-full text">
                                <a href="#_" className="text-xs text-right text-blue-500 hover:text-black">Founder of Great company</a>
                            </div>
                        </div>
                        <div className="inline-block p-4 mx-auto text-left align-bottom transition-all transform bg-gray-100 sm:align-middle sm:p-8 rounded-2xl">
                            <div className="flex w-full mb-4">
                                <div className="overflow-hidden ">
                                    <img alt="" className="inline-block object-cover rounded-full h-9 w-9" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80" />
                                </div>
                                <div className="flex-grow pl-3">
                                    <h6 className="text-lg font-medium leading-6 text-black"> Ana Lana</h6>
                                    <p className="text-base text-gray-500">@Twitter_Handle</p>
                                </div>

                            </div>
                            <div className="w-full mb-4">
                                <p className="text-base text-gray-500">
                                    "When building projects, going from an idea to a working version is
                                    crucial. Unwrapped's components have been extremely useful for quickly
                                    mocking up a landing page"
                                </p>
                            </div>
                            <div className="w-full text">
                                <a href="#_" className="text-xs text-right text-blue-500 hover:text-black">Founder of Great company</a>
                            </div>
                        </div>


                    </div>
                </div>
            </section>


        </div>

    );
}

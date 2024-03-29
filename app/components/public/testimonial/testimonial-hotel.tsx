import Image from "next/image";
import configCopy from "../../../config";

export function Testimonial() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 text-center mx-auto mb-20">

                <span className="text-xl font-medium text-primary">
                    {configCopy.testimonial.subtitle}
                </span>

                <h1 className="mb-20 sm:text-3xl text-3xl title-font font-extrabold">
                    {configCopy.testimonial.header}
                </h1>

                <section
                    className="rounded-md p-6 text-center shadow-lg md:p-12 md:text-left"
                    style={{ "backgroundImage": "url(https://tecdn.b-cdn.net/img/Photos/Others/background2.jpg)" }}>
                    <div className="flex justify-center">
                        <div className="max-w-3xl">
                            <div
                                className="m-4 block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800 dark:shadow-black/20">
                                <div className="md:flex md:flex-row">
                                    <div
                                        className="mx-auto mb-6 flex w-36 items-center justify-center md:mx-0 md:w-96 lg:mb-0">
                                        <img
                                            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg"
                                            className="rounded-full shadow-md dark:shadow-black/30"
                                            alt="woman avatar" />
                                    </div>
                                    <div className="md:ms-6">
                                        <p
                                            className="mb-6 font-light text-neutral-500 dark:text-neutral-300">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                                            quam sapiente molestiae numquam quas, voluptates omnis nulla
                                            ea odio quia similique corrupti magnam.
                                        </p>
                                        <p
                                            className="mb-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                                            Anna Smith
                                        </p>
                                        <p
                                            className="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                                            Product manager
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

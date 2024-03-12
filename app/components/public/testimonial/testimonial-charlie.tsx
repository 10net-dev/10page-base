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

        <div className="flex flex-wrap -m-4">

          <div className="relative max-w-md mx-auto flex flex-col py-6 px-6 bg-white rounded-lg shadow-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRreh9Fwfj6mP6s9CINDCpfUXmi6OrRXJoD8fFI7BV01mzbbC1FhW5MLGQZYgH9PJ8UhC0&usqp=CAU"
              alt=""
              className="absolute rounded-full w-12 h-12 -left-6 -top-6"
            />
            <p className="text-[#5E6282]">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or
              diverted no.”
            </p>
            <p className="mt-6 mb-2">Mike taylor</p>
            <p className="text-sm">USA, CA</p>
          </div>
          <div className="relative max-w-md mx-auto flex flex-col py-6 px-6 bg-white rounded-lg shadow-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRreh9Fwfj6mP6s9CINDCpfUXmi6OrRXJoD8fFI7BV01mzbbC1FhW5MLGQZYgH9PJ8UhC0&usqp=CAU"
              alt=""
              className="absolute rounded-full w-12 h-12 -left-6 -top-6"
            />
            <p className="text-[#5E6282]">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or
              diverted no.”
            </p>
            <p className="mt-6 mb-2">Mike taylor</p>
            <p className="text-sm">USA, CA</p>
          </div>
          <div className="relative max-w-md mx-auto flex flex-col py-6 px-6 bg-white rounded-lg shadow-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRreh9Fwfj6mP6s9CINDCpfUXmi6OrRXJoD8fFI7BV01mzbbC1FhW5MLGQZYgH9PJ8UhC0&usqp=CAU"
              alt=""
              className="absolute rounded-full w-12 h-12 -left-6 -top-6"
            />
            <p className="text-[#5E6282]">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or
              diverted no.”
            </p>
            <p className="mt-6 mb-2">Mike taylor</p>
            <p className="text-sm">USA, CA</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import configCopy from "../../../config";

export function Grid() {

  const imageUrl = "https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="flex flex-col text-center w-full mb-20">
          <span className="text-xl font-medium text-primary">
            {configCopy.grid.header}
          </span>

          <h1 className="sm:text-3xl text-3xl title-font font-extrabold">
            {configCopy.grid.subtitle}
          </h1>
        </div>

        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">

          <div className="grid grid-cols-2 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <figure>
              <img className="w-full bg-gray-200 " src={imageUrl} alt="" width="1310" height="873" />

              <p className="mt-5 text-lg font-medium leading-6 text-black">
                G-Radient is back in town
              </p>
              <p className="mt-3 text-base text-gray-500">
                Your design portfolio website shouldn’t just be a portfolio, it
                should also be a sales tool.
              </p>
              <div className="flex gap-3 mt-10 justify-left">
                <a className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600" href="#_">
                  <span> Read more   → </span>
                </a>
              </div>
            </figure>
            <figure>
              <img className="w-full bg-gray-200 " src={imageUrl} alt="" width="1310" height="873" />

              <p className="mt-5 text-lg font-medium leading-6 text-black">
                Pink dreams
              </p>
              <p className="mt-3 text-base text-gray-500">
                Your design portfolio website shouldn’t just be a portfolio, it
                should also be a sales tool.
              </p>
              <div className="flex gap-3 mt-10 justify-left">
                <a className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600" href="#_">
                  <span> Read more   → </span>
                </a>
              </div>
            </figure>
            <figure>
              <img className="w-full bg-gray-200 " src={imageUrl} alt="" width="1310" height="873" />

              <p className="mt-5 text-lg font-medium leading-6 text-black">
                Lavender ender
              </p>
              <p className="mt-3 text-base text-gray-500">
                Your design portfolio website shouldn’t just be a portfolio, it
                should also be a sales tool.
              </p>
              <div className="flex gap-3 mt-10 justify-left">
                <a className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600" href="#_">
                  <span> Read more   → </span>
                </a>
              </div>
            </figure>
            <figure>
              <img className="w-full bg-gray-200 " src={imageUrl} alt="" width="1310" height="873" />

              <p className="mt-5 text-lg font-medium leading-6 text-black">
                Smurf life
              </p>
              <p className="mt-3 text-base text-gray-500">
                Your design portfolio website shouldn’t just be a portfolio, it
                should also be a sales tool.
              </p>
              <div className="flex gap-3 mt-10 justify-left">
                <a className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600" href="#_">
                  <span> Read more   → </span>
                </a>
              </div>
            </figure>
          </div>


        </div>
      </div>
    </section>
  );
}
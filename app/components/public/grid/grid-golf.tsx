import configCopy from "../../../config";

export function Grid() {

  const imageUrl = "https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col text-center w-full mb-4">
          <span className="text-xl font-medium text-primary">
            {configCopy.grid.header}
          </span>

          <h1 className="sm:text-3xl text-3xl title-font font-extrabold">
            {configCopy.grid.subtitle}
          </h1>
        </div>

        <div className="relative mx-auto bg-white bg-opacity-20 bg-cover bg-center md:max-w-screen-lg">
          <img className="absolute h-full w-full object-cover" src="https://images.unsplash.com/photo-1507373318898-766a0e260b51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <div className="text-white lg:w-2/3">
            <div className="bg-blue-600 bg-opacity-95 p-5 opacity-90 backdrop-blur-lg lg:p-8">
              <p className="mb-4 font-serif font-light">August 03, 2022</p>
              <h2 className="font-serif text-4xl font-bold">Leading the next generation of innovators</h2>
              <a href="#" className="mt-6 inline-block rounded-xl border-2 px-10 py-3 font-semibold border-white hover:bg-white hover:text-blue-600"> Read Now </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
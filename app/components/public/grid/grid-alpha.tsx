import configCopy from "../../../config";

export function Grid() {

  const imageUrl = "https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="flex flex-col text-center w-full mb-12">
          <span className="text-xl font-medium text-primary">
            {configCopy.grid.header}
          </span>

          <h1 className="sm:text-3xl text-3xl title-font font-extrabold">
            {configCopy.grid.subtitle}
          </h1>
        </div>

        <div className="max-w-xl py-12 mx-auto text-left lg:max-w-7xl">
          <div>
            <div className="grid grid-cols-3 gap-12 text-center lg:grid-cols-5 lg:space-y-0">
              <div>
                <div>
                  <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                    ❖
                  </div>
                  <p className="mt-4 text-lg font-medium leading-6 text-black">
                    Navigation
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                    ❖
                  </div>
                  <p className="mt-4 text-lg font-medium leading-6 text-black">
                    Heroes
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                    ❖
                  </div>
                  <p className="mt-4 text-lg font-medium leading-6 text-black">
                    Features
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                    ❖
                  </div>
                  <p className="mt-4 text-lg font-medium leading-6 text-black">Grids</p>
                </div>
              </div>
              <div>
                <div>
                  <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                    ❖
                  </div>
                  <p className="mt-4 text-lg font-medium leading-6 text-black">
                    Footers
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                    ❖
                  </div>
                  <p className="mt-4 text-lg font-medium leading-6 text-black">CTA's</p>
                </div>
              </div>
              <div>
                <div>
                  <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                    ❖
                  </div>
                  <p className="mt-4 text-lg font-medium leading-6 text-black">Forms</p>
                </div>
              </div>
              <div>
                <div>
                  <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                    ❖
                  </div>
                  <p className="mt-4 text-lg font-medium leading-6 text-black">
                    Testimonials
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                    ❖
                  </div>
                  <p className="mt-4 text-lg font-medium leading-6 text-black">
                    Pricing
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                    ❖
                  </div>
                  <p className="mt-4 text-lg font-medium leading-6 text-black">Blogs</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
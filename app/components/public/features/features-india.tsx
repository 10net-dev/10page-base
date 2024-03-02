import configCopy from "../../../config";

export function Features() {

  const imageUrl = "https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">

        <div className="flex flex-col text-center w-full mb-12">
          <span className="text-xl font-medium text-primary">
            {configCopy.features.header}
          </span>

          <h1 className="sm:text-3xl text-3xl title-font font-extrabold">
            {configCopy.features.subtitle}
          </h1>
        </div>
        <div className="flex items-center justify-center mt-24">
          <div className="gap-12 lg:grid-cols-2 lg:grid object-center justify-center">
            <div>
              <div className="max-w-xl">
                <div>
                  <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                    I am a slightly longer heading than the others, to explain your
                    projects benefits and make conversions
                  </p>
                </div>
              </div>
              <div className="mx-auto mt-12 lg:max-w-7xl">
                <ul role="list" className="grid grid-cols-2 gap-4 list-none lg:gap-6">
                  <li>
                    <div>
                      <p className="mt-5 text-lg font-medium leading-6 text-black">
                        Easy onboarding
                      </p>
                    </div>
                    <div className="mt-2 text-base text-gray-500">
                      Plus, our platform is constantly evolving to meet the changing
                      needs.
                    </div>
                  </li>
                  <li>
                    <div>
                      <p className="mt-5 text-lg font-medium leading-6 text-black">
                        Customer support
                      </p>
                    </div>
                    <div className="mt-2 text-base text-gray-500">
                      Plus, our platform is constantly evolving to meet the changing
                      needs.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="max-w-xl py-12 mx-auto text-left lg:max-w-7xl">
                <h2 className="sr-only">Features.</h2>
                <div>
                  <div className="grid grid-cols-3 gap-12 text-center lg:grid-cols-3 lg:space-y-0">
                    <div>
                      <div>
                        <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                          ❖
                        </div>
                        <p className="mt-5 font-medium leading-6 text-black">Footers</p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                          ❖
                        </div>
                        <p className="mt-5 font-medium leading-6 text-black">CTA's</p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                          ❖
                        </div>
                        <p className="mt-5 font-medium leading-6 text-black">Forms</p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                          ❖
                        </div>
                        <p className="mt-5 font-medium leading-6 text-black">
                          Testimonials
                        </p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                          ❖
                        </div>
                        <p className="mt-5 font-medium leading-6 text-black">Pricing</p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="flex items-center justify-center w-12 h-12 mx-auto text-black bg-gray-100 rounded-xl">
                          ❖
                        </div>
                        <p className="mt-5 font-medium leading-6 text-black">Blogs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}
import configCopy from "../../../config";

export function Features() {

  const imageUrl = "https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    return (
      <section>
      <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="flex flex-col text-center w-full mb-16">
            <span className="text-xl font-medium text-primary">
                {configCopy.features.header}
            </span> 

            <h1 className="sm:text-3xl text-3xl title-font font-extrabold">
                {configCopy.features.subtitle} 
            </h1>
        </div>
        <div className="relative flex-col items-start m-auto align-middle">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
            <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
              <div className="max-w-xl text-center lg:text-left">
                <div><p className="text-2xl font-medium tracking-tight text-primary sm:text-4xl">
      I am a short heading
    </p>
    <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
      Use this paragraph to share information about your company or products. Make
      it engaging and interesting, and showcase your brand's personality. Thanks for
      visiting our website!
    </p>
    </div>
                <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                  <a href="#_" className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black">
                    Button
                  </a>
                  <a href="#_" className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600">
                    Learn more &nbsp; →
                  </a>
                </div>
              </div>
            </div>
            <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
              <img className="object-cover object-center w-full border lg:ml-auto" 
              style={{ height: "525px" }}
              alt="hero" src={imageUrl}/>
            </div>
          </div>
        </div>
        <div>
          <div className="pt-12 mx-auto lg:max-w-7xl">
            <dl className="grid grid-cols-1 gap-6 space-y-0 text-center lg:gap-24 lg:grid-cols-3 lg:text-left">
              <div>
                <div>
                  <p className="mt-5 text-lg font-medium leading-6 text-black">
                    Developer experience
                  </p>
                </div>
                <div className="mt-2 text-base text-gray-500">
                  Plus, our platform is constantly evolving to meet the changing
                  needs of the tech industry, ensuring you'll always be ahead.
                </div>
              </div>
              <div>
                <div>
                  <p className="mt-5 text-lg font-medium leading-6 text-black">
                    Designers go-to app
                  </p>
                </div>
                <div className="mt-2 text-base text-gray-500">
                  Plus, our platform is constantly evolving to meet the changing
                  needs of the tech industry, ensuring you'll always be ahead.
                </div>
              </div>
              <div>
                <div>
                  <p className="mt-5 text-lg font-medium leading-6 text-black">
                    Easy onboarding
                  </p>
                </div>
                <div className="mt-2 text-base text-gray-500">
                  Plus, our platform is constantly evolving to meet the changing
                  needs of the tech industry, ensuring you'll always be ahead.
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
        );
    }
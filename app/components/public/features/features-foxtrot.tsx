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

        <div className="w-full mx-auto text-left">
          <div className="relative flex-col items-center m-auto align-middle">
            <div className="items-center gap-12 text-left lg:gap-24 lg:inline-flex">
              <div className="flex flex-col m-auto md:order-first">
                <div className="max-w-xl">
                  <div>
                    <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                      I am a short heading
                    </p>
                  </div>
                </div>
                <div className="mt-6 lg:max-w-7xl">
                  <ul role="list" className="grid grid-cols-2 gap-4 list-none lg:gap-6">
                    <li>
                      <div>
                        <p className="mt-5 text-lg font-medium leading-6 text-black">
                          Developer experience
                        </p>
                      </div>
                      <div className="mt-2 text-base text-gray-500">
                        Plus, our platform is constantly evolving to meet the
                        changing needs of the tech industry, ensuring you'll always
                        be ahead.
                      </div>
                    </li>
                    <li>
                      <div>
                        <p className="mt-5 text-lg font-medium leading-6 text-black">
                          Designers go-to app
                        </p>
                      </div>
                      <div className="mt-2 text-base text-gray-500">
                        Plus, our platform is constantly evolving to meet the
                        changing needs of the tech industry, ensuring you'll always
                        be ahead.
                      </div>
                    </li>
                    <li>
                      <div>
                        <p className="mt-5 text-lg font-medium leading-6 text-black">
                          Easy onboarding
                        </p>
                      </div>
                      <div className="mt-2 text-base text-gray-500">
                        Plus, our platform is constantly evolving to meet the
                        changing needs of the tech industry, ensuring you'll always
                        be ahead.
                      </div>
                    </li>
                    <li>
                      <div>
                        <p className="mt-5 text-lg font-medium leading-6 text-black">
                          Customer support
                        </p>
                      </div>
                      <div className="mt-2 text-base text-gray-500">
                        Plus, our platform is constantly evolving to meet the
                        changing needs of the tech industry, ensuring you'll always
                        be ahead.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                <img className="object-cover object-center w-full mx-auto 
                bg-gray-300 border lg:ml-auto" 
                style={{height:"525px"}}
                alt="hero" src={imageUrl}/>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
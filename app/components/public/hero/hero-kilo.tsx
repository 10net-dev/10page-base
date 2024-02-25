import configCopy from "../../../config";

export function Hero() {

  const imageUrl = "https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?q=60&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  

  

    return (
        <section className="relative flex items-center justify-center h-screen bg-white overflow-hidden">
          <div className="absolute inset-0 z-0">
              {/* Ambient Light */}
              {/* <div className="absolute inset-0 z-2">
                  <div className="absolute h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> 
              </div> */}
              {/* Gradient Bottom Blue Gradient */}
              <div className="absolute inset-0 z-2">
                  <div className="absolute h-screen w-screen -translate-x-[0%] translate-y-[90%]  bg-primary opacity-50 blur-[80px]"></div>
              </div> 
          </div>
          <div className="z-10">
              
            
          <header className="bg-gray-100 lg:bg-transparent">
                <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 py-16 md:py-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:py-20 xl:py-32 items-start">
                <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 pb-14 lg:pl-16 xl:pl-20">
                    <div className="hidden lg:absolute lg:bottom-0 lg:-top-32 lg:left-[-100vw] lg:right-[-100vw] lg:block max-h-64 lg:bg-primary"></div>
                    
                  </div>
                  <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
                    <div className="relative z-10 flex mx-auto overflow-hidden md:w-80 lg:w-auto">
                      <img 
                        alt="" 
                        src={imageUrl} 
                        decoding="async" 
                        data-nimg="future" 
                        style={{ height: "525px" }} 
                        className="object-cover object-center rounded-xl" 
                      />
                    </div>
                  </div>

                  <div className="pt-16 bg-white lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pr-16 xl:pr-20">
                    <div className="px-4 mx-auto sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                      <div className="max-w-xl text-center lg:text-left">
                        <div><h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-4xl">
                I am a short heading
              </h1>
              <h2 className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                Use this paragraph to share information about your company or products. Make
                it engaging and interesting, and showcase your brand's personality. Thanks for
                visiting our website!
              </h2>
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
                  </div>
                </div>
              </header>
            
              
          </div>
        </section>
        );
    }
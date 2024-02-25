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
              
            
          <section className="relative">
                <div>
                  <div className="absolute top-0 left-0 z-0 w-screen h-[658px]">
                    <div className="absolute top-[-288px] left-1/2 w-[913px] h-[658px] z-0 transform mt-[360px] ml-[-120px] sm:ml-[304px] sm:mt-[500px] md:ml-[184px] lg:ml-[104px] rotate-[30deg] opacity-10 lg:opacity-100 bg-gradient-to-br from-blue-500 to-pink-500">
                    </div>
                    <div className="absolute top-[-288px] left-1/2 w-[729px] h-[343px] z-0 transform mt-[360px] ml-[-120px] sm:ml-[304px] sm:mt-[500px] md:ml-[184px] lg:ml-[104px] rotate-[30deg] opacity-90 lg:opacity-100 bg-gradient-to-br from-pink-500 to-blue-500">
                    </div>
                  </div>
                </div>
                <div className="relative py-20 overflow-hidden sm:py-32 lg:pb-32 xl:pb-36">
                  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
                      <div className="relative z-10 max-w-2xl mx-auto lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
                        <div className="max-w-xl lg:p-10">
                          <div><p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
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
                    </div>
                  </div>
                </div>
              </section>
            
              
          </div>
        </section>
        );
    }
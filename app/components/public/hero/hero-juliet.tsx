import configCopy from "../../../config";

export function Hero() {

  const imageUrl = "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=50&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  

  

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
                
                
              <section className="relative flex items-center w-full">
                <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
                  <div className="relative flex-col items-start m-auto align-middle">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                      <div className="relative items-center gap-12 m-auto lg:inline-flex">
                        <div className="max-w-xl text-center lg:text-left">
                          <div>
                            <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
                              I am a short heading
                            </h1>
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
                      <div className="order-first block w-full m-auto items-center justify-center rounded-full lg:mt-0">
                        <img className="object-cover object-center w-full mx-auto bg-gray-300 rounded-2xl lg:ml-auto " alt="hero" 
                        src={imageUrl} 
                        style={{
                          backgroundSize: "cover", 
                          backgroundPosition: "center",
                          filter: "grayscale(50%)",
                          opacity: 0.8
                        }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            
              
            </div>
          </section>
        );
    }
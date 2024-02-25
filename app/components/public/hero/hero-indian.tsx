import configCopy from "../../../config";

export function Hero() {

  const imageUrl = "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=50&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  const imageVersion = <section className="items-center w-full">
    <div className="container flex flex-col items-start px-8 pt-24 pb-20 mx-auto overflow-hidden  max-w-7xl md:flex-row lg:px-16 object-cover rounded-lg"
    style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover", 
        backgroundPosition: "center",
        filter: "grayscale(100%)",
        opacity: 0.8
      }}>
      <div className="flex flex-col mb-8 text-center lg:flex-grow md:w-1/2 md:items-ceter md:text-left backdrop-blur-xl bg-white/30">
        <div className="max-w-xl text-center lg:text-left py-4 px-8">
          <div>

            
            <h1 className="text-3xl  font-extrabold tracking-tight text-black sm:text-4xl">
              I am a short heading
            </h1>
            <p className="max-w-xl mt-4 font-bold text-black tracking-tight">
              We all make mistakes, have struggles, and even regret things in our
              past. But you are not your mistakes, you are not your struggles, and
              you are here NOW with the power to shape your day and your future
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
            <a className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black" href="#_">
              Button
            </a>
            <a className="inline-flex items-center text-sm font-semibold leading-6 text-gray-900" href="#_">
              <span> Learn more </span>
              &nbsp; →
            </a>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="px-5 pt-6 mx-auto lg:max-w-6xl lg:px-0">
        <dl className="grid grid-cols-1 gap-6 space-y-0 lg:gap-24 lg:grid-cols-3">
          <div>
            <div>
              <p className="mt-5 text-lg font-semibold leading-6 text-black">
                Developer experience
              </p>
            </div>
            <div className="mt-2 text-base text-gray-600">
              Do what you think is right. Don't let people make the decision of
              right or wrong for you.
            </div>
          </div>
          <div>
            <div>
              <p className="mt-5 text-lg font-semibold leading-6 text-black">
                Designers go-to app
              </p>
            </div>
            <div className="mt-2 text-base text-gray-600">
              Only you can take inner freedom away from yourself, or give it to
              yourself. Nobody else can
            </div>
          </div>
          <div>
            <div>
              <p className="mt-5 text-lg font-semibold leading-6 text-black">
                Easy onboarding
              </p>
            </div>
            <div className="mt-2 text-base text-gray-600">
              Your greatest self has been waiting your whole life; don't make it
              wait any longer
            </div>
          </div>
        </dl>
      </div>
    </div>


  </section>;

  const colorVersion = 
  <section className="items-center w-full bg-white lg:h-screen">
    <div className="container flex flex-col items-start px-8 pt-24 pb-20 mx-auto overflow-hidden bg-gray-100 max-w-7xl md:flex-row lg:px-16 ">
      <div className="flex flex-col mb-8 text-center lg:flex-grow md:w-1/2 md:items-ceter md:text-left">
        <div className="max-w-xl text-center lg:text-left">
          <div>
  
            
            <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
              I am a short heading
            </p>
            <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
              We all make mistakes, have struggles, and even regret things in our
              past. But you are not your mistakes, you are not your struggles, and
              you are here NOW with the power to shape your day and your future
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
            <a className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black" href="#_">
              Button
            </a>
            <a className="inline-flex items-center text-sm font-semibold leading-6 text-gray-900" href="#_">
              <span> Learn more </span>
              &nbsp; →
            </a>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="px-5 pt-6 mx-auto lg:max-w-6xl lg:px-0">
        <dl className="grid grid-cols-1 gap-6 space-y-0 lg:gap-24 lg:grid-cols-3">
          <div>
            <div>
              <p className="mt-5 text-lg font-semibold leading-6 text-black">
                Developer experience
              </p>
            </div>
            <div className="mt-2 text-base text-gray-600">
              Do what you think is right. Don't let people make the decision of
              right or wrong for you.
            </div>
          </div>
          <div>
            <div>
              <p className="mt-5 text-lg font-semibold leading-6 text-black">
                Designers go-to app
              </p>
            </div>
            <div className="mt-2 text-base text-gray-600">
              Only you can take inner freedom away from yourself, or give it to
              yourself. Nobody else can
            </div>
          </div>
          <div>
            <div>
              <p className="mt-5 text-lg font-semibold leading-6 text-black">
                Easy onboarding
              </p>
            </div>
            <div className="mt-2 text-base text-gray-600">
              Your greatest self has been waiting your whole life; don't make it
              wait any longer
            </div>
          </div>
        </dl>
      </div>
    </div>
  </section>;

    return (
        <section className="relative flex items-center justify-center h-screen bg-white overflow-hidden">
            <div className="absolute inset-0 z-0">
                {/* Ambient Light */}
                {/* <div className="absolute inset-0 z-2">
                    <div className="absolute h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> 
                </div> */}
                {/* Gradient Bottom Blue Gradient */}
                <div className="absolute inset-0 z-2">
                    <div className="absolute h-screen w-screen -translate-x-[0%] translate-y-[90%] rounded-full bg-primary opacity-50 blur-[80px]"></div>
                </div> 
            </div>
            <div className="z-10">
                
                {imageVersion}
              
            </div>
          </section>
        );
    }
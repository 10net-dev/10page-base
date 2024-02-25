import configCopy from "../../../config";

export function Features() {

  const imageUrl = "https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl h-screen">

        <div className="flex flex-col text-center w-full mb-12">
          <span className="text-xl font-medium text-primary">
            {configCopy.features.header}
          </span>

          <h1 className="sm:text-3xl text-3xl title-font font-extrabold">
            {configCopy.features.subtitle}
          </h1>
        </div>
        
        <div className="grid items-start grid-cols-1 md:grid-cols-2">
                    <div className="lg:pr-24 md:pr-12">
                      <h2 className="mt-6 text-3xl font-medium text-black">
                        I am a slightly longer heading that the others and I am align to the
                        left
                      </h2>
                      <p className="mt-5 text-base text-gray-500">
                        Receive dividends bull investment mutual funds rise federal funds
                        strategy substantially treasury municipal public index funds.
                      </p>
                      <ul className="grid grid-cols-2 gap-4 mt-12 list-none lg:gap-6" role="list">
                        <li>
                          <div>
                            <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                              ❖
                            </div>
                            <p className="mt-5 text-lg font-medium leading-6 text-black">
                              Prebuilt integrations
                            </p>
                          </div>
                          <div className="mt-2 text-base text-gray-500">
                            Municipal management performance corporate investment grade bonds.
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                              ❖
                            </div>
                            <p className="mt-5 text-lg font-medium leading-6 text-black">
                              Tools for every stack
                            </p>
                          </div>
                          <div className="mt-2 text-base text-gray-500">
                            Corporate bonds debt fiat risk return municipal bonds retirement
                            interest rate.
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="h-full mt-12 lg:mt-0 border-mercury-400 lg:pl-24 md:border-l md:pl-12">
                      <img alt="Lexingtøn thumbnail" 
                      style={{height:"525px"}}
                      className="object-cover bg-gray-300" src={imageUrl}/>
                    </div>
                  </div>


      </div>
    </section>
  );
}
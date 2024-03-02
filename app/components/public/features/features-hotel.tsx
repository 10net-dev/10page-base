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

        <div>

          <div className="relative overflow-hidden">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative overflow-hidden shadow-xl">
                <div className="absolute inset-0 ">
                  <img className="object-cover w-full h-full opacity-20" src={imageUrl} alt="" />
                  <div className="absolute inset-0 bg-primary  rounded-2xl mix-blend-multiply"></div>
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <div className="max-w-2xl p-10 mx-auto text-center">
                    <div>
                      <p className="text-3xl tracking-tight text-white">
                        I am a slightly shorter heading
                      </p>
                      <p className="max-w-xl mt-4 text-lg tracking-tight text-gray-200">
                        If you could kick the person in the pants responsible for
                        most of your trouble, you wouldn't sit for a month
                      </p>
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
import configCopy from "../../../config";

export function Grid() {

  const imageUrl = "https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="flex flex-col text-center w-full mb-20">
          <span className="text-xl font-medium text-primary">
            {configCopy.grid.header}
          </span>

          <h1 className="sm:text-3xl text-3xl title-font font-extrabold">
            {configCopy.grid.subtitle}
          </h1>
        </div>

        <div className="grid w-full grid-cols-1 mx-auto lg:grid-cols-3">
          <div className="max-w-md p-6 mx-auto">
            <div className="gap-3 lg:inline-flex lg:items-center">
              <div className="flex items-center justify-center w-12 h-12 text-black rounded-xl bg-gray-50">
                ❖
              </div>
              <p className="mt-4 text-lg font-medium leading-6 text-black lg:mt-0">
                Developer experience
              </p>
            </div>
            <p className="mt-3 text-base text-gray-500">
              I am so happy, my dear friend, so absorbed in the exquisite sense of
              mere tranquil existence, that I neglect my talents.
            </p>
          </div>
          <div className="max-w-md p-6 mx-auto">
            <div className="gap-3 lg:inline-flex lg:items-center">
              <div className="flex items-center justify-center w-12 h-12 text-black rounded-xl bg-gray-50">
                ❖
              </div>
              <p className="mt-4 text-lg font-medium leading-6 text-black lg:mt-0">
                Designers go-to app
              </p>
            </div>
            <p className="mt-3 text-base text-gray-500">
              I am so happy, my dear friend, so absorbed in the exquisite sense of
              mere tranquil existence, that I neglect my talents.
            </p>
          </div>
          <div className="max-w-md p-6 mx-auto">
            <div className="gap-3 lg:inline-flex lg:items-center">
              <div className="flex items-center justify-center w-12 h-12 text-black rounded-xl bg-gray-50">
                ❖
              </div>
              <p className="mt-4 text-lg font-medium leading-6 text-black lg:mt-0">
                Easy onboarding
              </p>
            </div>
            <p className="mt-3 text-base text-gray-500">
              I am so happy, my dear friend, so absorbed in the exquisite sense of
              mere tranquil existence, that I neglect my talents.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
}